import * as types from './type';

const defaultState = {
  pageNum: 1, // 当前页
  typeList: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.intt:
      return Object.assign({}, state);
    case types.getData:
      return Object.assign({}, state, {
       pageNum: 2,
      });
    // 初始化页面数据
    default:
      return state;
  }
};
