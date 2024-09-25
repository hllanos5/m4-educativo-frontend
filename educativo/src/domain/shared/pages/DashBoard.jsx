import React, {useContext} from 'react'
import {AuthContext} from '../context/AuthContext'
import Layout from '../layout/Layout'

export default function DashBoard({section}) {
  const {user} = useContext(AuthContext)
  const renderSection = () => {
    switch (section) {
      case 'examenes':
          return user?.rol === 'student' ? (
              <p>Exámenes del alumno</p>
          ) : (
              <p>Exámenes del profesor</p>
          );
      case 'videos':
          return <p>Videos del alumno</p>;
      case 'alumnos':
          return <p>Lista de alumnos para el profesor</p>;
      case 'crear-examen':
          return <p>Crear nuevo examen</p>;
      default:
          return <h2>Bienvenido {user?.name}</h2>;
  }
};
  return (
    <Layout>
        <div className='dashboard'>
          
                   
           <section>
           {renderSection()}
           </section>
           
        </div>
    </Layout>
  )
}
