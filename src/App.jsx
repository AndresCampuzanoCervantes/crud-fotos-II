import { Container } from '@mui/material';
import { useState } from 'react'
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { Create, Home } from './pages';
const App = () => {

  return (
    <Container style={{minHeight: '100vh'}} maxWidth="xl">
      <h1 className='text-center my-4'>CRUD de Fotos</h1>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace={true} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </Container>
  )
}

export default App
