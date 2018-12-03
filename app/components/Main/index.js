import React, { Component } from 'react';
import Editor from 'draft-js-plugins-editor';
import createMarkdownShortcutsPlugin from 'draft-js-markdown-shortcuts-plugin';
import { EditorState } from 'draft-js';
import Prism from 'prismjs';
import createPrismPlugin from 'draft-js-prism-plugin';
import * as css from './style';

const prismPlugin = createPrismPlugin({
  prism: Prism
});
const plugins = [prismPlugin, createMarkdownShortcutsPlugin()];

export default class MainEditor extends Component {
  state = {
    editorState: EditorState.createEmpty()
  };

  onChange = editorState => {
    console.log(editorState);
    this.setState({
      editorState
    });
  };

  render() {
    return (
      <css.MainStyle>
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
