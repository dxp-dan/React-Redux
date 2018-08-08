import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import store from './Store.js';
import TodoApp from './TodoApp';

ReactDOM.render(
  <Provider store={ store }> 
    <TodoApp />
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();
