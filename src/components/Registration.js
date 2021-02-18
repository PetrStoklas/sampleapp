import React from "react";
import {
    IKUICore, // Built in ui
    IKUIUserAPI
} from "indykite-ui-sdk";

const Registration = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    {/* BUILT IN UI */}
    // const onSuccessCallback = React.useCallback(
    //   (data) => {
    //       if (data && data.token) console.log(data);
    //   },
    //   [],
    // );

    const handleOnRegister = React.useCallback(() => {
        IKUIUserAPI.register(email, password)
          .then((resp) => console.log(resp))
          .catch((err) => console.log(err));
    }, [email, password]);

    return (
      <div>
          <div className="register-container" />
          {/* CHOOSE ONE*/}
          {/* CUSTOM UI*/}
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
          <button onClick={handleOnRegister}>Register</button>

          {/* BUILT IN UI */}
          {/*{IKUICore.renderRegister({*/}
          {/*  renderElementSelector: ".register-container",*/}
          {/*  onSuccessRegistration: onSuccessCallback,*/}
          {/*  // termsAgreementSectionContent:*/}
          {/*  // "<h5>By clicking Agree & Join you agree with our secret terms and conditions.</h5>",*/}
          {/*})}*/}
      </div>
    );
};

export default Registration;
