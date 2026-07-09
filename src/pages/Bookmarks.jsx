import React from 'react'
import NewsCard from '../components/NewsCard'


const Bookmarks = ({bookmarks , addBookmarks}) => {
  return (
    <div className='grid gird-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto px-6 py-8 items-center justify-center'>
      
      {bookmarks.map((news)=>(
        <NewsCard key={news.url}  news = {news} bookmarks={bookmarks} addBookmarks={addBookmarks}/>
      ))}      
      
    </div>
  )
}

export default Bookmarks
