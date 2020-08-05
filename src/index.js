import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateVideo from './pages/Create/Video';
import CreateCategory from './pages/Create/Category';
import NotFound from './pages/Error/NotFound';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/create/video" component={CreateVideo} />
      <Route path="/create/category" component={CreateCategory} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
