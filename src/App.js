import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Login from "./Login";
import Header from "./Header";
import Home from "./Home";
import Orders from "./Orders";
import Checkout from "./Checkout";
import Payment from "./Payment";
import "./App.css";

const promise = loadStripe(
  "pk_test_51I595bHFifcPzb8SVtfkJCxNdx52WDo6GvHyea9KR3NDmVUwHEPUuWzw2KcE339GwdosD0I9iMBWwfIb0f92pWeR00A4HDKlSJ"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log(authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <Switch>
        <div className='app'>
          <Route path='/login' exact>
            <Login />
          </Route>
          <Route path='/checkout' exact>
            <Header />
            <Checkout />
          </Route>
          <Route path='/orders' exact>
            <Header />
            <Orders />
          </Route>
          <Route path='/payment' exact>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path='/' exact>
            <Header />
            <Home />
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
