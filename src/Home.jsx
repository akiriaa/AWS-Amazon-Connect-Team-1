import Nav from './Nav';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Chat from './Chat';
import Recordings from './Recordings';
import { Helmet } from "react-helmet"


const Home = () => {
  
    return (  
    
    <main className="body-content">
        {/* <Nav /> */}
        <div className="home-title">
          <h1> Welcome!</h1>
        </div>
        {/* <iframe src={ chat }></iframe> */}
        {/* <Chat /> */}

      </main>
    );
  }
   
  export default Home;