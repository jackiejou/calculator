import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const numbers = [];
for (let i = 0; i < 10; i++) {
  numbers.push(i);
}
const operators = ['+', '-', 'x', '/'];

class App extends Component {
  constructor() {
    super();
    this.state = {
      last: '',
      equation: ''
    }
  }
  addToEquation(event) {
    if (operators.includes(event.target.value) && operators.includes(this.state.equation.slice(-1))) {
      this.setState({equation: this.state.equation.slice(0, -1) + event.target.value});
    } else {
      this.setState({equation: this.state.equation + event.target.value});
    }
  }
  backspace() {
    this.setState({equation: this.state.equation.slice(0, -1)});
  }
  clear() {
    this.setState({last:'', equation: ''});
  }
  evaluate() {
    let sum = 0;
    let product = 1;
    let number = '';
    let operator;
    for (let i = 0; i < this.state.equation.length; i++) {
      let char = this.state.equation[i];
      if (char === 'x' || char === '/') {
        product *= +number;
        number = '';
        operator = char;
        continue;
      } else if (char !== '+' && char !== '-') {
        number += char;
      }
      if (i === this.state.equation.length - 1 || char === '+' || char === '-') {
        operator === '/' ? product /= +number : product *= +number;
        sum += product;
        product = 1;
        operator = '';
        number = (char === '-' ? '-' : '');
      }
    }
    this.setState({
      last: this.state.equation,
      equation: sum + ''
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Calculator</h1>
        </header>
        <div>
          {numbers.map(num => <button key={num} value={num} onClick={this.addToEquation.bind(this)}>{num}</button>)}
        </div>
        <div>
          {operators.map(sign => <button key={sign} value={sign} onClick={this.addToEquation.bind(this)}>{sign}</button>)}
        </div>
        <button onClick={this.backspace.bind(this)}>Backspace</button>
        <button onClick={this.clear.bind(this)}>AC</button>
        <button onClick={this.evaluate.bind(this)}>Equals</button>
        <div>
          <h3>{this.state.last}</h3>
          <h3>{this.state.equation}</h3>
        </div>
      </div>
    );
  }
}

export default App;
