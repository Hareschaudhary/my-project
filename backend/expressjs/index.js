import express from 'express';
const app = express()
import ContactRoutes from "./routes/contact.routes.js";
import {MongoConction} from "./config/database.js"

const PORT = process.env.PORT

//database conction
MongoConction()

//middleware
app.set("view engine", "ejs")
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))

//routes
app.use(ContactRoutes)



app.listen(PORT,()=>{
    console.log(`server listing port no ${PORT}`)
})