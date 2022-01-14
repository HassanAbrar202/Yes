import React from 'react';
import {Link} from  'react-router-dom';
import About from './About';
import Uprojects from './Uprojects';
import Contact from './Contact';
import Blog from './Blog';
import Priavcy from './Privacy';
import './nav.css'

function Nav() {
    return (
        <div className='test'>
            <nav className="navbar navbar-dark navbar-expand-lg bg-dark py-4">
  <a className="navbar-brand active"><Link to="/" style={{textDecoration:'none'}}>Yes</Link></a>
  <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarResponsive' aria-controls='navbarResponsive' aria-expanded='false' aria-label='Toggle Navigation'>
      <span className="navbar-toggler-icon"></span>
      </button>
  <div className="collapse navbar-collapse" id="navbarResponsive">
    <ul className="navbar-nav mr-auto px-4">
      <li className="nav-item  px-2">
          <Link to ='/About' style={{textDecoration:'none'}}>
        <a className="nav-link">About Us<span className=""></span></a>
        </Link>
      </li>
      <li className="nav-item px-2">
      <Link to ='/Uprojects' style={{textDecoration:'none'}}>
        <a className="nav-link" href="#">Upcoming Projects</a>
        </Link>
      </li>
      <li className="nav-item px-2">
      <Link to ='/Contact' style={{textDecoration:'none'}}>
        <a className="nav-link" href="#">Contact Us</a>
        </Link>
      </li>
      <li className="nav-item px-2" >
      <Link to ='/Blog' style={{textDecoration:'none'}}>
        <a className="nav-link" href="#">Blog</a>
        </Link>
      </li> 
      <li className="nav-item px-2">
      <Link to ='/Privacy' style={{textDecoration:'none'}}>
        <a className="nav-link" href="#">T&C</a>
        </Link>
      </li>
    </ul>
    <ul className='navbar-nav form-inline my-2 my-lg-0'>
    <li class="nav-item">
     <Link to='/Signup'>SIGN UP</Link>
    </li>
    <li class='nav-item'>
     <Link to='/Login'>Login</Link>
    </li>
    </ul>
  </div>
</nav>
        </div>
    )
}

export default Nav
