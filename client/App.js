import React from "react";
import Navbar from "./components/navbar";
import Roll from "./components/roll";
import Home from "./components/home";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/roll" component={Roll} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
