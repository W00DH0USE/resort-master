import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';
import { FaGripLines, FaGripLinesVertical } from 'react-icons/fa';

export default class NavBar extends Component {
  state = {
    isOpen: false
  }

  handleToggle = (prevState) => {
    this.setState((prevState) => {
      return { isOpen: !prevState.isOpen }
    })
  }

  closeMobileNav = () => {
    this.setState({ isOpen: false })
  }

  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="logo"/>
            </Link>
            <button type="button" className="nav-btn" onClick={() => this.handleToggle()}>
              {this.state.isOpen ? <FaGripLinesVertical className="nav-icon"/> : <FaGripLines className="nav-icon"/> }
            </button>
          </div>
          <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
            <li>
              <Link to="/" onClick={() => this.closeMobileNav()}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/rooms" onClick={() => this.closeMobileNav()}>
                Rooms
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
