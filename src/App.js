import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import News from './pages/News'
import Layout from './layout/Layout'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout> <Home /> </Layout>} />
      <Route path='/about' element={<Layout> <About /> </Layout>} />
      <Route path='/news' element={<Layout> <News /> </Layout>} />
    </Routes>
  )
}

export default App