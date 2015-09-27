import React from 'react';
import {Link, RouteHandler} from 'react-router';

var App = React.createClass({
  render: function() {
    return (
      <div className="app" >
        <h1>OUIOUI</h1>
        <RouteHandler />
      </div>
    );
  }
});

module.exports = App;
