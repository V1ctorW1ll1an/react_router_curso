import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Menu.scss';

export default class Menu extends Component {
  render() {
    return (
      <aside className="Menu">
        <nav className="Menu__nav">
          <ul className="Menu__list">
            <li className="Menu__listItem">
              <Link className="Menu__link" to="/">Home</Link>
            </li>
            <li className="Menu__listItem">
              <Link className="Menu__link" to="/param/123">Param #01</Link>
            </li>
            <li className="Menu__listItem">
              <Link className="Menu__link" to="/param/victor">Param #02</Link>
            </li>
            <li className="Menu__listItem">
              <Link className="Menu__link" to="/about">About</Link>
            </li>
            <li className="Menu__listItem">
              <Link className="Menu__link" to="/notfound">Not Found</Link>
            </li>
          </ul>
        </nav>
      </aside>
    );
  }
}
