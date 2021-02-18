import React from "react";
import { IKUIOidc } from "indykite-ui-sdk";

const Oidc = () => {
    console.log('I was here')
    React.useEffect(() => {
        const sparkOidc = async () => {
            const response = await IKUIOidc.handleOidcOriginalParamsAndRedirect();

            console.log(response);
        };

        sparkOidc();
    });

    return <h1>oidc</h1>;
};

export default Oidc;
