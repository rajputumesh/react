import React, { Component } from 'react';
import logo from '../img/logo.svg';

class Header extends Component {
  render() {
    return (<div id="header">
      <div className="container">
        <nav className="navbar navbar-expand-lg bg-white navbar-white">
          <a className="navbar-brand">
            <img src={logo} alt="logo"/>
          </a>
          <button className="navbar-toggler border" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="fa fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item px-3">Home</li>
              <li className="nav-item px-3">About</li>
              <li className="nav-item px-3">Services</li>
              <li className="nav-item px-3">Gallery</li>
              <li className="nav-item px-3">Contact</li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
    );
  }
}

export default Header;
