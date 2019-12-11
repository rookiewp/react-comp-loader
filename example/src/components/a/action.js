import makeAction from '../../lib/makeAction';
import * as types from './type';

export const doInit = makeAction(types.init);
export const doGetData = makeAction(types.getData);
