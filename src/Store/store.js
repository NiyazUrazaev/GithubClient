import {createStore, combineReducers} from "redux";

const initialState = {
  counter: 0,
  name: "redux-demo"
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {...state, counter: state.counter + 1};
    case "DECREMENT":
      return {...state, counter: state.counter - 1};
    case "RESET":
      return {...state, counter: 0};
    default:
      return state;
  }
};

let store = createStore(
  counter,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const decrement = {type: "DECREMENT"};
export const increment = {type: "INCREMENT"};
export const reset = {type: "RESET"};

export default store;
