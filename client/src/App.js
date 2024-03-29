
import React, { Component } from 'react';
import './App.css';
import StockistsContainer from './components/StockistsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Stockists - Orders & Items</h1>
        </header>
        <StockistsContainer />
      </div>
    );
  }
}

export default App;