import React from 'react';
import { remove_todo, toggle_todo} from '../action';
import { connect } from 'react-redux';
import TodoItem from './todoItem';
const TodoList = ({todos, onToggle, onRemove}) => {
  return <ul>
    {
      todos.map((item)=>{
        return <TodoItem 
        key={item.id} 
        completed={item.completed} 
        text={item.text}
        onToggle={()=>{onToggle(item.id)}}
        onRemove={()=>{onRemove(item.id)}}
        ></TodoItem>
      })
    }
  </ul>
} 

const selectVisibleTodos = (todos, filter) => {
  switch (filter) {
    case '全部':
      return todos;
    case '已完成':
      return todos.filter(item => item.completed);
    case '未完成':
      return todos.filter(item => !item.completed);
    default:
      throw new Error('unsupported filter');
  }
}

const mapToProps = (state)=>{
  return {
    todos:selectVisibleTodos(state.todos,state.filter)
  }
}

const mapDispatch = (dispatch) => {
  return{
    onToggle:( id ) => {
      dispatch(toggle_todo(id));
    },
    onRemove:( id ) => {
      dispatch(remove_todo(id))
    }
  }
}

export default connect(mapToProps,mapDispatch)(TodoList);