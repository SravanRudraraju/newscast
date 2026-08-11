import bookmarks from "../models/bookmarks.js"

export const addBookmark = async(req,res)=>{
    try{
        console.log(req.body);
        const newbookmark = new bookmarks({
            ...req.body,
            userId : req.userId
        }) 
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
        await bookmarks.findByIdAndDelete({
            _id : req.params.id,
            userId  : req.userId
        })
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
        const allBookmarks = await bookmarks.find({userId : req.userId})
        
        res.json(allBookmarks)
    }catch(error){
        
        res.status(500).json({
            success : false,
            message:error.message
        })
    }
}