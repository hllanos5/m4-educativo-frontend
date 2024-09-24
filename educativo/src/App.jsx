import { Route, Routes } from 'react-router-dom';
import Login from './domain/shared/pages/Login'
import DashBoard from './domain/shared/pages/DashBoard';
import ProtectedRoute from './domain/shared/routes/ProtectedRoute';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path='/dashboard' element={<DashBoard />} />
        </Route>        
      </Routes>
    </>
  )
}

export default App
