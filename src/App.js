import React from "react";
import "./App.css";
import Header from "./common/header/Header";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Pages from "./pages/Pages";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact>
             <Pages />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
