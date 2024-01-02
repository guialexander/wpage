import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Nav from '../components/nav/Nav';
import './root.css'
import Header from '../components/header/Header';


export const Root = () => {
  return (
    <>
    <div className="container">
    <Header />
    <Nav/>
    <main>
      <Outlet/> {/* donde renderiza la ubicación*/}
    </main>
    <Footer />
    </div>

    </>
  )
};

export default Root;
