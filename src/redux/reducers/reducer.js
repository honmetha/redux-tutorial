import { combineReducers } from 'redux';
import conterReducer from './counterReducer'
import visibleReducer from './visibleReducer'

const reducers = combineReducers({
  counter: counterReducer,
  visible: visibleReducer,
});

export default reducers;