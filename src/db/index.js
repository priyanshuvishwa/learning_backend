import mongoose from "mongoose"
import express from "express"


const app = express()

( async() => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}`)
        app.on("error:" ,(error) => {
            console.log("App does not setup" , error)
            throw error
        })

        app.listen(process.env.PORT , () => {
            console.log(`App is listening on PORT ${PORT}`)
        })

    } catch (error) {
        console.log("ERROR :", error );
        throw error
    }
})()