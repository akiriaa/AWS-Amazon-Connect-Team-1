import React from 'react';
import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
// import awsExports from './aws-exports'
import List from './List';

Amplify.configure(awsconfig);

function App() {
  return ( 
    <Authenticator>
      {({ signOut }) => (
        <main>
          <h1>Hello</h1>
          <text>Did it work </text>
          <button onClick = {<List/>}> Recordings here</button>
          {/* <List/> */}
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}

export default App;
