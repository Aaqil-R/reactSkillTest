import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Profile from '../Component/Profile';
import Login from '../Component/Login';
import PageNotFound from '../Component/PageNotFound';

const CreateRoutes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/profile/:username/:password" component={Profile} />
      <Route component={PageNotFound} />
    </Switch>
  </Router>
);

export default CreateRoutes;
