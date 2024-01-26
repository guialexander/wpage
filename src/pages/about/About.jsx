import React, { useState } from 'react';
import './about.css';
import { useNavigate } from 'react-router-dom';

const initialState = {
  name: '',
  latsName: '',
  email: '',
  phone: '',

};



function About () {


  const [user, setUser] = useState(initialState);
  //const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };



  const handleSubmit = async (event) => {
    event.preventDefault();

    try{
    const newUser = {
      ...user,
    };

    console.log(newUser);
  }catch (error){
    console.log(error);

  }finally{
    setUser(initialState);
  }

  }

  return (
    <>
      <div className="title-about_container">
      <h1 className='title-about_container__h1'> WHALE SAS</h1>
      <p>Whale SAS es una compañía especializada en el desarrollo
        y fabricación de programas y soluciones empresariales.
        Su principal enfoque está dirigido hacia la creación de software de gestión empresarial (ERP)
        adaptado a las necesidades específicas de las empresas.
        Su objetivo es proporcionar herramientas de desarrollo y sistemas
        informáticos que optimicen y controlen los procesos internos de las empresas.<br /><strong>CONTACTO:</strong></p>

      </div>

      <form className='main__add-form' onSubmit={handleSubmit} action='guialexander@gmail.com'>
            <h1 className='Form__title'>Contactanos</h1>
            <div className='add-form__column'>
              <label className='add-form__label'>NOMBRE: </label>
              <input
                type='text'
                name='name'
                placeholder='name'
                className='add-form_input'
                value={user.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className='add-form__column'>
              <label className='add-form__label'>APELLIDO: </label>
              <input
                type='text'
                name='latsName'
                placeholder='Apellido'
                className='add-form_input'
                value={user.latsName}
                onChange={handleChange}
                required
              />
            </div>

            <div className='add-form__column'>
              <label className='add-form__label'>Email: </label>
              <input
                type='email'
                name='email'
                placeholder='your email'
                className='add-form_input'
                value={user.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className='add-form__column'>
              <label className='add-form__label'>Teléfono: </label>
              <input
                type='tel'
                name='phone'
                placeholder='your phone'
                className='add-form_input'
                value={user.phone}
                onChange={handleChange}
                required
              />
            </div>

            <button type='submit' className='container__filteradd--button'>
              Add
            </button>
      </form>
    </>
  )
};
export default About;
