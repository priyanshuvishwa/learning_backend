import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express() 

// CORS configuration
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}));

// Accepting data from JSON
app.use(express.json({
    limit:"16kb",
}));

// Accept URL-encoded form data 
app.use(express.urlencoded({
    limit:"16kb",
}));

// Server static files
app.use(express.static("public"))

// Parse cookie
app.use(cookieParser())

export {app}