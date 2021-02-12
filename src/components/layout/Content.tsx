import React, { Component } from 'react';
import './Content.scss';
import { Switch, Route } from 'react-router-dom';
import About from '../../views/examples/About';
import Home from '../../views/examples/Home';
import Param from '../../views/examples/Param';
import NotFound from '../../views/examples/NotFound';

export default class Content extends Component {
  render() {
    return (
      <main className="Content">
        <Switch>
          {/* The Order is important */}
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/param/:id" component={Param} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </main>
    );
  }
}
