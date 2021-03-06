import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { IKUIInit, IKUIUserAPI } from "indykite-ui-sdk";

IKUIInit({
  baseUri: process.env.REACT_APP_BASE_URI,
  clientId: process.env.REACT_APP_APPLICATION_ID,
  tenantId: process.env.REACT_APP_TENANT_ID,
});

// Returns valid token if possible. You can pass refresh_token as parameter.
IKUIUserAPI.getValidAccessToken().then(console.log).catch(console.log)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
