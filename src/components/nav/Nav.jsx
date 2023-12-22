import React from 'react'
import { NavLink } from 'react-router-dom';
import './nav.css'

const Nav = () => {
  return (
    <nav className="nav">
    <ul>
        <NavLink to='/'> HOME </NavLink>
        <NavLink to='/about'> Quiénes Somos</NavLink>
        <NavLink to='/consultoriatransformaciondigital'> Consultoría Transformación Digital</NavLink>
        <NavLink to='/sipa'>SIPA</NavLink>
        <NavLink to='/businessintellence'>Business Intellence</NavLink>
    </ul>
  </nav>
  )
}

export default Nav
