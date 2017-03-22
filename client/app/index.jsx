import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './app.jsx';
import About from './about.jsx';
import Department from './department.jsx';

import { Provider } from 'react-redux';
import store, { history } from '../store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={About} />
        <Route path='/:departmentName' component={Department} />
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('app'));