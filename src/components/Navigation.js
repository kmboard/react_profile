// import React from 'react';
// import {NavLink} from "react-router-dom";

// function Navigation() {   
//     return (
//     <div className=" ul row navigation" id="navigation">
//           <a href="./About.js">About Me</a>
//                 <a href=".Profile.js"> Profile</a>
//                 <a href=".Contact.js">Contact Me</a>
//                 <a href=".Resume.js">Resume</a>
//              </div>   
//   );
// }

// export default Navigation;

import React from 'react';
import {NavLink} from "react-router-dom";

function Navigation(props) {   

    return (
    <div className=" row navigation" id="navigation">
        <NavLink to="/about">About </NavLink>
        <NavLink to="/portfolio">Portfolio </NavLink>
        <NavLink to="/contact">Contact </NavLink>
        <NavLink to="/resume">Resume</NavLink>
    </div>
  );
}

export default Navigation;