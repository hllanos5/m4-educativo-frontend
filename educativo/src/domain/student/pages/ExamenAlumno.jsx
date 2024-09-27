import React, { useContext } from 'react';
import { Card } from 'primereact/card';
import Layout from '../../shared/layout/Layout';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../shared/context/AuthContext'; 

export default function ExamenAlumno() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext); 


  const handleResponderExamen = (courseId) => {
    navigate(`/examen-crear-alumno/${courseId}`);
  };

  return (
    <Layout>
      <div className='examen-alumno'>
        {user && user.courses?.length > 0 ? (
          user.courses.map((course) => (
            <Card 
              key={course.id}
              title={course.name} 
              style={{ width: '25rem', marginBottom: '2em' }}
              footer={<span className="p-button p-button-secondary" onClick={() => handleResponderExamen(course._id)}>Responder Examen</span>}
            >
              <p className='m-0'>
              
              </p>
            </Card>
          ))
        ) : (
          <p>No hay cursos disponibles.</p>
        )}
      </div>
    </Layout>
  );
}
