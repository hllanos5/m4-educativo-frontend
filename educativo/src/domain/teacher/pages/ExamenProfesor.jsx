import React, { useEffect, useState } from 'react'
import { Card } from 'primereact/card';
import Layout from '../../shared/layout/Layout'
import { useNavigate } from 'react-router-dom';
import {listarCourse} from '../../shared/api/courseApi'

function Examen() {
  
  const navigate = useNavigate();
  const {listado} = listarCourse();

  const handleResponderExamen = (id) => {
    navigate("/listado-examen-profesor/" + id);
  }

  return (
    <Layout>
      <div className='examen-profesor'>
        {listado?.data?.length > 0 ? (listado?.data.map((obj, i) =>
          <Card key={i} className='card-examen' onClick={() => { handleResponderExamen(obj._id) }}>
            <h1>{obj.name}</h1>
          </Card>
        )) : <p style={{display: 'grid', placeContent: 'center', placeItems: 'center', fontSize: '40px'}}>no esta inscrito a ningun curso</p>
        }
      </div>
    </Layout>
  )
}

export default Examen
