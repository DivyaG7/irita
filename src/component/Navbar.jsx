import React, { useState } from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom'
import logo from '../assets/irita-logo.png'


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
          <div className="row w-100 nav-first-row">
            {/* Logo and Search */}
            <div className="col-md-6 d-flex align-items-center">
              <Link to='/' >
                <img src={logo} className="navbar-brand" alt='irita-logo' />
              </Link>
            </div>

            {/* What's New */}
            <div className="col-md-6 d-flex justify-content-end align-items-center small-input">
              <div className='d-flex justify-content-end align-items-center input1'>
              <form className="d-flex my-lg-0 my-3">
                <input
                  className="form-control me-2"
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  aria-label="Search"
                />
                {/* <button className="btn" type="submit" onClick={closeNavbar}>
                        Search
                    </button> */}
              </form>
              <Link className="btn mx-lg-2 me-2 new-button" style={{ background: '#D94539', borderRadius: '5px', color: 'white' }} aria-current="page" onClick={closeNavbar} to="/Cart">What’s New</Link>
              </div>
              {/* Toggler Icon */}
              <button className="navbar-toggler ml-auto"
                type="button"
                onClick={toggleNavbar}>
                <span className="navbar-toggler-icon"></span>
              </button>

            </div>


          </div>
          {/* Second Row */}



          {/* Second Row: Navigation Links (displayed on larger screens) */}
          <div className={`collapse navbar-collapse ${!collapsed && 'show'}`} id='navbarSupportedContent'>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/About" onClick={closeNavbar}>About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Membership" onClick={closeNavbar}>Membership</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/NewsEvents" onClick={closeNavbar}>News & Events</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Programmes" onClick={closeNavbar}>Programmes</Link>
              </li>
              <li className="nav-item1">
                <Link className="nav-link" to="/KeyInitiative" onClick={closeNavbar}>Key Initiative</Link>
              </li>
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

