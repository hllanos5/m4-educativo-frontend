import React from 'react'
import { Card } from 'primereact/card';
import Layout from '../layout/Layout'

export default function Examen() {

  const aExamen = [
    {titulo: "Elementary", subitulo: "examen 1"},
    {titulo: "A1", subitulo: "examen 2"},
    {titulo: "A2", subitulo: "examen 3"},
    {titulo: "B1", subitulo: "examen 4"},
  ]

  return (
    <Layout>
        <div className='examen'>
          { aExamen.map((examen, i)=> 
            <Card key={i} title={examen.titulo} subTitle={examen.subitulo}  className='card-examen'>
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
