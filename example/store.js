import { createStore, combineReducers } from 'redux'

const reducers = combineReducers(__redux_reducer__)
const store = createStore(reducers);


export default store;