import React from 'react';
import logo from './logo.svg';
import * as S from './styles'

import './App.css';

function App() {
  return (
    <S.Container>
      <S.Header bg='grey'>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </S.Header>
    </S.Container>
  );
}

export default App;
