import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from './components/common/Navbar/Navbar'
import AdvancedLoader from './components/common/Loader/AdvancedLoader'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true);

  // Remove fallback timer logic

  console.log('Current loading state:', loading);

  return (
    <Router>
      <div className="App">
        {loading && (
          <AdvancedLoader onComplete={() => setLoading(false)} />
        )}
        
        {!loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </motion.div>
        )}
      </div>
    </Router>
  )
}

export default App
