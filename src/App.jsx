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
import List from "./List";


Amplify.configure(awsconfig);

function App() {
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
            <List/>
          </main>
        )}
      </Authenticator>
    </BrowserRouter>
  );
}

export default App;
