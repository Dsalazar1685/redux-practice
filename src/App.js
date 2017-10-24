import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter.js';
import ReduxCounter from './ReduxCounter.js';
import ReduxList from './ReduxList.js';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import myReducer from './reducers';

let store = createStore(myReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

          <Counter />
          <ReduxCounter/>
          <ReduxList/>

      </div>
    </Provider>
    );
  }
}

export default App;
