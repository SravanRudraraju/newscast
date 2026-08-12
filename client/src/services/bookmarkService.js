const BASE_URL = "http://localhost:3000/api/bookmarks"

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
    return response.json()
}


export const getBookmarks = async ()=>{
    const token = localStorage.getItem("token")
    const response = await fetch(BASE_URL,{
        headers : {
            "Authorization" : `Bearer ${token}`
        }
    })
    return response.json()
}

export const deleteBookmark = async(id)=>{
    const token = localStorage.getItem("token")
    const response = await fetch(`${BASE_URL}/${id}`,{
            method :"DELETE",
             headers : {
            "Authorization" : `Bearer ${token}`
        }

    })
    return response.json()
}