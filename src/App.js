import React, { Component } from 'react';
import './App.css';
//import Counter from './state/Counter';
import HelloWorld from './state-drills/HelloWorld';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloWorld />
      </div>
    );
  }
}

export default App;