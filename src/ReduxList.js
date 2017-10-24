import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem, removeItem } from './actions.js';
import { bindActionCreators } from 'redux';

class ReduxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listItem: ''
    }
    this.changeItem = this.changeItem.bind(this);
    this.submitItem = this.submitItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  changeItem(e) {
    this.setState({
      listItem: e.target.value
    })
  }

  submitItem() {
    let item = this.state.listItem;
    this.props.addItem(item);
    this.setState({
      listItem: ''
    })
  }

  removeItem(e) {
    let val = e.target.value
    this.props.removeItem(val);
  }

  render() {
    return (
      <div>
        <h2>Redux List</h2>
          <div>
            {this.props.list.map((item, index) => {return <span>
                <div>#{index + 1}:   {item}</div>
                <button value={index} onClick={this.removeItem}>X</button>
              </span>

            })}
          </div>
          <input type='text' value={this.state.listItem} onChange={this.changeItem}/>
          <button onClick={this.submitItem}>Add To List</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addItem, removeItem }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxList)
