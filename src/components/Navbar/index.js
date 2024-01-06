import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.jpg'

const Navbar = ({children}) => {
  return (
    <>
    <nav className="navbar" style={{background: '#5c2d37'}}>
      <div className="container-fluid">
        <Link className="navbar-brand d-flex justify-content-center align-items-center" to="/">
          <img src={logo} alt="Begum Nusrat Bhutto Women University" width="70" height="70" className="d-inline-block align-top" />
          <p>Begum Nusrat Bhutto Women University</p>
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="btn btn-outline-secondary border border-0"  to={'/scan'}>Scanner</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <main>
        {children}
    </main>
    </>
  );
};

export default Navbar;
