import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Bookmarks from './pages/Bookmarks'
import Navbar from './components/Navbar'
import NewsCard from './components/NewsCard'


const App = () => {
  const [category,setCategory] = useState("general")
  return (
    <div>
      <Navbar category={category} setCategory={setCategory}/>
      
      <Routes>
        <Route path='/' element={<Home category={category}/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='*' element={<NotFound/>} />
        <Route path='/bookmarks' element={<Bookmarks/>} />
      </Routes>
    </div>
  )
}

export default App
