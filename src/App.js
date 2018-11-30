import React, { Component } from 'react';

import './App.css';

import ChocolateList from './components/ChocolateList';
import ChocolateBox from './containers/ChocolateBox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ChocolateList />
        <ChocolateBox />
      </div>
    );
  }
}

export default App;