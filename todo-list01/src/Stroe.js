import {createStore, combineReducers } from 'redux';

import {reducer as todoReducer} from './todoList';
import {reducer as filter} from './filter';

const reducer = combineReducers({
  todos: todoReducer,
  filter
});

export default createStore(reducer);
