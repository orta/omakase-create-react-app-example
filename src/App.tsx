import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components/macro'

const RedP = styled.p`
  color: red;
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <RedP>
            Edit <code>src/App.js</code> and save to reload.
          </RedP>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
