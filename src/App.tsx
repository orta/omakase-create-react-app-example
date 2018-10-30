import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components/macro'

import {  QueryRenderer } from "react-relay"
import graphql from "babel-plugin-relay/macro"

import initEnvironment from "./lib/createRelayEnvironment"
import { AppQueryResponse } from './__generated__/AppQuery.graphql';

const RedP = styled.p`
  color: red;
`
interface AppProps {
  hello: string
}


class App extends Component<AppProps> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <RedP>
            {this.props.hello}
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

// import { Container, Header, Icon, Image } from "semantic-ui-react"
// import { addPerilURL } from "../lib/routes"
// import { HomeQueryResponse } from "./__generated__/HomeQuery.graphql"

export default () => 
  <QueryRenderer
    environment={initEnvironment()}
    query={graphql`
      query AppQuery {
        hello
      }
    `}
    variables={{}}
    render={({ error, props }) => {
      if (error) {
        // tslint:disable-next-line:no-console
        console.error(error)
        return <div>Error!</div>
      }

      if (!props) {
        return null
      }

      const p = props as AppQueryResponse

      return (
        <App hello={p.hello!}/>
      )
    }}
  />
