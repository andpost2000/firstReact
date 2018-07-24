import React from 'react'
import { render } from 'react-dom'
import App from './components/App'

import { Provider } from 'react-redux';

import store from './store';

const AppWrap = () => (
  <App />
);

render(
  <Provider store={store}>
    <AppWrap />
  </Provider>,
  document.getElementById('container')
)

