import React from "react";
import { IKUIOidc } from "indykite-ui-sdk";

// This is used when Indykite is the provider
const Oidc = () => {
    console.log('I was here')
    React.useEffect(() => {
        const sparkOidc = async () => {
            const response = await IKUIOidc.handleOidcOriginalParamsAndRedirect();

            console.log(response);
        };

        sparkOidc();
    });

    return <h3>oidc</h3>;
};


// This is where FB, Google and other providers can redirect you
const Callback = () => {
    React.useEffect(() => {
        IKUIOidc.oidcCallback().then(console.log).catch(console.log)
    })
    return <h3>general callback</h3>
}

export default Oidc;
export { Callback };
