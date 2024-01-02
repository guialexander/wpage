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
      <p>Whale SAS es una compañía especializada en el desarrollo y fabricación de programas y soluciones empresariales. Su principal enfoque está dirigido hacia la creación de software de gestión empresarial (ERP) adaptado a las necesidades específicas de las empresas. Su objetivo es proporcionar herramientas de desarrollo y sistemas informáticos que optimicen y controlen los procesos internos de las empresas.
        Productos y Servicios:
        Programas de Desarrollo Empresarial: Whale SAS se dedica a diseñar, desarrollar y ofrecer programas y soluciones informáticas personalizadas para empresas de diversos sectores industriales.
        Sistemas ERP Personalizados: Ofrecen sistemas de planificación de recursos empresariales (ERP) adaptados y configurados a las necesidades particulares de cada cliente. Estos sistemas ayudan a las empresas a integrar y gestionar eficientemente sus recursos, como finanzas, inventario, ventas, recursos humanos, entre otros.
        Optimización de Procesos Empresariales: Whale SAS se enfoca en mejorar la eficiencia y la productividad de las empresas a través de la implementación de soluciones tecnológicas que permiten una mejor gestión de sus operaciones.
        Valor Diferencial:
        La compañía se destaca por ofrecer soluciones informáticas altamente personalizadas y adaptadas a las necesidades específicas de cada cliente. Su enfoque se basa en comprender a fondo los procesos empresariales de sus clientes para proporcionar soluciones integrales y efectivas que impulsen el crecimiento y la eficiencia operativa.
        Objetivo:
        Whale SAS se esfuerza por ser líder en el mercado de desarrollo de software empresarial, brindando herramientas innovadoras y confiables que permitan a las empresas mejorar su desempeño, optimizar sus recursos y alcanzar sus objetivos comerciales de manera más eficiente.
          </p>

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
