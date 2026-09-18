import { Timestamp } from "mongodb";
import { Schema } from "mongoose";
import mongoose from "mongoose";

const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        index:true
    },

    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        index:true
    },

    password:{
        type:String,
        required:true,
    },

    fullname:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        index:true
    },

    avatar:{
        type:String,            // cloudinary URL
        default:"",
    },

    coverImage:{
        type:String,            // cloudinary URL
        default:""
    },

    watchHistory:[
        {
            type: Schema.Types.ObjectId,
            ref:"Video"
        }
    ],

    refreshToken:{
        type:String
    }
},
{
    timestamps:true
}
)

export const User = mongoose.model("User",userSchema)