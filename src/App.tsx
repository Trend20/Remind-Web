import React from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/shared/Navbar';

function App():JSX.Element {
  return (
    <div className="app">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
