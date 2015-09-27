import React from 'react';
import {Link, RouteHandler} from 'react-router';

var App = React.createClass({
  render: function() {
    return (
      <div className="container" >
          <h1 className="text-center" >Search Engine</h1>
          <RouteHandler />
      </div>
    );
  }
});

module.exports = App;
