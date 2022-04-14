
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Recordings from './Recordings';
import Meeting from './components/Meeting';
import MeetingForm from './components/MeetingForm';
import { ThemeProvider } from 'styled-components';
import {
  MeetingProvider,
  lightTheme
} from 'amazon-chime-sdk-component-library-react';

const Home = () => {
  
    return (  
    <main className="body-content">

    <div id="meeting" style={{ width: "980px", height: "580px", float: "right" }}>
      <ThemeProvider theme={lightTheme}>
        <MeetingProvider>
          <MeetingForm />
          <Meeting/>
        </MeetingProvider>
      </ThemeProvider>
    </div>
      

      
      {/* <ul className="home-button-group">
        <li> <Link to="./Chat" className="home-nav-button">Chat</Link> </li>
        <li> <Link to="./Recordings" className="home-nav-button">Recordings</Link> </li>
      </ul> */}


        {/* <Router>
          <Switch>
            <Route exact path="">
              <
            </Route>
          </Switch>
        </Router> */}
      </main>
    );
  }
   
  export default Home;