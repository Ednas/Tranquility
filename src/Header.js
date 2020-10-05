import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

class Header extends Component {
  state = {
    open: false,
    width: window.innerWidth
  };

  updateWidth = () => {
    const newState = { width: window.innerWidth };

    if (this.state.open && newState.width > 991) {
      newState.open = false;
    }

    this.setState(newState);
  };

  toggleNav = () => {
    this.setState({ open: !this.state.open });
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  render() {
    return (
        
      <nav className="navbar navbar-expand-lg">
          <div className="container">
          <Router>
        <Link className="navbar-brand" to="/">
          Tranquility History Project
        </Link>
        <button
          onClick={this.toggleNav}
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`${this.state.open ? "" : "collapse "}navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav  ml-auto">
            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item ml-4">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
        </Router>
        </div>
      </nav>
     
    );
  }
}

export default Header;
