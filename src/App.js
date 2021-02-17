import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Registration from "./components/registration/Registration";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Registration} />
      </Switch>
    </div>
  );
};

export default App;
