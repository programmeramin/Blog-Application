import express from "express";
import cors from "cors"
import dotenv from "dotenv";
import colors from "colors";
import mongoDBConnect from "./config/MongoDB.js";
import authRoute from "./routes/authRoute.js";
import postRoute from "./routes/postRoute.js"

// dotenv config
dotenv.config();
const PORT = process.env.PORT || 6060;

// app config
const app = express();

app.use(cors());

// middleware
app.use(express.json());
app.use(express.urlencoded({extended : false}));
   
// server routes
app.use("/api/auth", authRoute);
app.use("/api/blog", postRoute);


// lisetening server
app.listen(PORT,() =>{
    console.log(`Server is running on port ${PORT}`.bgBlue.white)
    mongoDBConnect()
});         