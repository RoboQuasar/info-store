import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './containers/App';

import configureStore from './store/configureStore';

import 'styleguide.module.css';
import './index.css';

const initialState = {
  listItems: {
    items: [],
    hasErrored: false,
    isLoading: false,
  }
};

const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
