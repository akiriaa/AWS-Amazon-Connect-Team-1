import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Home'
import Chat from './Chat'
import Recordings from './Recordings'
import List from './List'
import Amplify from 'aws-amplify';
import { render } from '@testing-library/react';
//import { REDIRECTED_FROM_HOSTED_UI } from '@aws-amplify/ui-components/dist/types/common/constants';

// const { DynamoDBClient, ListTablesCommand } = require("@aws-sdk/client-dynamodb");

// (async () => {
//   const client = new DynamoDBClient({ region: "us-east-1" });
//   // Amplify.config.region = 'us-east-1';

//   // Configure the credentials provider to use your identity pool
//   // Amplify.config.credentials = new Amplify.CognitoIdentityCredentials({
//   //     IdentityPoolId: 'IDENTITY_POOL_ID',
//   // });
  
//   // Amplify.config.credentials.get(function(){

//   //     // Credentials will be available when this function is called.
//   //     var accessKeyId = Amplify.config.credentials.accessKeyId;
//   //     var secretAccessKey = Amplify.config.credentials.secretAccessKey;
//   //     var sessionToken = Amplify.config.credentials.sessionToken;
//   //     var identityId = Amplify.config.credentials.identityId;
//   //     console.log(identityId);

//   const command = new ListTablesCommand({});

//   try {
//     const results = /*await*/ client.send(command);
//     console.log(results.TableNames.join("\n"))
//   } catch (err) {
//     console.error(err)
//   }
// //
// }
// )();

 reportWebVitals(console.log);

ReactDOM.render(
  <React.StrictMode>
    <App />,
    {/* <List />, */}
  </React.StrictMode>,
  document.getElementById('root')
);

 render();
//   {return (
//     <div><List></List></div>
//   );
// };
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

