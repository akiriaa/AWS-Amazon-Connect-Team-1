import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';


function Nav() {
  return (  
    <nav className="navbar"> <p className="site-title">Amazon Connect</p>
      <ul className="navbar-items">
        <li> <Link to="./Home" className="navbutton">Home</Link> </li>
        <li> <Link to="./Chat" className="navbutton">Chat</Link> </li>
        <li> <Link to="./Recordings" className="navbutton">Recordings</Link> </li>
      </ul>
    </nav>
  );
}
 
export default Nav;