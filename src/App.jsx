import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DevPage from './pages/DevPage'

function App() {

  return (
    <>
     <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/dev' element={<DevPage />}></Route>
        <Route path='*' element={<HomePage />}></Route>
     </Routes>
    </>
  )
}

export default App
