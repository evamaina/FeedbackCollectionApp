import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hi there</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p className="Intro">
          Edit <code>src/App.js</code> and save to reload.
        </p>
    
      </header>
      <a href='/auth/google'>Sign In With Google</a>
    </div>
  );
}

export default App;
