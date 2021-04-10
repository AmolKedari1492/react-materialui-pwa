import logo from "./logo.svg";
import "./App.css";
import AppBar from "@material-ui/core/AppBar";

const App = () => {
  return (
    <div className="App">
      <header>
        <AppBar color="primary" position="static">
          Nav
          <div>
            <i className="fa fa-edit">Edit</i>
          </div>
        </AppBar>
      </header>
    </div>
  );
};

export default App;
