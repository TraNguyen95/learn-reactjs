import logo from "./logo.svg";
import "./App.css";
import TodoFeature from "./features/Todo";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import productApi from "./api/productApi";
import CounterFeature from "./features/Counter";
import Header from "components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <Link to="/todo">Todo</Link>
        <Switch>
          <Route path="/todo" component={CounterFeature} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
