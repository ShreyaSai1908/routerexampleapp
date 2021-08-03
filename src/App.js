import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';

import './App.css';

function App() {
  return (
    <Router>
    <div>
      <aside>
        <Link to="/">Home</Link>
        <span> | </span>
        <Link to="/about">About</Link>
      </aside>

      <main>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </main>
    </div>
  </Router>
  );
}

export default App;
