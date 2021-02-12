import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
};

export default App;
