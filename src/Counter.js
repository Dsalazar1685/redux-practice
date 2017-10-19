import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.addCount = this.addCount.bind(this);
  };

  addCount() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div>
      <h1>React Counter</h1>
      <div>Count: {this.state.count}</div>
      <button onClick={this.addCount}>Count Up!</button>
    </div>
    )
  }
}
