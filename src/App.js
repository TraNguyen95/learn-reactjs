import Header from "components/Header";
import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import CounterFeature from "./features/Counter";
import { Button } from "@material-ui/core";
import { useSnackbar } from "notistack";
import ProductFeature from "features/Product";

function App() {
  const { enqueueSnackbar } = useSnackbar();
  const showNoti = () => {
    enqueueSnackbar("Register Successfully", { variant: "error" });
  };
  return (
    <div className="App">
      <Header />
      {/* <Button onClick={showNoti}>Show noti</Button> */}
      <header className="App-header">
        <Switch>
          <Route path="/todo" component={CounterFeature} />
          <Route path="/products" component={ProductFeature} />
          <Route path="/" component={ProductFeature} />
          <Route path="/learn-reactjs" component={ProductFeature} exact />
        </Switch>
      </header>
    </div>
  );
}

export default App;
