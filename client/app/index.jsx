import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './app.jsx';
import About from './about.jsx'

render(
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path='/' component={About} />
    </Route>
  </Router>
  , document.getElementById('app'));