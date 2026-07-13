import bookmarks from "../models/bookmarks.js"

export const addBookmark = async(req,res)=>{
    try{
        const newbookmark = new bookmarks(req.body)  
        await bookmarks.save()
        res.status(201).json({
        success: true,
        message:"Bookmark added"
        });
    }catch(error){
        res.status(500).json({
            success:false,
            message : error.message
        })
    }
}
export const deleteBookmark = async(req,res)=>{
    try{
        await bookmarks.findByIdAndDelete(req.params.id)
        res.json({
            success : true,
            message: "Bookmark deleted"
        })
    }catch(error){
        res.status(500).json({
            success : false,
            message  : error.message
        })
    }
}
export const getBookmarks = async(req,res)=>{
    try{
        const bookmarks = await bookmarks.find()
        res.json(bookmarks)
    }catch(error){
        res.status(500).json({
            success : false,
            message:error.message
        })
    }
}