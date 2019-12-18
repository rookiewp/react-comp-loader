import * as types from './type';

const defaultState = {
  name: 'wp',
  age: 28,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.changeData:
      return Object.assign({}, state, action.data);
    default:
      return state;
  }
};
