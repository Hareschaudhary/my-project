import express from "express"
const app = express()
import formdata from "./models/form.models.js"
import { DataBaseConact } from "./config/database.js"
import {body,validationResult} from "express-validator"

// database conact
DataBaseConact()

// midelvare
app.set("view engine", "ejs")
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))

app.get("/",(req,res)=>{
  res.render('form',{errs:[]})
})

const validationRegistration = [
  body("confirm")
    .notEmpty().withMessage("Confirm field is required"),

  body("gender")
    .notEmpty().withMessage("Gender is required"),

  body("password")
    .isLength({ min: 3, max: 10 })
    .withMessage("Password must be between 3 and 10 characters"),

  body("position")
    .notEmpty().withMessage("Position is required"),

  body("email")
    .isEmail().withMessage("Please provide a valid email address")
    ,

  body("name")
    .notEmpty().withMessage("Name is required")
    .isLength({ min: 3 }).withMessage("Name must be at least 3 characters long")
];

app.post("/formdata",validationRegistration, async (req,res)=>{
let err =validationResult(req)
if(err.isEmpty()){
    await formdata.create({
        confirm : req.body.confirm,
        gender : req.body.gender,
        password : req.body.password,
        position : req.body.position,
        email : req.body.email,
        name : req.body.name
    })
   const allData = await formdata.find({});
    // res.json(allData);
    res.render('formdata',{allData})
}else{
    res.render('form',{errs:err.array()})
}


})

app.listen(3000,()=>{
    console.log("servire listing port number 3000")
})

