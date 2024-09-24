import { Route, Routes } from 'react-router-dom';
import Login from './domain/shared/pages/Login'
import DashBoard from './domain/shared/pages/DashBoard';
import ProtectedRoute from './domain/shared/routes/ProtectedRoute';
import Examen from './domain/shared/pages/examen';
import ExamenCrear from './domain/shared/pages/ExamenCrear';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path='/dashboard' element={<DashBoard />} />
          <Route path='/examen' element={<Examen />} />
          <Route path='/examen-crear/:id' element={<ExamenCrear />} />
        </Route>        
      </Routes>
    </>
  )
}

export default App
