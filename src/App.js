import React, {useState} from "react";
import "./App.css";
import Header from "./Components/Header";
import {Redirect, Route, Switch} from "react-router";
import {BrowserRouter as Router} from "react-router-dom";
import PrivateRoute from "./Components/privateRoute";
import LaginPage from "./Components/loginPage";
import {AUTH_TOKEN} from "./constants";
import MainPage from "./Components/MainPage";


const App = () => {

  let [token, updateToken] = useState(localStorage.getItem(AUTH_TOKEN));

  const login = (newToken) => {
    localStorage.setItem(AUTH_TOKEN, newToken);
    updateToken(localStorage.getItem(AUTH_TOKEN));
  };

  const logout = () => {
    localStorage.removeItem(AUTH_TOKEN);
    updateToken(localStorage.getItem(AUTH_TOKEN));
  };

  return (
    <div>
      <Router>
        <Redirect from="/" to="protected" />
        <Switch>
          <Route path="/login">
            <LaginPage login={login}/>
          </Route>
          <PrivateRoute path="/protected" token={token}>
            <Header token={token} logout={logout}/>
            <MainPage/>
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  )};

export default App;