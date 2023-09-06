import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div id="page-top">
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top p-1"
              id="mainNav"
              style={{background:"black"}}
      >
        <div className="container">
          <a className="navbar-brand" href="#page-top">
            <img src="public/assets/img/navbar-logo.svg" alt="..." />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars ms-1" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
              <li className="nav-item">
                <NavLink to={"/service"}  class="nav-link">
                  Service
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/porfolio"} class="nav-link">
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/about"} class="nav-link">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/team"} class="nav-link">
                  Team
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/contact"} class="nav-link">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
