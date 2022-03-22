import React from 'react';
import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Home from './Home';
import Chat from './Chat';
import Recordings from './Recordings';
// import awsExports from './aws-exports'
import Nav from './Nav';
import "amazon-connect-streams";



Amplify.configure(awsconfig);

function App() {
  return ( 
    <Authenticator >
      {({ signOut }) => (
        <main>
          <button onClick={signOut} className="signOut">Sign out</button>
          <Home />
        </main>
      )}

      
    </Authenticator>





  );
}

export default App;
