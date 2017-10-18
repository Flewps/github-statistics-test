import React, { Component } from 'react'
import { ApolloProvider, ApolloClient, createNetworkInterface } from 'react-apollo'
import BarChart from './components/graphs/BarChart'
import Donut from './components/graphs/Donut'

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'https://graphql.example.com',
  }),
});

let barData = {
  table: [
    {"category": "A", "amount": 28},
    {"category": "B", "amount": 55},
    {"category": "C", "amount": 43},
    {"category": "D", "amount": 91},
    {"category": "E", "amount": 81},
    {"category": "F", "amount": 53},
    {"category": "G", "amount": 19},
    {"category": "H", "amount": 87}
  ]
}

function handleHover(...args){
  console.log(args);
}

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <BarChart data={barData} onSignalHover={handleHover}/>
          <Donut data={barData} onSignalHover={handleHover}/>
        </div>        
      </ApolloProvider>
    );
  }
}

export default App;
