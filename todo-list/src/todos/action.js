import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actionTypes';

let nextTodo = 0;

export const addTodo = (text) => ({
  type: ADD_TODO,
  completed:false,
  id:nextTodo++,
  text
})

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id
})

export const removetodo = (id) => ({
  type: REMOVE_TODO,
  id
})