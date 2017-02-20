import { combineReducers } from 'redux';
import handleCount from './handleCount';
import toFirebase from './toFirebase';

const rootReducer = combineReducers({
  handleCount,
  toFirebase
})

export default rootReducer;
