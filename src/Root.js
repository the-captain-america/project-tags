import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;
