import React from 'react';
import { AppBar, Toolbar, Typography, Button, Card } from '@mui/material';

import notif from '../img/notif.png';
import pdown from '../img/pdown.png';
import '../styles/Sidebar.css';

const Header = () => {
  return (
    <header id="navbar" className="navbar">
      <div className="left">
        <p>Smartlink</p>
        <img src={pdown} className="panah-icon" />
      </div>
      <div className="right">
        <p className="a-text">Andreas Marcela</p>
        <p className='a-text'>Kasir</p>
        <img src={notif} alt="Notif" className="notif-icon" />
      </div>
    </header>
  );
};

export default Header;