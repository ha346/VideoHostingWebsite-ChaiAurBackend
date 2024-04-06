import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import { DB_NAME } from "./constants.js";  
import { dbConnection } from "./db/index.js";
const app = express();

dotenv.config({
    path: './env'
});

dbConnection();

// const PORT = process.env.PORT;

// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         app.on("error", (error) => {
//             console.log("Error: ", error);
//         });
//         app.listen(PORT, () => {
//             console.log(`App is listening on port ${PORT}`);
//         });
//     } catch (error) {
//         console.log("Error: ", error);
//     }
// })();