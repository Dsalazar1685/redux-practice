import { createStore } from 'redux';
import myReducer from './reducers.js';
let store = createStore(myReducer);
