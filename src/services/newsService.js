const API_KEY = import.meta.env.VITE_NEWS_API_KEY
console.log(API_KEY)

const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`

export const getHeadlines = async()=>{
    const response = await fetch(url)
    const data = await response.json()
    return data.articles
}
getHeadlines()