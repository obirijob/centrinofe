/** @format */

import './App.scss'
import { motion } from 'framer-motion'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Orders from './Pages/Orders'
import Details from './Pages/Details'
import Receipt from './Pages/Receipt'
function App() {
  return (
    <motion.div className="container">
      <h1>Pizza Billing</h1>
      <div className="content">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Orders />} />
            <Route path="/:id" element={<Details />} />
            <Route path="/receipt/:id" element={<Receipt />} />
            <Route path="*" element={<>Page Not found!</>} />
          </Routes>
        </BrowserRouter>
      </div>
      <span>Pizza Billing App</span>
    </motion.div>
  )
}

export default App
