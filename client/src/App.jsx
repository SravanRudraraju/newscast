import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Bookmarks from './pages/Bookmarks'
import Navbar from './components/Navbar'
import NewsCard from './components/NewsCard'
import { addBookmark , deleteBookmark,getBookmarks } from './services/bookmarkService'


const App = () => {
  const [category,setCategory] = useState("general")
  const [search,setSearch] = useState("")
  const [searchInput,setSearchInput] = useState("")
  const [bookmarks , setBookmarks] = useState([])

  useEffect(()=>{
    const fetchBookmarks = async()=>{
      const data = await getBookmarks()
      setBookmarks(data)
    }
    fetchBookmarks()
    
  },[])

 async function addBookmarks(news,bookmarkedItem){
  if(bookmarkedItem){
    await deleteBookmark(bookmarkedItem._id)
  }
  else{
      await addBookmark(news)
  }
    
    const updatedBookmarks = await getBookmarks()
    setBookmarks(updatedBookmarks)
  }



  
  return (
    <div>
      <Navbar category={category} search={search} setSearch = {setSearch} setCategory={setCategory} searchInput={searchInput} setSearchInput = {setSearchInput} />
      
      <Routes>
        <Route path='/' element={<Home category={category} bookmarks = {bookmarks} setBookmarks={setBookmarks} search = {search} addBookmarks={addBookmarks}/>}  />
        <Route path='/login' element={<Login/>} />
        <Route path='*' element={<NotFound/>} />
        <Route path='/bookmarks' element={<Bookmarks bookmarks = {bookmarks} addBookmarks={addBookmarks} />} />
      </Routes>
    </div>
  )
}

export default App
