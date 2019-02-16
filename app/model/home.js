import { ipcRenderer } from 'electron';
import _debounce from 'lodash.debounce';

const _debounceUpdate = _debounce(update, 1000);

export default {
  namespace: 'page',
  state: {
    articles: [],
    focusArticle: {}
  },

  reducers: {
    loadInit(state, { payload }) {
      return { ...state, ...payload };
    },
    addArticle(state, { payload }) {
      const { articles } = state;
      const { article } = payload;
      articles.unshift(article);
      return { ...state, articles, focusArticle: article };
    },
    changeSelect(state, { payload }) {
      const { index } = payload;
      const { articles } = state;
      return { ...state, focusArticle: articles[index] };
    },
    updateArticle(state, { payload }) {
      let { focusArticle, articles } = state;
      focusArticle = { ...focusArticle, ...payload };
      articles = articles.map(article => {
        if (article._id === focusArticle._id) {
          article = { ...article, ...payload };
        }
        return article;
      });
      return { ...state, articles, focusArticle };
    }
  },

  effects: {
    *mount({}, { put }) {
      const result = search('');
      yield put({ type: 'loadInit', payload: { ...result } });
    },

    *search({ payload }, { put }) {
      const result = search(payload.key);
      yield put({ type: 'loadInit', payload: { ...result } });
    },

    *add({}, { put }) {
      const article = ipcRenderer.sendSync('db_insert', {});
      yield put({ type: 'addArticle', payload: { article } });
    },
    *update({ payload }, { put }) {
      const { id, content } = payload;
      const title = getTitle(content);
      const desc = getDesc(content).replace(title, '');
      yield put({
        type: 'updateArticle',
        payload: { title, desc, content }
      });
      _debounceUpdate({ id, title, desc, content });
    },
    *select({ payload }, { put }) {
      const { index } = payload;
      yield put({ type: 'changeSelect', payload: { index } });
    }
  }
};

function update(article) {
  ipcRenderer.sendSync('db_update', article);
}

function search(key) {
  const articles = ipcRenderer.sendSync('db_search', { key });
  const focusArticle = articles && articles.length > 0 ? articles[0] : {};
  return { articles, focusArticle };
}

function getTitle(html) {
  const result = /<h1>(.*?)<\/h1>/.exec(html);
  if (result) {
    return result[1];
  }
  return null;
}

function getDesc(html) {
  const word = html.replace(/(<[^>]*>|\s)/g, '');
  return word.substr(0, 100);
}
