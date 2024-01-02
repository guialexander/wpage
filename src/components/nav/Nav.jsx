import React , { useState }from 'react'
import { NavLink } from 'react-router-dom';
import './nav.css'

const Nav = () => {

  const [menuVisible, setMenuVisible] = useState(false);

  const handleMenuHover = () => {
    setMenuVisible(!menuVisible);
  };
  return (
    <nav className="nav">
    <div className="menu">
      <ul className={menuVisible ? 'menu-list show' : 'menu-list'}>
        <li><NavLink to='/'> HOME </NavLink></li>
        <li><NavLink to='/about'> Quiénes Somos</NavLink></li>
        <li><NavLink to='/consultoriatransformaciondigital'> Consultoría Transformación Digital</NavLink></li>
        <li><NavLink to='/sipa'>SIPA</NavLink></li>
        <li><NavLink to='/businessintellence'>Business Intellence</NavLink></li>
      </ul>
    </div>
    <div className={`menu-trigger ${menuVisible ? 'hide-trigger' : ''}`} onMouseEnter={handleMenuHover} onMouseLeave={handleMenuHover}>
        <a href="#">Menú</a>
      </div>
  </nav>
  )
}

export default Nav
