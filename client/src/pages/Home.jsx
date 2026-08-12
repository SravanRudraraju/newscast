import React, { useEffect, useState } from 'react'
import NewsCard from '../components/NewsCard'
import {getHeadlines} from "../services/newsService"


const Home = ({category,search , bookmarks, setBookmarks,addBookmarks}) => {
 
 
  const [articles , setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(()=>{
    const fetchNews = async ()=>{
      try{
        setLoading(true)
        setError(null)
        const data = await getHeadlines(category,search)
        setArticles(data)
      }catch(error){
        console.error(error)
        setError("Failed to load news")
      }finally{
        setLoading(false)
      }
    }
    fetchNews()
  },[category,search])
  return (
     <>

        {loading && (
            <div className="text-center py-10">
                <p>Loading news...</p>
            </div>
        )}

        {error && (
            <div className="text-center py-10">
                <p className="text-red-600">{error}</p>
            </div>
        )}

        {!loading && !error && (
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto px-6 py-8 items-center justify-center'>

                {articles.map((news, index) => (
                    <NewsCard
                        key={index}
                        news={news}
                        bookmarks={bookmarks}
                        setBookmarks={setBookmarks}
                        addBookmarks={addBookmarks}
                    />
                ))}

            </div>
        )}

    </>
  )
}

export default Home
