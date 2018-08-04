/*
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
//import Login from './Login';

import ProductList from './js/components/ProductList';

import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import rootReducer from './reducers/index';

import {
    BrowserRouter as Router
} from 'react-router-dom';

import './globalStyle';
import reducer from './reducer';

import Routes from './Route';

const store = createStore(reducer);

ReactDOM.render((
    <Provider store={store}>
        <Router>
            <Routes />
        </Router>
    </Provider>
), document.getElementById('root'));

ReactDOM.render((
    <ProductList />
), document.getElementById('card'));

registerServiceWorker();
*/
// React + Redux
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';
// import 'typeface-roboto';
import './globalStyle';
import reducer from './reducer';
import Routes from './Routes';


const store = createStore(
    reducer, /* preloadedState, */
 +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

ReactDOM.render((
  <Provider store={store}>
    <Router basename="/react-ecommerce">
      <Routes />
    </Router>
  </Provider>), document.getElementById('root'));
registerServiceWorker();
