import { ipcRenderer } from 'electron';

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
    }
  },

  effects: {
    *mount({}, { put }) {
      const result = yield search('');
      yield put({ type: 'loadInit', payload: { ...result } });
    },

    *search({ payload }, { put }) {
      const result = yield search(payload.key);
      yield put({ type: 'loadInit', payload: { ...result } });
    },

    *add({}, { put }) {
      const article = ipcRenderer.sendSync('db_insert', {});
      yield put({ type: 'addArticle', payload: { article } });
    },
    *select({ payload }, { put }) {
      const { index } = payload;
      yield put({ type: 'changeSelect', payload: { index } });
    }
  }
};

async function search(key) {
  const articles = ipcRenderer.sendSync('db_search', { key });
  const focusArticle = articles && articles.length > 0 ? articles[0] : {};
  return { articles, focusArticle };
}
