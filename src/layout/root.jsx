import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Nav from '../components/nav/Nav';
import './root.css'


export const Root = () => {
  return (
    <>
     <header>Encabezado</header>
    <Nav/>
    <main>
      <Outlet/> {/* donde renderiza la ubicación*/}
    </main>
    <Footer />

    </>
  )
};

export default Root;
