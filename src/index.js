import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore } from 'redux'
import { ApolloProvider } from 'react-apollo'
import { reducer } from './reducer'
import { client } from './apolloClient'
import './index.css'

import App from './App'
import './App.css'

const store = createStore(reducer)

ReactDOM.render(
    <ApolloProvider store={store} client={client}>
      <Router>
        <App />
      </Router>      
    </ApolloProvider>,
  document.getElementById('root')
);
