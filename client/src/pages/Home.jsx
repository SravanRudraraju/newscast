import React, { useEffect, useState } from 'react'
import NewsCard from '../components/NewsCard'
import { getHeadlines } from "../services/newsService"


const Home = ({ category, search, bookmarks, setBookmarks, addBookmarks }) => {


  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  const [loadingMore, setLoadingMore] = useState(false)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true)
        setError(null)
        setPage(1)
        const data = await getHeadlines(category, search, 1)
        setArticles(data.articles)
        setTotalResults(data.totalResults)
      } catch (error) {
        console.error(error)
        setError("Failed to load news")
        setArticles([])
      } finally {
        setLoading(false)
      }
    }
    fetchNews()
  }, [category, search])

  const loadMore = async () => {
    try {
      setLoadingMore(true)
      const nextPage = page + 1
      const data = await getHeadlines(
        category,
        search,
        nextPage
      )
      setArticles(prevArticles => [
        ...prevArticles,
        ...data.articles
      ])
      setPage(nextPage)
    } catch (error) {
      console.error(error)
    } finally {
      setLoadingMore(false)
    }
  }
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
      {!loading &&
        !error &&
        articles.length < totalResults && (
          <div className="flex justify-center py-8">

            <button
              onClick={loadMore}
              disabled={loadingMore}
              className="px-6 py-3 bg-red-700 text-white rounded-lg cursor-pointer disabled:opacity-50"
            >
              {loadingMore ? "Loading..." : "Load More"}
            </button>

          </div>
        )}
    </>
  )
}

export default Home
