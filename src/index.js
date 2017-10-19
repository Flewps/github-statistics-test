import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore } from 'redux'
import { ApolloProvider, ApolloClient, createNetworkInterface } from 'react-apollo'
import { reducer } from './reducers'

import './index.css'

import App from './App'
import './App.css'


const store = createStore(reducer)

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'https://api.github.com/graphql',
    opts: {
      credentials: 'same-origin'
    }
  }),
});

ReactDOM.render(
    <ApolloProvider store={store} client={client}>
      <Router>
        <App />
      </Router>      
    </ApolloProvider>,
  document.getElementById('root')
);
