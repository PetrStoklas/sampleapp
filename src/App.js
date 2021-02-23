import React from 'react';
import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";
import { IKUIUserAPI } from "indykite-ui-sdk"
// Locals
import Login from "./components/Login";
import Registration from "./components/Registration";
import ForgottenPassword from "./components/ForgotPassword";
import SetNewPassword from "./components/SetNewPassword";
import Oidc, { Callback } from "./components/Oidc";



function App() {
    const [token, setToken] = React.useState(null)
    React.useEffect(() => {
        IKUIUserAPI.getValidAccessToken().then(setToken).catch(console.log)
    }, [])

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
                <Route path="/callback">
                    <Callback />
                </Route>
            </Switch>
        </Router>
        <br />
        {token && <button onClick={IKUIUserAPI.logoutCurrentUser}>Logout</button>}
        <h5>You can see responses in console</h5>
    </div>
  );
}

export default App;
