import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import PageLayout from './PageLayout';

interface Props {}

const AppRouter: React.FC<Props> = () => (
  <Router>
    <PageLayout>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
    </PageLayout>
  </Router>
);

export default AppRouter;
