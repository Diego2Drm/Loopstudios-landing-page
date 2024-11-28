import React from 'react'
import '../../scss/components/Header.scss'
import logo from '../../assets/logo.svg'
import iconClose from '../../assets/icon-close.svg'
import { LinkList } from '../LinkList'

function NavList(props) {
  const { active, handleNav } = props

  return (
    <nav className={active ? 'active' : 'disable'}>
      <div>
        <img className='icon' src={logo} alt="logo" />
        <img className='icon' src={iconClose} alt="icon-close" onClick={handleNav} />
      </div>
     <LinkList />
    </nav>
  );
};

export { NavList }; 