import * as types from './type';

const defaultState = {
  pageNum: 1, // 当前页
  typeList: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.init:
      return Object.assign({}, state);
    case types.getData:
      return Object.assign({}, state, {
       pageNum: 2,
      });
    default:
      return state;
  }
};
