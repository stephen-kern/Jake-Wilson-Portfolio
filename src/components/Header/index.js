import { React } from "react";
import { NavLink, Link } from "react-router-dom";

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
            <NavLink to="/collagraphs">COLLAGRAPH</NavLink>
          </li>
          <li>
            <NavLink to="/etchings" >ETCHING</NavLink>
          </li>
          <li>
            <NavLink to="/relief" >RELIEF</NavLink>
          </li>
          <li>
            <NavLink to="/ceramics" >CERAMIC</NavLink>
          </li>
        </ul>
      </nav>
      <div className="right-links">
        <NavLink to="/curriculum">CV</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </header>
  );
};

export default Header;
