import React, { useEffect, useState } from 'react'
import NewsCard from '../components/NewsCard'
import {getHeadlines} from "../services/newsService"


const Home = () => {
  const news = {
         source: {
         id: null,
         name: "IMDB News",
        },
        title : "The odyssey releasing this month",
        content : "Christopher nolan's the odyssey starring mat damon, tom holland , anny hathaway and robert pattinson is releasing on july 17th worldwide",
        urlToImage : "https://m.media-amazon.com/images/M/MV5BYmYyMDZhMDMtNTIxMy00NjkxLWEyYmQtYWRiNmNjOGVmMmVhXkEyXkFqcGdeQWFybm8@._V1_QL75_UY281_CR0,0,500,281_.jpg",
        
        author : "varma",
        publishedAt: "2026-07-09T08:45:00Z",
        url :"telegraphindia.com/entertainment/christopher-nolan-says-modern-english-in-the-odyssey-was-intentional-choice/cid/2169171",
        description : "the odyssey releasing on july 17th worldwide. "

    }
  const newsList = Array(6).fill(news)
  const [articles , setArticles] = useState([])

  useEffect(()=>{
    const fetchNews = async ()=>{
      const data = await getHeadlines()
      setArticles(data)
    }
    fetchNews()
  },[])
  return (
    <div className='grid gird-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto px-6 py-8 items-center justify-center'>
      
      {articles.map((news,index)=>(
        <NewsCard key={index}  news = {news} />
      ))}      
      
    </div>
  )
}

export default Home
