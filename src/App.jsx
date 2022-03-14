import React from 'react';
import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Home from './Home';
import Chat from './Chat';
import Recordings from './Recordings';
// import awsExports from './aws-exports'
import Nav from './Nav';
import List from './List';

Amplify.configure(awsconfig);

function App() {
  return ( 
    <Authenticator >
      {({ signOut}) => (
        <main>
          <h1>Hello</h1> 
          <text> Did it work ?</text>
          <button onClick={signOut}>Sign out</button>
        
        </main>
      )}
    </Authenticator>

  );
}

export default App;
