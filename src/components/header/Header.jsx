import React, { useState } from 'react';
import { FaBiohazard } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import './header.css';
import Nav from '../nav/Nav';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);



  const handleClick = () => {
    setIsOpen(!isOpen);
  };



  return (
    <>
    <nav className='header-container'>
    <div className='header-container__logo'>
      <FaBiohazard />
    </div>
    <div className={`header-container__items ${isOpen && 'open'}`}>
      <div className='header-container__items--title' onClick={handleClick}>
        <NavLink to='/'> HOME </NavLink>
      </div>
      </div>
      <div className='header-container__items--title' onClick={handleClick}>
        <NavLink to='/restaurant'> RESTAURANTS </NavLink>
      </div>

      <div className='header-container__items--title' onClick={handleClick}>
        <NavLink to='/about'> ABOUT </NavLink>
      </div>

     <div
          className='header-container__items--access'
          onClick={handleClick}
        >
          <NavLink to='/access'>
            <BsFillPersonFill size={23} />
          </NavLink>
      </div>






    <div
      className={`header-container--toggle ${isOpen && 'open'}`}

    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  </nav>
    <div className='header'>Header</div>
  </>
  )
}

export default Header
