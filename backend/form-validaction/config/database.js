import mongoose from "mongoose";

export const DataBaseConact =()=>{
    mongoose.connect("mongodb://127.0.0.1:27017/form-data").then(()=>{
        console.log("data base conacted")
    })
}