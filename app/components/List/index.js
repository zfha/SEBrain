import React, { Component } from 'react';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';
import * as css from './style';

class List extends Component {
  constructor(props) {
    super(props);
    this.clickNewI = this.clickNewI.bind(this);
  }

  clickNewI() {
    this.props.dispatch({
      type: 'page/add',
      payload: {}
    });
  }

  clickArticle(index) {
    this.props.dispatch({
      type: 'page/select',
      payload: { index }
    });
  }

  componentDidMount() {
    const { focusArticle } = this.props;
    document.onkeydown = e => {
      const keyCode = e.keyCode || e.which || e.charCode;
      const ctrlKey = e.ctrlKey || e.metaKey;
      if (keyCode == 8 && ctrlKey) {
        Swal.fire({
          title: 'Are you sure?',
          text: `delete ${focusArticle.name || '未命名新笔记'} !`,
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then(result => {
          if (result.value) {
            // 删除
          }
        });
      }
    };
  }

  render() {
    const { articles, focusArticle } = this.props;
    return (
      <css.ListStyle>
        <css.ListHeader>
          <css.SearchInput
            placeholder="Search"
            onChange={e => {
              this.props.dispatch({
                type: 'page/search',
                payload: {
                  key: e.target.value
                }
              });
            }}
          />
          <css.NewI className="iconfont icon-edit" onClick={this.clickNewI} />
        </css.ListHeader>
        <css.List>
          <ul>
            {articles.map((article, index) => (
              <css.ListItem
                focus={article._id === focusArticle._id}
                key={index}
                onClick={() => {
                  this.clickArticle(index);
                }}
              >
                <css.ListItemContent>
                  <css.ListItemTitle empty={!article.title}>
                    {article.title || '未命名新笔记'}
                  </css.ListItemTitle>
                  <css.Line2Div>
                    {article.desc || '调整心情，写点东西'}
                  </css.Line2Div>
                </css.ListItemContent>
              </css.ListItem>
            ))}
          </ul>
        </css.List>
      </css.ListStyle>
    );
  }
}

export default connect(v => v.page)(List);
