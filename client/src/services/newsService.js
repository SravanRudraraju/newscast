
const BASE_URL = `${import.meta.env.VITE_API_URL}/api/news`

const setUrl =(category,search,page)=>{
    const url = `${BASE_URL}?category=${category}&search=${search}&page=${page}`
    return url
} 

export const getHeadlines = async(category,search,page)=>{
    const response = await fetch(setUrl(category,search,page))
    const data = await response.json()
    
    if(!response.ok){
        throw new Error(data.message || "Failed to fetch news")
    }
    return data
}
