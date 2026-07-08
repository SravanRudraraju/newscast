const API_KEY = import.meta.env.VITE_NEWS_API_KEY


const setUrl =(category)=>{
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`
    return url
} 

export const getHeadlines = async(category)=>{
    const response = await fetch(setUrl(category))
    const data = await response.json()
    return data.articles
}
