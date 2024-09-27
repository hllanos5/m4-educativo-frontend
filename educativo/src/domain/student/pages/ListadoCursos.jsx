import React, { useContext } from 'react';
import { Card } from 'primereact/card';
import Layout from '../../shared/layout/Layout';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../shared/context/AuthContext'; 

export default function ListadoCursos() {
  
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    console.log(user);
  
  
    const handleResponderExamen = (courseId) => {
      navigate(`/listado-examenes/${courseId}`);
    };
  
    return (
      <Layout>
        <div className='listado-cursos'>
          {user && user.courses?.length > 0 ? (
            user.courses.map((course) => (
              <Card  className='card-cursos'
                key={course._id}
                title={course.name} 
                style={{ width: '25rem', marginBottom: '2em' }}
                onClick={() => handleResponderExamen(course._id)}
                footer={<span className="p-button p-button-secondary" >Ver Curso</span>}
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
