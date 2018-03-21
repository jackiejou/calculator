import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      equation: ''
    }
  }
  addToEquation(event) {
    this.setState({equation: this.state.equation + event.target.value});
  }
  backspace() {
    this.setState({equation: this.state.equation.slice(0, -1)});
  }
  clear() {
    this.setState({equation: ''});
  }
  render() {
    let numbers = [];
    for (let i = 0; i < 10; i++) {
      numbers.push(i);
    }
    let operators = ['+', '-', 'x', '/', '='];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Calculator</h1>
        </header>
        <div>
          {numbers.map((num, index) => <button value={num} onClick={this.addToEquation.bind(this)}>{num}</button>)}
        </div>
        <div>
          {operators.map(sign => <button value={sign} onClick={this.addToEquation.bind(this)}>{sign}</button>)}
        </div>
        <button onClick={this.backspace.bind(this)}>Backspace</button>
        <button onClick={this.clear.bind(this)}>AC</button>
        <div>
          <h3>{this.state.equation}</h3>
        </div>
      </div>
    );
  }
}

export default App;
