import { React } from "react";
import { useMediaQuery } from "@mui/material";
import { NavLink, Link } from "react-router-dom";
import MobileNav from "../MobileNav";


const Header = () => {

  const isMobile = useMediaQuery('(max-width: 810px)');

  return (
    <header>
      <div className="logo">
        <Link to="/Jake-Wilson-Portfolio" className="logo">
          Jake Wilson
        </Link>
      </div>
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <NavLink to="/collagraphs">COLLAGRAPH</NavLink>
          </li>
          <li>
            <NavLink to="/etchings">ETCHING</NavLink>
          </li>
          <li>
            <NavLink to="/relief">RELIEF</NavLink>
          </li>
          <li>
            <NavLink to="/ceramics">CERAMIC</NavLink>
          </li>
        </ul>
      </nav>
      <div className="right-links">
        <NavLink to="/curriculum">CV</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      {isMobile && <MobileNav />}
    </header>
  );
};

export default Header;
