import React from 'react';

const TodoItem = ({onToggle, onRemove, completed, text}) => {
  const checkedProp = completed ? {checked: true} : {};
  return (
    <li
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      <input type="checkbox" {...checkedProp} readOnly onClick={onToggle} />
      <label>{text}</label>
      <button onClick={onRemove}>×</button>
    </li>
  )
}

export default TodoItem;