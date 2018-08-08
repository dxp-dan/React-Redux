import React from 'react';
import {view as TodoList} from './todoList/';
import {view as Filter} from './filter';
const TodoApp = ()=>{
  return <div>
    <TodoList />
    <Filter />
  </div>
}

export default TodoApp;