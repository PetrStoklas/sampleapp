import React from 'react';
import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";
// Locals
import Login from "./components/Login";
import Registration from "./components/Registration";
import ForgottenPassword from "./components/ForgotPassword";
import SetNewPassword from "./components/SetNewPassword";
import Oidc from "./components/Oidc";



function App() {
  return (
    <div className="App">
        <h1>Sample login app</h1>
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Link to="/login">
                        <button>Start</button>
                    </Link>
                </Route>
                <Route path="/forgot/password">
                    <ForgottenPassword />
                </Route>
                <Route path="/set/new/password/:referenceId">
                    <SetNewPassword />
                </Route>
                <Route path="/login/callback">
                    <Oidc />
                </Route>
                <Route path="/registration">
                    <Registration />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
