import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './routes/root'
import Skills from './routes/skills'
import Projects from './routes/projects'
import Contact from './routes/contact'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route  path="/skills" element={<Root />} />
        <Route  path="/" element={<Skills />} />
        <Route  path="/projects" element={<Projects />} />
        <Route  path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
