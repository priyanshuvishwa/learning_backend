import mongoose from "mongoose";
import { Schema } from "mongoose";

const videoSchema = new Schema ({

    videoFile:{
        type:String,            // cloudinary URL
    },

    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },

    thumbnail:{
        type:String,
        trim:true
    },

    title:{
        type:String,
        required:true,
        trim:true
    },

    description:{
        type:String,
        trim:true
    },

    duration:{
        type:Number,
        required:true,
    },

    views:{
        type:Number,
        required:true,
    },

    isPublished:{
        type:Boolean,
        required:true
    },
},
{
    timestamps:true
}
)



export const Video = mongoose.model("Video",videoSchema)