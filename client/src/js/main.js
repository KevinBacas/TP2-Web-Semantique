import App from './components/App';
import Home from './components/Home';
import DocumentContent from './components/DocumentContent';
import React from 'react';
import Router from 'react-router';
import {DefaultRoute, Route, Routes, NotFoundRoute} from 'react-router';

require('../main.less');

let routes = (
  <Route name="app" path="/" handler={App} >
    <Route name="content" handler={DocumentContent} />
    <Route name="home" handler={Home} />
    <DefaultRoute handler={Home} />
  </Route>
);

Router.run(routes, Router.HashLocalion, function(Handler) {
  React.render(<Handler />, document.body);
});
