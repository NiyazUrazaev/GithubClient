import {combineReducers, createStore} from "redux";

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

const header = (state = initialState, action) => {
  switch (action.type) {
    case "MYPROFILE":
      return alert("My Profile");
    case "MYREPOSITORIES":
      return alert("My repos");
    case "EXIT":
      return alert("Exit");
    default:
      return state;
  }
};

let store = createStore(
  combineReducers({header, counter}),
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const decrement = {type: "DECREMENT"};
export const increment = {type: "INCREMENT"};
export const reset = {type: "RESET"};
export const myProfile = {type: "MYPROFILE"};
export const myRepos = {type: "MYREPOSITORIES"};
export const exit = {type: "EXIT"};


export default store;
