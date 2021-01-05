import React from 'react';
import './Navigation.scss';

const Navigation = (props) => {

  const activeLink = (i) => props.activeProfile === i ? ' nav__item--active' : '';

  const users = props.users.map((user, i) => {
    return (
      <li 
        key={i} 
        className={"nav__item" + activeLink(i)}
        onClick={() => props.onLinkClick(i)} >
          <a href="#" className="nav__link">{user.name}</a>
      </li>
    )
  })

  return (
    <nav className="nav">
      <ul>
        {users}
      </ul>
    </nav>
  )
}

export default Navigation;