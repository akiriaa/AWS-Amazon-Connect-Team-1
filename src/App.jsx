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
import { BrowserRouter } from 'react-router-dom';

Amplify.configure(awsconfig);



function App() {
  // Amplify.config.region = 'us-east-1'; // Region
  // Amplify.config.credentials = new Amplify.CognitoIdentityCredentials({
  // IdentityPoolId: 'us-east-1:e2aff3de-0d7f-435b-b07f-4e15dc60f200',
  

  return ( 
    
    <Authenticator >
      {({ signOut}) => (
        <main>
          <h1>Hello </h1>
          <div><List></List></div>
          <button onClick={signOut}>Sign out</button>       
        </main>
      )}
    </Authenticator>

  );
}

export default App;
