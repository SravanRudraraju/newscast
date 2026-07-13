const BASE_URL = "http://localhost:3000/api/bookmarks"

export const addBookmark = async(bookmark)=>{
    const response = await fetch(BASE_URL,{
        method :"POST",
        headers : {
            "Content-type":"application/json",
        },
        body : JSON.stringify(bookmark),
    })
    return response.json
}


export const getBookmarks = async ()=>{
    const response = await fetch(BASE_URL)
    return response.json()
}

export const deleteBookmark = async(id)=>{
    const response = await fetch(`${BASE_URL}/${id}`,{
            method :"DELETE"
    })
    return response.json()
}