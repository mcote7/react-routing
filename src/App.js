import React from 'react';
import './App.css';
import { Router, Link } from '@reach/router';
import Home from './components/Home';
import WordOrNum from './components/WordOrNum';
import ColorWord from './components/ColorWord';

function App() {
  return (
    <div className="App">
        <Link to="/home">Home</Link>
      <Router>
        <Home path="/home" />
        <WordOrNum path="/:anything" />
        <ColorWord path="/:color/:bgcolor"/>
      </Router>
    </div>
  );
}

export default App;
