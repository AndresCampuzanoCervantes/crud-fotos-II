import { Container } from '@mui/material';
import { Routes, Route, Navigate } from "react-router-dom";
import { Create, Home } from './pages';
const App = () => {

  return (
    <div className="container-custom">
      <div className='text-center my-4 fs-1 fw-bolder' style={{paddingRight: "100px"}}>
        CRUD de Fotos
      </div>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace={true} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  )
}

export default App
