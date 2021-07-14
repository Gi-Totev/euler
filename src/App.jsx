import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Euler from "./components/Euler/Euler";
import { CssBaseline } from "@material-ui/core";

const App = () => {
  return (
    <CssBaseline>
      <Router>
        <Switch>
          <Route exact path="/euler/:id" component={Euler} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </CssBaseline>
  );
};

export default App;
