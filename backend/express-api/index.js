import express from "express"
const app = express()
import StudentRoutes from "./routes/student.routes.js"
import { DataBaseConnact } from "./config/database.js"

// server connact
DataBaseConnact()

// midleware
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/api/student',StudentRoutes)

const PORT =process.env.PORT
app.listen(PORT,()=>{
    console.log(`app listing port number ${PORT}`)
})