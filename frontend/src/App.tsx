import React from 'react';
import logo from './logo.svg';
import './App.css';
import './test.scss';
import axios from 'axios';

function App() {

  const teste = async () => {
    try {
      const response = await axios.get('http://localhost:3000/cats/');
      if (response) {
        console.log(response.data);
      }
    } catch (e) {
      console.log(e);
    }

  }

  return (
    <div className="App">
      <div><button className="bg-red-600" onClick={teste}>TESTE</button></div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React v3
        </a>
      </header>
    </div>
  );
}

export default App;
