import logo from "./logo.svg";
import "./App.css";
import TodoFeature from "./features/Todo";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import productApi from "./api/productApi";
import CounterFeature from "./features/Counter";

function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10,
      };
      const productList = await productApi.getAll(params);
      console.log(productList);
    };
    fetchProducts();
  }, []);
  const name = "tra";
  const age = "18";
  const isMale = true;
  const student = {
    name: "tra nguyen",
  };
  const color = ["red", "green", "blue"];
  return (
    <div className="App">
      <header className="App-header">
        <p>Tra Nguyen</p>

        <ul>
          {color.map((color) => (
            <li key={color} style={{ background: color }}>
              {color}
            </li>
          ))}
        </ul>
        <Link to="/todo">Todo</Link>
        <Switch>
          <Route path="/todo" component={CounterFeature} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
