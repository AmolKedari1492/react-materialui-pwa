import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
