import React,{Fragment,useState} from 'react';
import {Link} from "react-router-dom";
import "./style.css"

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  return (
    <Fragment>
    <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
     <nav className="navbar" onClick={e => e.stopPropagation()}>
       <div className="nav-container">
         <Link exact to="/" className="nav-logo">
           Movies
         </Link>
         <ul className={click ? "nav-menu active" : "nav-menu"}>
           <li className="nav-item">
             <Link
               exact
               to="/"
               className="nav-links"
               onClick={click ? handleClick : null}
             >
               Home
             </Link>
             <Link
               exact
               to="/register"
               className="nav-links"
               
             >
               Register
             </Link>
             <Link
               exact
               to="/login"
               className="nav-links"
               
             >
               Login
             </Link>
           
           </li>
         
         </ul>
         <div className="nav-icon" onClick={handleClick}>
           <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
         </div>
       </div>
     </nav>
   </Fragment>
  )
}

export default Navbar