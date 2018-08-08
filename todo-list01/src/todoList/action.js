let todoId = 0;

export const add_todo = ( text )=>{
  return {
    type:'ADD_TODO',
    id:todoId++,
    completed:false,
    text
  }
}

export const toggle_todo = ( id ) => {
  return {
    type:'TOGGLE_TODO',
    id
  }
}

export const remove_todo = ( id ) => {
  return {
    type:'REMOVE_TODO',
    id
  }
}