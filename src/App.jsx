import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home'
import About from './Pages/About';
import Faqs from './Pages/Faqs';

const App = () => {
  return (
    <Router>
  <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/faqs" element={<Faqs />} />
    </Routes>
  </div>
  </Router>
  )
}

export default App
