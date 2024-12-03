import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios'; 
import { AuthContext } from '../../shared/context/AuthContext';
import Layout from '../../shared/layout/Layout';
import { Card } from 'primereact/card';

export default function VideosAlumno() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const { user } = useContext(AuthContext);
//   console.log(user)
   const getVideos = async (userId, role) => {
    try {
      const token = localStorage.getItem("authToken") || sessionStorage.getItem("authToken"); 
      const res = await axios.get('http://localhost:3000/api/videos', {
        headers: {
          Authorization: token 
        }
      });
    //   console.log(token)
      const allVideos = res.data.data;
     console.log(allVideos)
            
      if (role === 'teacher') {
        setVideos(allVideos);
      } else if (role === 'student') {
      
        const filteredVideos = allVideos.filter(video => String(video.user) === String(userId));
        setVideos(filteredVideos);
       
        
       
      }
    } catch (error) {
      setError("Error al cargar los videos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      getVideos(user._id, user.role); 
    }
  }, [user]);
  if (loading) return <div>Cargando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Layout>
      <h1>Videos Disponibles</h1>
      {videos.length === 0 ? (
        <p>No hay videos disponibles para mostrar.</p>
      ) : (
        <ul>
          {videos.map(video => (
            <li key={video._id}>
              <Card title={`Video: ${video.video}`}>
                <video controls>
                  <source src={`http://localhost:3000/uploads/${video.video}`} type="video/mp4" />
                  Tu navegador no soporta la reproducción de este video.
                </video>
              </Card>
              
            </li> 
            
          )) }
         
        </ul>
      )}
     
    </Layout>
  );
}
