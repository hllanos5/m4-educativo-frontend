import { Route, Routes } from 'react-router-dom';
import Login from './domain/shared/pages/Login'
import DashBoard from './domain/shared/pages/DashBoard';
import ProtectedRoute from './domain/shared/routes/ProtectedRoute';
//Componentes de alumno
import ExamenAlumno from './domain/student/pages/ExamenAlumno';
import ExamenCrearAlumno from './domain/student/pages/ExamenCrearAlumno';
import VideosAlumno from './domain/student/pages/VideosAlumno';
import ListadoCursos from './domain/student/pages/ListadoCursos';
import ListadoExamenes from './domain/student/pages/ListadoExamenes';

//Componentes de profesor
import ExamenProfesor from './domain/teacher/pages/ExamenProfesor';
import ExamenEditarProfesor from './domain/teacher/pages/ExamenEditarProfesor';
import ListadoAlumnos from './domain/teacher/pages/ListadoAlumnos';
import ExamenCrearProfesor from './domain/teacher/pages/ExamenCrearProfesor';
import ListadoExamenProfesor from './domain/teacher/pages/ListadoExamenProfesor';


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path='/dashboard' element={<DashBoard />} />
          <Route path='/examen-alumno' element={<ExamenAlumno />} />
          <Route path='/listado-cursos' element={<ListadoCursos />} />
          <Route path='/listado-examenes/:id' element={<ListadoExamenes />} />
          <Route path='/examen-crear-alumno/:id' element={<ExamenCrearAlumno />} />
          <Route path='/videos-alumno' element={<VideosAlumno />} />
          <Route path='/examen-nivel-profesor' element={<ExamenProfesor />} />
          <Route path='/listado-examen-profesor/:id' element={<ListadoExamenProfesor />} />
          <Route path='/examen-editar-profesor/:id' element={<ExamenEditarProfesor />} />
          <Route path='/alumnos-profesor' element={<ListadoAlumnos />} />
          <Route path='/examen-crear-profesor' element={<ExamenCrearProfesor />} />
        </Route>        
      </Routes>
    </>
  )
}

export default App
