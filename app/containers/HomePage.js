// @flow
import React, { Component } from 'react';
import * as css from './HomePageStyle';
import List from '@/components/List';
import Menu from '@/components/Menu';
import Main from '@/components/Main';

export default class HomePage extends Component {
  render() {
    return (
      <css.Home>
        <Menu />
        <List />
        <Main />
      </css.Home>
    );
  }
}
