import React, { useContext } from 'react';
import Layout from '../../shared/layout/Layout';
import { Card } from 'primereact/card';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../shared/context/AuthContext';

export default function VideosAlumno() {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext); 

    const handleShowVideo = (videoId) => {
        navigate(`/video-crear-alumno/${videoId}`); 
    };

    return (
        <Layout>
            <div className='video-alumno'>
                {user && user.videos?.length > 0 ? (
                    user.videos.map((video, i) => (
                        <Card 
                            key={i} 
                            className='card-video' 
                            onClick={() => handleShowVideo(video.id)}
                        >
                            <h2>{video.name}  Video Prueba</h2>
                        </Card>
                    ))
                ) : (
                    <p>No hay videos disponibles.</p>
                )}
            </div>
        </Layout>
    );
}
