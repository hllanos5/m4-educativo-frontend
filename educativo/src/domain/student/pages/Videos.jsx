import React from 'react'
import Layout from '../../shared/layout/Layout'
import { Card } from 'primereact/card';

export default function Videos() {

    const aVideo = [
        {id:1, titulo: "Video 1", subitulo: "video 1"},
        {id:2, titulo: "Video 2", subitulo: "video 2"},
        {id:3, titulo: "Video 3", subitulo: "video 3"},
        {id:4, titulo: "Video 4", subitulo: "video 4"},
    ]

    return (
        <Layout>
            <div className='video'>
            { aVideo.map((video, i)=> 
                <Card key={i} className='card-video' onClick={()=> {handleResponderExamen(video.id)}}>
                    <h1>{video.titulo}</h1>
                </Card>
                )
            }
            </div>
        </Layout>
    )
}
