import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Form from './components/Form.jsx'
import FormCadastro from './components/FormCadastro.jsx'

function App() {

  return (
    <div className="min-h-screen flex items-center justify-center bg-cyan-200">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/formCadastro" element={<FormCadastro />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
