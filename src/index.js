import express from "express"
import connectDB from "./db/index.js"
import { app } from "./app.js";


connectDB()
  .then(() => {
    
    app.on("error", (error) => {
      console.error("Express app error:", error);
      throw error;
    });

    const PORT = process.env.PORT || 8000;

    app.listen(PORT, () => {
      console.log(`Server is running at port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error);
  });