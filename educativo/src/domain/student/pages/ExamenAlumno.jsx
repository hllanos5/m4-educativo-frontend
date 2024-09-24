import React from 'react'
import { Card } from 'primereact/card';
import Layout from '../../shared/layout/Layout'
import { useNavigate } from 'react-router-dom';

export default function ExamenAlumno() {

  const navigate = useNavigate();

  const aExamen = [
    {id:1, titulo: "Elementary", subitulo: "examen 1"},
    {id:2, titulo: "A1", subitulo: "examen 2"},
    {id:3, titulo: "A2", subitulo: "examen 3"},
    {id:4, titulo: "B1", subitulo: "examen 4"},
  ]
  const handleResponderExamen = (id) =>{
      navigate("/examen-crear-alumno/"+id);
  }

  return (
    <Layout>
        <div className='examen-alumno'>
          { aExamen.map((examen, i)=> 
            <Card key={i} title={examen.titulo} subTitle={examen.subitulo}  className='card-examen' onClick={()=> {handleResponderExamen(examen.id)}}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
                    numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                </p>
            </Card>
            )
        }
        </div>
    </Layout>
  )
}
