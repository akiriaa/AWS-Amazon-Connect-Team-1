import React from 'react';
import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import '@aws-amplify/ui-react/styles.css';
import { AmplifyProvider, IconDashboard } from '@aws-amplify/ui-react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Home from './Home';
import Chat from './Chat';
import Recordings from './Recordings';
// import awsExports from './aws-exports'
import Nav from './Nav';
import  {Component3, Recordings1, TEST}   from './ui-components';
import { DataStore } from '@aws-amplify/datastore';
import { Audio } from './models';
import { NavBar } from './ui-components';
import { RecPage} from './ui-components';
import { ContactPage} from './ui-components';
//import Home from './ui-components'
import {NewDashboard} from './ui-components'
import {NewRecordingsPage} from './ui-components'




//
function App() {
  return (
    <Authenticator>
      {({ signOut }) => (
        <main>
          <NewDashboard/>
          
        </main>
      )}
    </Authenticator>
  );
}

export default App