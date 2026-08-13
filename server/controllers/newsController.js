

const setUrl =(category,search,page)=>{
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&q=${search}&page=${page}&apiKey=${process.env.NEWS_API_KEY}`
    return url
} 

export const getHeadlines = async(req,res)=>{
    const page = req.query.page || 1
    const response = await fetch(setUrl(req.query.category,req.query.search,page))
    const data = await response.json()

    res.json({
        articles : data.articles,
        totalResults : data.totalResults
    })
    
}