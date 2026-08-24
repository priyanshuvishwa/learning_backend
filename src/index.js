import express from "express"
import connectDB from "./db/index.js"
// import dotenv from "dotenv"
import { app } from "./app.js";

console.log("Index.js is running");
console.log("PORT:", process.env.PORT);
console.log("Mongo URI exists:", !!process.env.MONGODB_URI);

// dotenv.config({
//   path: "./.env",
// });

connectDB()
  .then(() => {
    
    app.on("error", (error) => {
      console.error("Express app error:", error);
      throw error;
    });

    const PORT = process.env.PORT || 8000;

    app.listen(PORT, () => {
      console.log(`⚙️ Server is running at port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error);
  });