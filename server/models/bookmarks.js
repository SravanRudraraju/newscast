import mongoose from "mongoose"

const bookmarkSchema = new mongoose.Schema({
    title : String,
    content : String,
    url : String,
    urlToImage : String,
    publishedAt : String,
    source : Object
})
const bookmark = mongoose.model("bookmark",bookmarkSchema)

export default bookmark

