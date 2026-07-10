


const setUrl =(category,search)=>{
    const url = `http://localhost:3000/api/news?category=${category}&search=${search}`
    return url
} 

export const getHeadlines = async(category,search)=>{
    const response = await fetch(setUrl(category,search))
    const data = await response.json()
    return data
}
