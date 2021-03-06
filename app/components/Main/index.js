import React, { Component } from 'react';
import Editor from 'draft-js-plugins-editor';
import createMarkdownShortcutsPlugin from 'draft-js-markdown-shortcuts-plugin';
import { stateToHTML } from 'draft-js-export-html';
import { stateFromHTML } from 'draft-js-import-html';
import './editor-theme.scss';
import {
  EditorState,
  Modifier,
  ContentState,
  convertFromRaw,
  convertToRaw
} from 'draft-js';
import Prism from 'prismjs';
import { connect } from 'react-redux';
import createPrismPlugin from 'draft-js-prism-plugin';
import { c } from 'bowser';
import * as css from './style';

const plugins = [
  createPrismPlugin({
    prism: Prism
  }),
  createMarkdownShortcutsPlugin()
];

class MainEditor extends Component {
  constructor(props) {
    super(props);
    this.editorRef = React.createRef();
    this.handleKeyEvent = this.handleKeyEvent.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  state = {
    editorState: EditorState.createEmpty(),
    focusId: undefined
  };

  static getDerivedStateFromProps(props, state) {
    const { focusArticle } = props;
    const { focusId, editorState } = state;
    if (focusId !== focusArticle._id) {
      return {
        ...state,
        focusId: focusArticle._id,
        editorState: EditorState.push(
          state.editorState,
          // stateFromHTML(focusArticle.content || '')
          convertFromRaw(JSON.parse(focusArticle.originContent || '{}'))
        )
      };
    }
    return { ...state };
  }

  onChange = editorState => {
    const currentContent = editorState.getCurrentContent();
    const originContent = convertToRaw(currentContent);
    const html = stateToHTML(currentContent);

    const { focusArticle } = this.props;
    if (html !== focusArticle.content) {
      this.props.dispatch({
        type: 'page/update',
        payload: {
          id: this.props.focusArticle._id,
          content: html,
          originContent: JSON.stringify(originContent)
        }
      });
    }

    this.setState({
      editorState
    });
  };

  _insertText(appendContent) {
    const editorState = this.state.editorState;
    const selection = editorState.getSelection();
    const contentState = editorState.getCurrentContent();
    const ncs = Modifier.insertText(contentState, selection, appendContent);
    const es = EditorState.push(editorState, ncs, 'insert-fragment');
    this.setState({
      editorState: es
    });
  }

  handleKeyEvent = e => {
    if (e.keyCode === 9) {
      // 插入tab制表符
      e.preventDefault();
      this._insertText('    ');
    }
  };

  render() {
    const { editorState } = this.state;
    return (
      <css.MainStyle
        onKeyDown={this.handleKeyEvent}
        onClick={() => {
          this.editorRef.current.focus();
        }}
      >
        <css.MainNav />
        {editorState && (
          <Editor
            ref={this.editorRef}
            style={{ height: '100%' }}
            editorState={this.state.editorState}
            onChange={this.onChange}
            plugins={plugins}
          />
        )}
      </css.MainStyle>
    );
  }
}

export default connect(v => v.page)(MainEditor);
