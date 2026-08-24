import mongoose from "mongoose"

const connectDB = async() => {                          // IIFE( immedietly invoked function expression)
    try {
        const connectionInstance = await mongoose.connect(
            process.env.MONGODB_URI
        );

        console.log(
            `MongoDB connected: ${connectionInstance.connection.host}`
        );

    } catch (error) {
        console.log("ERROR :", error );
        throw error
    }
}

export default connectDB