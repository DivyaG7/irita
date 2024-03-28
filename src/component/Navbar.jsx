import React, { useState } from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom'
import logo from '../assets/irita-logo.png'
// import { useNavigate } from 'react-router-dom';


export const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [collapsed, setCollapsed] = useState(true);
  // const navigate = useNavigate();

  // const handleSearch = (e) => {
  //     e.preventDefault();
  //     if (!searchTerm.trim()) {
  //         console.log("Please enter a search term");
  //         return;
  //     }
  //     onSearch(searchTerm);
  //     setSearchTerm('');
  //     navigate(`/search-results?query=${searchTerm}`);
  // };

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  const closeNavbar = () => {
    setCollapsed(true);
  };

  

  return (
    <>
      <div className='header-box'></div>
      <nav className="navbar navbar-expand-lg navbar-dark" id='navbar'>
        <div className="container-fluid">

          {/* First Row */}
          <div className='navbar navbar-light justify-content-between w-100'>
            <Link to='/' >
              <img src={logo} className="navbar-brand" alt='irita-logo' />
            </Link>

            {/* What's New */}
            <div className="whatsNew">
              <Link className="btn mx-lg-2 me-2 new-button" style={{ background: '#D94539', borderRadius: '5px', color: 'white' }} aria-current="page" onClick={closeNavbar} to="/">What’s New</Link>
              {/* Toggler Icon */}
              <button className="navbar-toggler ml-auto"
                type="button"
                onClick={toggleNavbar}>
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>


          {/* Second Row: Navigation Links (displayed on larger screens) */}
          <div className={`collapse navbar-collapse ${!collapsed && 'show'}`} id='navbarSupportedContent'>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/About" onClick={closeNavbar}>About</Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/Membership" onClick={closeNavbar}>Membership</Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/NewsEvents" onClick={closeNavbar}>News & Events</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Programmes" onClick={closeNavbar}>Programmes</Link>
              </li>
              {/* <li className="nav-item1">
                <Link className="nav-link" to="/KeyInitiative" onClick={closeNavbar}>Key Initiative</Link>
              </li> */}
              {/* Add other nav items here */}
            </ul>
          </div>

          {/* Background Overlay for Mobile View */}
          {collapsed && (
            <div className="mobile-overlay" onClick={closeNavbar}></div>
          )}
        </div>
      </nav>


    </>
  )
}

