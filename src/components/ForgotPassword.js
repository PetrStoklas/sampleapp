import React from "react";
import { IKUICore, IKUIUserAPI } from "indykite-ui-sdk";

const ForgottenPassword = () => {
    const [email, setEmail] = React.useState("");

    const handleOnSend = React.useCallback(() => {
        IKUIUserAPI.sendResetPasswordEmail(email).then(console.log).catch(console.log);
    }, [email]);

    return (
      <div>
          <div id="forgotten-password-container" />
          <input
            style={{ color: "black" }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleOnSend}>send</button>
          {/*{IKUICore.renderForgotPassword({renderElementSelector: "#forgotten-password-container"})}*/}
      </div>
    );
};

export default ForgottenPassword;
