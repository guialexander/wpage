import React from 'react'
import Nav from '../../components/nav/Nav'
import Header from '../../components/header/Header';
import Footer from '../../components/Footer/Footer';
import './home.css'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
    <div className="container-home">
    <h1> WHALE SAS</h1>
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


    <h2> Te ayudamos a Construir tu aplicación a la medida. <Link to ="/about">Contactanos </Link></h2>
    </div>
    </>
  )
}
export default Home;
