import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore } from 'redux';
import reducer from './reducers/product_list_reducer';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer);

store.subscribe(() =>
  console.log(store.getState())
);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
