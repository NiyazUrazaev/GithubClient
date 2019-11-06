import React from "react";
import "./App.css";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const App = ({counter, name, increment, decrement, reset, myProfile, myRepos, exit}) => {

  return (
    <div>
      <div>
        <AppBar position="static">
          <Toolbar className="header">
            <Typography variant="h6">
              Github Client
            </Typography>
            <div>
              <Button color="inherit" onClick={() => myProfile()}>
                My profile
              </Button>
              <Button color="inherit" onClick={() => myRepos()}>
                My repositories
              </Button>
              <Button color="inherit" onClick={() => exit()()}>
                Exit
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </div>
      <div>{name}</div>
      <div>{counter}</div>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>decrement</button>
      <button onClick={() => reset()}>reset</button>
    </div>)
};
export default App;
