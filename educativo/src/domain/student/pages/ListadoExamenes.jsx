import React, { useState, useRef, useContext, useEffect  } from "react";
import { useParams } from 'react-router-dom';
import { Card } from 'primereact/card';
import Layout from '../../shared/layout/Layout';
import { useNavigate } from 'react-router-dom';
import  useExamen  from "../../shared/services/useExamen" 

export default function ListadoExamenes() {
  
    const navigate = useNavigate();
    //Cargando data para las preguntas
    const { id } = useParams();
    const { examenes, isExamenesLoading } = useExamen({ cursoId: id });

    if (isExamenesLoading) {
        return <div>Cargando ...</div>;
    }
    console.log(examenes);
  
  
    const handleResponderExamen = (courseId) => {
      navigate(`/examen-crear-alumno/${courseId}`);
    };
  
    return (
      <Layout>
        <div className='listado-examenes'>
          {examenes && examenes.length > 0 ? (
            examenes.map((exam) => (
              <Card  className="card-examenes"
                key={exam._id}
                title={exam.name} 
                style={{ width: '25rem', marginBottom: '2em' }}
                onClick={() => handleResponderExamen(exam._id)}
                footer={<span className="p-button p-button-secondary" >Responder Examen</span>}
              >
                <p className='m-0'>
                
                </p>
              </Card>
            ))
          ) : (
            <p>No hay Examenes disponibles.</p>
          )}
        </div>
      </Layout>
    );
}
