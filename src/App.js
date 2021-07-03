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
import PlaceOrder from './components/orders/order';
import Checkout from './components/orders/checkout';
import AdminPanel from './components/admin';

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
        <Route exact path="/order">
            <PlaceOrder />
        </Route>
        <Route exact path="/checkout">
            <Checkout />
        </Route>
        <Route exact path="/admin">
            <AdminPanel />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
