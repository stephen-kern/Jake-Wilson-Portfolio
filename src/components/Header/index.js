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
            <NavLink to="/Jake-Wilson-Portfolio/collagraphs">COLLAGRAPH</NavLink>
          </li>
          <li>
            <NavLink to="/Jake-Wilson-Portfolio/etchings">ETCHING</NavLink>
          </li>
          <li>
            <NavLink to="/Jake-Wilson-Portfolio/relief">RELIEF</NavLink>
          </li>
          <li>
            <NavLink to="/Jake-Wilson-Portfolio/ceramics">CERAMIC</NavLink>
          </li>
        </ul>
      </nav>
      <div className="right-links">
        <NavLink to="/Jake-Wilson-Portfolio/curriculum">CV</NavLink>
        <NavLink to="/Jake-Wilson-Portfolio/contact">Contact</NavLink>
      </div>
      {isMobile && <MobileNav />}
    </header>
  );
};

export default Header;
