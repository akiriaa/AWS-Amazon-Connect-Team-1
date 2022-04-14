import "amazon-connect-streams";
import React, { useEffect } from "react";
import { render } from "react-dom";
import Nav from './Nav';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Chat from './Chat';
import Recordings from './Recordings';


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
        <div id="ccp" style={{ width: "320px", height: "580px" }}></div>
      ) 
    }
    // <main className="body-content">
    //     {/* <Nav /> */}
    //     <div className="home-title">
    //       <h1> Welcome!</h1>
    //     </div>


      
    //   {/* <ul className="home-button-group">
    //     <li> <Link to="./Chat" className="home-nav-button">Chat</Link> </li>
    //     <li> <Link to="./Recordings" className="home-nav-button">Recordings</Link> </li>
    //   </ul> */}


    //     {/* <Router>
    //       <Switch>
    //         <Route exact path="">
    //           <
    //         </Route>
    //       </Switch>
    //     </Router> */}
    //   </main>

//render(<Home />, document.getElementById("app"));

export default Home;