import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import TodoApp from './TodoApp';
import store from './Stroe';
ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();
