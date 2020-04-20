import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Container from './Container.js'
import About from './Components/about'

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul className="nav">
            <li className="nav">
              <Link to="/">Muzieklijst</Link>
            </li>
            <li>
              <Link to="/about">Over mij</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Container />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}



