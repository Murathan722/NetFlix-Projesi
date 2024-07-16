import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Hosgeldin from "./components/Hosgeldin";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import SignUp2 from "./components/SignUp2";
import SignUp3 from "./components/SignUp3";
import Home from "./components/Home";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Hosgeldin />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/signup2">
          <SignUp2 />
        </Route>
        <Route path="/signup3">
          <SignUp3 />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
