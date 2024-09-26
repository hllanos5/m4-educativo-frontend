import React from 'react'
import { Card } from 'primereact/card';
import Layout from '../../shared/layout/Layout'
import { useNavigate } from 'react-router-dom';
import { useApi } from '../../shared/api/useApi';

function Examen() {
  const { user } = useApi();
  console.log(user)
  const navigate = useNavigate();
  const handleResponderExamen = (id) => {
    navigate("/examen-editar-profesor/" + id);
  }

  return (
    <Layout>
      <div className='examen-profesor'>
        {user.length > 0 ? (user.map((usuario, i) =>
          <Card key={i} className='card-examen' onClick={() => { handleResponderExamen(usuario._id) }}>
            <h1>{usuario.courses}</h1>
          </Card>
        )) : <p style={{display: 'grid', placeContent: 'center', placeItems: 'center', fontSize: '40px'}}>no esta inscrito a ningun curso</p>
        }
      </div>
    </Layout>
  )
}

export default Examen
