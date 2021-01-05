import React from 'react';
import './SideMenu.scss';
import logo from './../../assets/img/the-godfather.svg';
import Navigation from '../Navigation/Navigation';

const SideMenu = (props) => {

  return (
    <header className="side-menu">
      <img src={logo} className="logo side-menu__logo" alt="The godfather logo" />
      <Navigation 
        users={props.users} 
        onLinkClick={props.onLinkClick}
        activeProfile={props.activeProfile} />
    </header>
  )
}

export default SideMenu;