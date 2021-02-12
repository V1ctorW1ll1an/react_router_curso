import React, { Component } from 'react';
import './App.scss';
import Content from '../components/layout/Content';
import Menu from '../components/layout/Menu';
import { BrowserRouter as Router } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Menu />
          <Content />
        </Router>
      </div>
    );
  }
}
