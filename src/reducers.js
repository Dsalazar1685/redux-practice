import {INCREASE_COUNT} from './actions.js';

const initialState = {
  count: 0
};

function myReducer(state = initialState, action) {
  switch(action.type) {
    case INCREASE_COUNT:
      let count = state.count + 1;
      return {...state, count};
      //return Object.assign({}, state, {count: state.count + 1})
    default:
      return state
  }
}

export default myReducer;
