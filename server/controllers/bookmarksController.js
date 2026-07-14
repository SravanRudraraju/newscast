import bookmarks from "../models/bookmarks.js"

export const addBookmark = async(req,res)=>{
    try{
        console.log(req.body);
        const newbookmark = new bookmarks(req.body)  
        await newbookmark.save()
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
        const allBookmarks = await bookmarks.find()
        
        res.json(allBookmarks)
    }catch(error){
        
        res.status(500).json({
            success : false,
            message:error.message
        })
    }
}