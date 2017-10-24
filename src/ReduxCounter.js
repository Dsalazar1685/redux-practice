import React, { Component } from 'react';
import { countUp, countDown } from './actions.js';
import  { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ReduxCounter extends Component {
  render () {
    return (
      <div>
        <h2>Redux Counter</h2>
        <div>Count: {this.props.count}</div>
        <button onClick={this.props.countUp}>Count Up!</button>
        <button onClick={this.props.countDown}>Count Down!</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ countUp, countDown }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxCounter)
