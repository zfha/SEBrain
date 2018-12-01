import React, { Component } from 'react';
import * as css from './style';

export default function List() {
  return (
    <css.ListStyle>
      <css.ListHeader>
        <css.SearchInput placeholder="Search" />
      </css.ListHeader>
      <css.List>
        <ul>
          <css.ListItem>
            <css.ListItemTitle>Title</css.ListItemTitle>
            <css.Line2Div>
              ssh root@118.31.68.55 -i yingjunjiao-login.pem 线上机器
              的用户名密码，一般都是 root/Hello1
            </css.Line2Div>
          </css.ListItem>
          <css.ListItem>
            <css.ListItemTitle>Title</css.ListItemTitle>
            <css.Line2Div>
              ssh root@118.31.68.55 -i yingjunjiao-login.pem 线上机器
              的用户名密码，一般都是 root/Hello1
            </css.Line2Div>
          </css.ListItem>
          <css.ListItem>
            <css.ListItemTitle>Title</css.ListItemTitle>
            <css.Line2Div>
              ssh root@118.31.68.55 -i yingjunjiao-login.pem 线上机器
              的用户名密码，一般都是 root/Hello1
            </css.Line2Div>
          </css.ListItem>
        </ul>
      </css.List>
    </css.ListStyle>
  );
}
