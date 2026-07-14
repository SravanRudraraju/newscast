import mongoose from "mongoose"

const bookmarkSchema = new mongoose.Schema({
    title : String,
    content : String,
    url : String,
    urlToImage : String,
    publishedAt : String,
    source : Object,
    author : String,
    description: String
})
const bookmarks = mongoose.model("bookmarks",bookmarkSchema)

export default bookmarks

