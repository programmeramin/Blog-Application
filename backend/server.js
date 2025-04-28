import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import mongoDBConnect from "./config/MongoDB.js";

// dotenv config
dotenv.config();
const PORT = process.env.PORT || 6060;

// app config
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended : false}));
   
// server routes
//app.use("/api/auth");
   
// lisetening server
app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`.bgBlue.white);
    mongoDBConnect();
}) 