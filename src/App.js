import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Registration from "./components/registration/Registration";
import Container from "./container/Container";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Container} />
        <Route path="/login" component={Login} />

        <Route path="/register" component={Registration} />
      </Switch>
    </div>
  );
};

export default App;
