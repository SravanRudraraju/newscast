const API_KEY = import.meta.env.VITE_NEWS_API_KEY


const setUrl =(category,search)=>{
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&q=${search}&apiKey=${API_KEY}`
    return url
} 

export const getHeadlines = async(category,search)=>{
    const response = await fetch(setUrl(category,search))
    const data = await response.json()
    return data.articles
}
