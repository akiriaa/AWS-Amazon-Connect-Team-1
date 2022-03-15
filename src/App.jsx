import React from 'react';
import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { Authenticator } from '@aws-amplify/ui-react';
import {useEffect} from 'react';
import '@aws-amplify/ui-react/styles.css';
import Home from './Home';
import Chat from './Chat';
import Recordings from './Recordings';
// import awsExports from './aws-exports'
import Nav from './Nav';
import List from './List';

Amplify.configure(awsconfig);

function App() {
  // AWS.config.region = 'us-east-1'; // Region
  // AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  //     IdentityPoolId: 'us-east-1:e2aff3de-0d7f-435b-b07f-4e15dc60f200',
  // });
 
  useEffect(() => {
    Amplify.configure({
        Auth: {
            IdentityPoolId: 'us-east-1:e2aff3de-0d7f-435b-b07f-4e15dc60f200', //REQUIRED - Amazon Cognito Identity Pool ID
            region: 'us-east-1', // REQUIRED - Amazon Cognito Region
        },
        Storage: {
            AWSS3: {
                bucket: 's3://amazon-connect-c5138a2c2b4d/connect/AWSConnect-Team-1/CallRecordings/', //REQUIRED -  Amazon S3 bucket name
              //  region: 'us-east-2', //OPTIONAL -  Amazon service region
            }
        }
        

    })
}, []);


  return ( 
    <Authenticator >
      {({ signOut}) => (
        <main>
          <h1>Hello </h1>
              <List/>
          <button onClick={signOut}>Sign out</button>
        
        </main>
      )}
    </Authenticator>

  );
}

export default App;
