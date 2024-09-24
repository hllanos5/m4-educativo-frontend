import { Route, Routes } from 'react-router-dom';
import Login from './domain/shared/pages/Login'
import DashBoard from './domain/shared/pages/DashBoard';
import ProtectedRoute from './domain/shared/routes/ProtectedRoute';
import Examen from './domain/student/pages/Examen';
import ExamenCrear from './domain/student/pages/ExamenCrear';
import Videos from './domain/student/pages/Videos';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path='/dashboard' element={<DashBoard />} />
          <Route path='/examen' element={<Examen />} />
          <Route path='/examen-crear/:id' element={<ExamenCrear />} />
          <Route path='/videos' element={<Videos />} />
        </Route>        
      </Routes>
    </>
  )
}

export default App
