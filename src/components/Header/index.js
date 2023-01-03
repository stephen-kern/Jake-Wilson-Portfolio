import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link to="/" className="logo">
          Jake Wilson
        </Link>
      </div>
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <Link to="/collagraphs">Collagraphs</Link>
          </li>
          <li>
            <Link to="/etchings">Etchings</Link>
          </li>
          <li>
            <Link to="/relief">Relief</Link>
          </li>
        </ul>
      </nav>
      <div className="right-links">
        <Link to="/resume">Resume</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </header>
  );
};

export default Header;
