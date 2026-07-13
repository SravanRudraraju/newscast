

const setUrl =(category,search)=>{
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&q=${search}&apiKey=${process.env.NEWS_API_KEY}`
    return url
} 

export const getHeadlines = async(req,res)=>{
    const response = await fetch(setUrl(req.query.category,req.query.search))
    const data = await response.json()

    res.json(data.articles)
    
}