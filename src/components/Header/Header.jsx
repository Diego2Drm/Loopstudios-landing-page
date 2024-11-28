import React, { useState } from "react";
import '../../scss/components/Header.scss'
import logo from '../../assets/logo.svg'
import iconHamburger from '../../assets/icon-hamburger.svg'
import { NavList } from "./NavList";

function Header() {

  const [ navActive, setNavActive ] = useState(false)

  const handleNav = () => {
    setNavActive(!navActive)    
  }

  return (
    <header className="content__header">
      <div>
        <img src={logo} alt="logo" />
        <div>
          <img className="icon" src={iconHamburger} alt="icon-hamburger" onClick={handleNav}/>
          <NavList active={navActive} handleNav={handleNav}/>
        </div>
      </div>
      <p>
        Immersive experiences that deliver
      </p>
    </header>
  );
};

export { Header }