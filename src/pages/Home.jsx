import React, { useEffect, useState } from 'react'
import NewsCard from '../components/NewsCard'
import {getHeadlines} from "../services/newsService"


const Home = ({category}) => {
 
 
  const [articles , setArticles] = useState([])

  useEffect(()=>{
    const fetchNews = async ()=>{
      const data = await getHeadlines(category)
      setArticles(data)
    }
    fetchNews()
  },[category])
  return (
    <div className='grid gird-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto px-6 py-8 items-center justify-center'>
      
      {articles.map((news,index)=>(
        <NewsCard key={index}  news = {news} />
      ))}      
      
    </div>
  )
}

export default Home
