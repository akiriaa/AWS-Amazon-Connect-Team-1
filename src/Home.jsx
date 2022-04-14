import "amazon-connect-streams";
import React, { useEffect } from "react";
import { render } from "react-dom";
import Nav from './Nav';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Recordings from './Recordings';
import Meeting from './components/Meeting';
import MeetingForm from './components/MeetingForm';
import { ThemeProvider } from 'styled-components';
import {
  MeetingProvider,
  lightTheme
} from 'amazon-chime-sdk-component-library-react';


const CCP_URL = "https://awsconnect-team-1.my.connect.aws/ccp-v2/";
 const LOGIN_URL = "https://awsconnect-team-1.my.connect.aws/login";
const REGION = "us-east-2"; // e.g. us-west-2

const Home = () => { 
      useEffect(() => {
        const container = document.getElementById("ccp");
        //eslint-disable-next-line no-undef
        connect.core.initCCP(container, {
          ccpUrl: CCP_URL,
          loginUrl: LOGIN_URL,
          loginPopup: true,
          loginPopupAutoClose: true,
          region: REGION,
          softphone: {
            allowFramedSoftphone: true
          }
        });
      }, []);
    
      return(
        <><div id="ccp" style={{ width: "320px", height: "580px", float: "left" }}></div>
        <div id="meeting" style={{ width: "990px", height: "580px", float: "right" }}>
          <ThemeProvider theme={lightTheme}>
            <MeetingProvider>
              <MeetingForm />
              <Meeting />
            </MeetingProvider>
          </ThemeProvider>
        </div></>
      ) 
    }
 

export default Home;