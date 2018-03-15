import React from 'react';

// Components
import Dashboard from '../components/Dashboard';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const AppRouter = () => (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={Dashboard} exact={true} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );

export default AppRouter;