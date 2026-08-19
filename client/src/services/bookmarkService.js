const BASE_URL = `${import.meta.env.VITE_API_URL}/api/news`

export const addBookmark = async(bookmark)=>{
    const token = localStorage.getItem("token")
    const response = await fetch(BASE_URL,{
        method :"POST",
        headers : {
            "Content-type":"application/json",
            "Authorization" : `Bearer ${token}`
        },
        body : JSON.stringify(bookmark),
    })
    const data = await response.json()
    if(!response.ok){
        throw new Error(data.message || "Failed to fetch bookmarks")
    }
    return data
}


export const getBookmarks = async ()=>{
    const token = localStorage.getItem("token")
    const response = await fetch(BASE_URL,{
        headers : {
            "Authorization" : `Bearer ${token}`
        }
    })
    const data = await response.json()
    if(!response.ok){
        throw new Error(data.message || "Failed to fetch bookmarks")
    }
    return data
}

export const deleteBookmark = async(id)=>{
    const token = localStorage.getItem("token")
    const response = await fetch(`${BASE_URL}/${id}`,{
            method :"DELETE",
             headers : {
            "Authorization" : `Bearer ${token}`
        }

    })
    const data = await response.json()
    if(!response.ok){
        throw new Error(data.message || "Failed to fetch bookmarks")
    }
    return data
}