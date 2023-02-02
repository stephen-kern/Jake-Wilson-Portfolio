import { React, useState } from 'react';
import { NavLink } from "react-router-dom"
import MenuIcon from "@mui/icons-material/Menu";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';

const MobileNav = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <MenuIcon
        id="mobile-nav-menu"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><NavLink to="/Jake-Wilson-Portfolio/collagraphs" className="mobile-nav-link">COLLAGRAPH</NavLink></MenuItem>
        <MenuItem onClick={handleClose}><NavLink to="/Jake-Wilson-Portfolio/etchings" className="mobile-nav-link">ETCHING</NavLink></MenuItem>
        <MenuItem onClick={handleClose}><NavLink to="/Jake-Wilson-Portfolio/relief" className="mobile-nav-link">RELIEF</NavLink></MenuItem>
        <MenuItem onClick={handleClose}><NavLink to="/Jake-Wilson-Portfolio/ceramics" className="mobile-nav-link">CERAMIC</NavLink></MenuItem>
        <Divider /> 
        <MenuItem onClick={handleClose}><NavLink to="/Jake-Wilson-Portfolio/curriculum" className="mobile-nav-link">CV</NavLink></MenuItem>
        <MenuItem onClick={handleClose}><NavLink to="/Jake-Wilson-Portfolio/contact" className="mobile-nav-link">Contact</NavLink></MenuItem>
      </Menu>
    </div>
  );
}

export default MobileNav;