import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

//database conaction
export const MongoConction =()=>{
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>{console.log("data base conacted")})
}

