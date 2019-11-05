import React from "react";
import "./App.css";
import Button from '@material-ui/core/Button';

const App = ({counter, name, increment, decrement, reset, myProfile, myRepos, exit}) => (
  <div>
    <div className='Header'>
      <h1>
        Github Client
      </h1>
      <Button variant="contained" color="primary" onClick={() => myProfile()}>
        My profile
      </Button>
      <Button variant="contained" color="primary" onClick={() => myRepos()}>
        My repositories
      </Button>
      <Button variant="contained" color="primary" onClick={() => exit()()}>
        Exit
      </Button>
    </div>
    <div>{name}</div>
    <div>{counter}</div>
    <button onClick={() => increment()}>Increment</button>
    <button onClick={() => decrement()}>decrement</button>
    <button onClick={() => reset()}>reset</button>
  </div>
);
export default App;
