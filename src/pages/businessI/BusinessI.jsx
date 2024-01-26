import React from 'react';
import {lista} from '../../data/lista';
import { Link } from 'react-router-dom';
import './businessi.css'

const BusinessI = () => {
  return (
    <>
    <div className='containerBusinessi'>
      <h1>BusinessI</h1>
      <div className="businessi-lista">
      {
        lista.map(trabajo => {
          return (
          //{console.log(trabajo)}
          <article key={trabajo.id}>
            <div className="mask">
              <img src = {trabajo.image}/>
            </div>
            <span>{trabajo.categorias}</span>
            <h2><Link to = {"/proyecto/"+trabajo.id}>{trabajo.nombre}</Link></h2>
            <h3>{trabajo.tecnologías}</h3>
          </article>
          )
        })
      }
      </div>
    </div>
    </>
  )
}

export default BusinessI;
