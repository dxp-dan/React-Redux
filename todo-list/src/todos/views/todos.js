import React from 'react';
import AddTodo from './addTodo.js';
import Todo from './todoList.js';

export default () => {
  return <div className="todos">
    <AddTodo />
    <Todo />
  </div>
}