<<<<<<< HEAD
// import { Authenticator } from "@aws-amplify/ui-react";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import Amplify from "aws-amplify";
// import Amplify from "aws-amplify";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import awsconfig from "./aws-exports";
import NavMenu from "./components/menu/NavMenu";
import Root from "./root/Root";
=======
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


>>>>>>> master

Amplify.configure(awsconfig);

function App() {
<<<<<<< HEAD
  return (
    <BrowserRouter>
      <Authenticator>
        {({ signOut }) => (
          <main>
            <button onClick={signOut} className="signOut">
              Sign out
            </button>
            <NavMenu />
            <Root />
          </main>
        )}
      </Authenticator>
    </BrowserRouter>
=======
  return ( 
    <Authenticator >
      {({ signOut }) => (
        <main>
          <button onClick={signOut} className="signOut">Sign out</button>
          <Home />
        </main>
      )}

      
    </Authenticator>





>>>>>>> master
  );
}

export default App;
