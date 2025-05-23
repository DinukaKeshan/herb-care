import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './staffInventoryTopNav.css';

function StaffInventoryTopNav() {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;
  
    return (
      <div>
        <header className='header d-flex align-items-center w-100'>
          <nav className="navbar navbar-expand-lg w-100" style={{ backgroundColor: '#f3f3f3' }}>
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item staff-main-top-nav-single-nav-item">
                    <Link className={`nav-link ${isActive('/staff/staffInventoryMainDashBoard') ? 'staff-main-top-nav-navLink' : ''}`} to="/staff/staffInventoryMainDashBoard" aria-current="page">
                      Dashboard
                    </Link>
                  </li>
                  <li className="nav-item staff-main-top-nav-single-nav-item">
                    <Link className={`nav-link ${isActive('/staff/staffInventoryMainDashBoard/addProduct') ? 'staff-main-top-nav-navLink' : ''}`} to="/staff/staffInventoryMainDashBoard/addProduct">
                      Add Product
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </div>
    );
}

export default StaffInventoryTopNav