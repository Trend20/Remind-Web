import React from 'react';
import './App.css';
import Navbar from './components/shared/Navbar';
import Homepage from './components/Homepage';

function App():JSX.Element {
  return (
    <div className="app">
      <Navbar />
      <Homepage />
    </div>
  );
}

export default App;
