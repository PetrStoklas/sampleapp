import React from "react";
import {
    IKUICore, // Used when using built in ui
    IKUIUserAPI // Used when using custom ui
} from "indykite-ui-sdk";
import { useParams } from "react-router-dom";

const SetNewPassword = () => {
    const { referenceId } = useParams();
    const [newPassword, setNewPassword] = React.useState("");

    {/*CUSTOM UI*/}
    const handleOnSubmit = React.useCallback(() => {
        IKUIUserAPI.sendNewPassword({ referenceId, newPassword })
          .then(console.log)
          .catch(console.log);
    }, [referenceId, newPassword]);

    return (
      <div>
          <div id="set-new-password-container" />
           {/*CHOOSE ONE*/}
           {/*CUSTOM UI*/}
          <input
            style={{ color: "black" }}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <br />
          <button onClick={handleOnSubmit}>send</button>

          {/* BUILT IN UI*/}
          {/*{IKUICore.renderSetNewPassword({*/}
          {/*    renderElementSelector: "#set-new-password-container",*/}
          {/*    token: referenceId,*/}
          {/*})}*/}
      </div>
    );
};

export default SetNewPassword;
