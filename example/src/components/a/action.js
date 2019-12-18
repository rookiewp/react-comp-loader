import makeAction from '../../lib/makeAction';
import * as types from './type';

export const doChangeData = makeAction(types.changeData, 'data');
export const doAsync = makeAction(types.async, 'params');
