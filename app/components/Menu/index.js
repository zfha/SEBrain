import React, { Component } from 'react';
import * as css from './style';

export default function Menu() {
  return (
    <css.MenuContainer>
      <css.MenuNav />
      <ul>
        <css.MenuItemCode>
          <i />
          <span>代码</span>
        </css.MenuItemCode>
      </ul>
    </css.MenuContainer>
  );
}
