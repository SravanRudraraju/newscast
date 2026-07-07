import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Bookmarks from './pages/Bookmarks'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='*' element={<NotFound/>} />
        <Route path='/bookmarks' element={<Bookmarks/>} />
      </Routes>
    </div>
  )
}

export default App
