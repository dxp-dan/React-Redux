import React from 'react';
import { add_todo } from '../action';
import { connect } from 'react-redux';

const todoInput = ({addTodo}) => {
  let input;
  return <form onSubmit={
    e=>{
      e.preventDefault();
      if(!input.value.trim()){return}
      addTodo(input.value);
      input.value="";
    }
  }>
    <input ref={(node)=>{input=node}} type="text"/>
    <button type="submit">addTodo</button>
  </form>
}

const mapDispatch = (dispatch) => {
 return {
   addTodo:(text)=>{
    dispatch(add_todo(text))
   }
 }
}

export default connect(null,mapDispatch)(todoInput);