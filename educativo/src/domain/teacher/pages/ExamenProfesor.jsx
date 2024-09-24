import React from 'react'
import { Card } from 'primereact/card';
import Layout from '../../shared/layout/Layout'
import { useNavigate } from 'react-router-dom';

function Examen() {

  const navigate = useNavigate();

  const aExamen = [
    {id:1, titulo: "Elementary", subitulo: "examen 1"},
    {id:2, titulo: "A1", subitulo: "examen 2"},
    {id:3, titulo: "A2", subitulo: "examen 3"},
    {id:4, titulo: "B1", subitulo: "examen 4"},
  ]
  const handleResponderExamen = (id) =>{
      navigate("/examen-editar-profesor/"+id);
  }

  return (
    <Layout>
        <div className='examen-profesor'>
          { aExamen.map((examen, i)=> 
            <Card key={i} className='card-examen' onClick={()=> {handleResponderExamen(examen.id)}}>
                <h1>{examen.titulo}</h1>
            </Card>
            )
        }
        </div>
    </Layout>
  )
}

export default Examen
