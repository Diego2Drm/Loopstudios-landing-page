import React from 'react'
import '../../scss/components/Header.scss'
import logo from '../../assets/logo.svg'
import iconClose from '../../assets/icon-close.svg'

function NavList(props) {
  const { active, handleNav } = props

  return (
    <nav className={active ? 'active' : 'disable'}>
      <div>
        <img src={logo} alt="logo" />
        <img src={iconClose} alt="icon-close" onClick={handleNav} />
      </div>
      <ul>
        <li><a href="#">About</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Events</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Support</a></li>
      </ul>
    </nav>
  );
};

export { NavList }; 