import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/iconos.css';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers/index';
import reduxThunk from 'redux-thunk';

const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION__ &&
                          window.__REDUX_DEVTOOLS_EXTENSION__();

const middlewares = [reduxThunk];
const middlewareEnhancer = applyMiddleware(...middlewares);

const enhancers = [middlewareEnhancer, composeEnhancers]
const composedEnhancers = compose(...enhancers)
const store = createStore(reducer, {}, composedEnhancers)
//const store = createStore(reducer, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
