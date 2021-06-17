import image1 from './../images/horizon 1.png'
import React from 'react';

const Navbar = () => {
    return (
      
 <nav className="navbar navbar-default navbar-control">
 <div className="container-fluid">

   <div className="navbar-header">
     <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
       <span className="sr-only">Toggle navigation</span>
       <span className="icon-bar"></span>
       <span className="icon-bar"></span>
       <span className="icon-bar"></span>
     </button>
     <a className="navbar-brand" href="#"><img src={image1}className="img-responsive"/>
     </a>
   </div>

  
     <ul className="nav navbar-nav navbar-right">
       <li><a href="#">About Us</a></li>
      
         </ul>
      
  
   </div>
</nav>
    );
}

export default Navbar;
