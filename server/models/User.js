import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    googleId : {
        type : String,
        required : true
    },
    name : String,

    email : {
        type : String,
        required : true,
    },
    picture : String
    },
    {
        timestamps : true
    }

)
const User = mongoose.model("user",userSchema)

export default User