import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import App from './components/index';
import Catalog from './components/Catalog';
import Single from './components/Single';
import store, { history } from './store';

import css from './styles/style.styl';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Catalog} />
        <Route path="/view/:productId" component={Single} />
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));
