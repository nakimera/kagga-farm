import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import LandingPage from './components';
import Signup from './components/accounts/signup';
import Login from './components/accounts/login';
import Home from './components/orders/index';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
            <LandingPage />
        </Route>
        <Route exact path="/signup">
            <Signup />
        </Route>
        <Route exact path="/login">
            <Login />
        </Route>
        <Route exact path="/omuguzi">
            <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
