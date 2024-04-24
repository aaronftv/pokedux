import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import rootReducer from './reducers/rootReducer';
import { Provider } from 'react-redux';
import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import { thunk } from 'redux-thunk';
import { logger, prefix } from './middlewares';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const composedEnhancers = composeAlt(
  applyMiddleware(thunk, logger)//, prefix)
);

const store = createStore(
  rootReducer,
  composedEnhancers
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);