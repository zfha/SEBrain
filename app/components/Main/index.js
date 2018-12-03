import React, { Component } from 'react';
import Editor from 'draft-js-plugins-editor';
import createMarkdownShortcutsPlugin from 'draft-js-markdown-shortcuts-plugin';
import { EditorState, Modifier } from 'draft-js';
import Prism from 'prismjs';
import createPrismPlugin from 'draft-js-prism-plugin';
import * as css from './style';

const prismPlugin = createPrismPlugin({
  prism: Prism
});
const plugins = [prismPlugin, createMarkdownShortcutsPlugin()];

export default class MainEditor extends Component {
  constructor(props) {
    super(props);
    this.handleKeyEvent = this.handleKeyEvent.bind(this);
  }

  state = {
    editorState: EditorState.createEmpty()
  };

  onChange = editorState => {
    console.log(editorState);
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
    return (
      <css.MainStyle onKeyDown={this.handleKeyEvent}>
        <Editor
          style={{ height: '100%' }}
          editorState={this.state.editorState}
          onChange={this.onChange}
          plugins={plugins}
        />
      </css.MainStyle>
    );
  }
}
