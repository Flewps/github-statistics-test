import React, { Component } from 'react'
import List from './containers/List'

class App extends Component {
  render() {
    return (
      <div className={'container'}>
        <div className={'content'}>
          <List username={'facebook'} />
        </div>        
      </div>
    );
  }
}

export default App;
