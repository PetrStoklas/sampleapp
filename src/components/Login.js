import React from "react";
import { IKUICore, IKUIOidc, IKUIUserAPI } from "indykite-ui-sdk";

const Login = () => {
    const [email, setEmail] = React.useState("petr.stoklas@profiq.com");
    const [password, setPassword] = React.useState("Password");
    const [setupResponseData, setSetupResponseData] = React.useState(null)

    React.useEffect(() => {
        // This allows to skip login if there is valid token found.
        const setup = async () => {
            const loginSetupResponse = await IKUIUserAPI.loginSetup()
            console.log(loginSetupResponse)
            setSetupResponseData(loginSetupResponse)
        }

        setup().catch(console.log)
    }, [])

    const areThereOptsToRender = Boolean(setupResponseData &&
      setupResponseData.opts &&
      Array.isArray(setupResponseData.opts))

    const handleOnLogin = React.useCallback(() => {
        IKUIUserAPI.login(email, password, setupResponseData).then(console.log).catch(console.log);
    }, [email, password, setupResponseData]);

    {/* BUILT IN UI*/}
    // const onSuccessCallback = React.useCallback(
    //   (data) => {
    //       if (data && data.token) console.log(data);
    //   },
    //   [],
    // );

    return (
      <div>
          <div className="login-container" />
          {/* CHOOSE ONE */}
          {/* CUSTOM UI */}
          <h5>Email</h5>
          <input
            style={{ color: "black" }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            style={{ color: "black" }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button onClick={handleOnLogin}>Login</button>
          <br />
          <button onClick={() => (window.location.pathname = "/registration")}>Create new account</button>

          {areThereOptsToRender && <><br/><br/><span>or continue with</span></>}
          {areThereOptsToRender && setupResponseData.opts.filter(opt => opt.prv).map(opt =>
            <React.Fragment key={opt['@id']}>
              <br/>
              <button
                onClick={() => IKUIOidc.oidcSetup(opt['@id'])}
              >{opt.prv}</button>
            </React.Fragment>
          )
          }
          {/* BUILT IN UI*/}
          {/*{IKUICore.renderLogin({*/}
          {/*  renderElementSelector: ".login-container",*/}
          {/*  onSuccessLogin: console.log,*/}
          {/*})}*/}
      </div>
    );
};

export default Login;
