import { Route, Routes } from 'react-router-dom';
import Login from './domain/shared/pages/Login'
import DashBoard from './domain/shared/pages/DashBoard';
import ProtectedRoute from './domain/shared/routes/ProtectedRoute';
//Componentes de alumno
import ExamenAlumno from './domain/student/pages/ExamenAlumno';
import ExamenCrearAlumno from './domain/student/pages/ExamenCrearAlumno';
import VideosAlumno from './domain/student/pages/VideosAlumno';
//Componentes de profesor
import ExamenProfesor from './domain/teacher/pages/ExamenProfesor';
import ExamenEditarProfesor from './domain/teacher/pages/ExamenEditarProfesor';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path='/dashboard' element={<DashBoard />} />
          <Route path='/examen-alumno' element={<ExamenAlumno />} />
          <Route path='/examen-crear-alumno/:id' element={<ExamenCrearAlumno />} />
          <Route path='/videos-alumno' element={<VideosAlumno />} />
          <Route path='/examen-profesor' element={<ExamenProfesor />} />
          <Route path='/examen-editar-profesor/:id' element={<ExamenEditarProfesor />} />
        </Route>        
      </Routes>
    </>
  )
}

export default App
