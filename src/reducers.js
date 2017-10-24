import {INCREASE_COUNT, DECREASE_COUNT, ADD_TO_LIST, REMOVE_FROM_LIST} from './actions.js';

const initialState = {
  count: 0,
  list: []
};

function myReducer(state = initialState, action) {
  let count = state.count;
  let list;
  switch(action.type) {
    case INCREASE_COUNT:
      count = count + 1;
      return {...state, count};
    case DECREASE_COUNT:
      count = count - 1;
      return {...state, count};
    case ADD_TO_LIST:
      list = state.list.slice();
      list.push(action.payload);
      return{...state, list};
    case REMOVE_FROM_LIST:
      list = state.list.slice();
      list.splice(action.payload, 1);
      return{...state, list}
      //return Object.assign({}, state, {count: state.count + 1})
    default:
      return state
  }
}

export default myReducer;
