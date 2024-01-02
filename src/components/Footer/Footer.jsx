import React from 'react';
import { useState } from 'react';
import './Footer.css';
import gorjeo from'../../images/gorjeo.png';
import instagram from '../../images/instagram.png';
import youtube from '../../images/youtube.png';
import mapa from '../../images/mapa.jpg';

function Footer() {
  const [isOpen, setIsOpen] = useState(false);


  function handleClick (value) {
      setIsOpen(value);

  };


  return (
    <footer>

      <div className='container_fot'>
        <div className='fot' onClick={()=>handleClick('rica')}>
          <p className='fot_title'>WHALE SAS</p>

         <div className={`fot_title_open ${(isOpen === 'rica' )? 'rica':'false'}`} >
          <p>WHALE</p>
          <p>2024</p>
          </div>
        </div>


        <div className='fot' onClick={()=>handleClick('about')}>
          <p className='fot_title'>About</p>
          <div className={`fot_title_open ${(isOpen === 'about' )? 'about':'false'}`}>
          <p>About Us</p>

        </div>
        </div>


        <div className='fot' onClick={()=>handleClick("our")}>
          <p className='fot_title' >Our Location</p>
          <div className={`fot_title_open ${(isOpen === 'our' )? 'our':'false'}`}>
          <div className='fot_mapa'>
            <a
              href='https://maps.app.goo.gl/xfG67R6ZY8q3zCYQA'
              target='_blank'
              rel='noreferrer'
            >
             <img src={mapa} alt='mapa' />
            </a>
          </div>
          </div>
        </div>


        <div className='fot' onClick={()=>handleClick("ulink")}>
          <p className='fot_title' >Useful Links</p>
          <div className={`fot_title_open ${(isOpen === 'ulink' )? 'ulink':'false'}`}>
          <p>HOME</p>
          <p>Consultoría Transformación Digital</p>
          <p>SIPA</p>
          <p>Business Intellence</p>
        </div>
        </div>


        <div className='fot' onClick={()=>handleClick("newtopics")}>
          <p className='fot_title'  >New Topics</p>
          <div className={`fot_title_open ${(isOpen === 'newtopics' )? 'newtopics':'false'}`}>
          <p>2023</p>
        </div>
        </div>

        <div className='fot' onClick={()=>handleClick("dise")}>
          <p className='fot_title'>Designed by:</p>
          <div className={`fot_title_open ${(isOpen === 'dise' )? 'dise':'false'}`}>
          <p>GAHerrera</p>
        </div>
      </div>
      </div>


      <div className='contene'>
        <div className='contenedorRedes'>
          <a href='https://twitter.com/' target='_blank' rel='noreferrer'>
            <img src={gorjeo} alt='twiter' />
          </a>
          <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'>
            <img src={instagram} alt='instagram' />
          </a>
          <a href='https://www.youtube.com/' target='_blank' rel='noreferrer'>
            <img src={youtube} alt='youtuber' />
          </a>
        </div>

        <div className='contenedorRedes_fot'>
          <p>Copyright 2023 Restaurant BY Grupo 1</p>
        </div>


      </div>
    </footer>
  );
}

export default Footer;
