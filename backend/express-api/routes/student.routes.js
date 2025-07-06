import express  from "express"
const Router = express.Router()
import Student from "../models/stoodent.model.js"

// show all data
Router.get('/',async (req,res)=>{
try {
    const Studantdata = await Student.find()
    res.json(Studantdata)
} catch (error) {
    res.status(500).json({message:error.message})
}
})

// show single data
Router.get('/:id',async (req,res)=>{
    try {
       const StudentData = await Student.findById(req.params.id)
    if(!StudentData){
        res.status(404).json({message:'student not found'}) 
    }else{
    res.json(StudentData)
    } 
} catch (error) {
    res.status(500).json({message:error.message})
}
})

// add data
Router.post('/',async (req,res)=>{
try {
    const newstudent = await Student.create(req.body)
    res.status(201).json(newstudent)
} catch (error) {
    res.status(400).json({message:error.message})
}
})

// update data
Router.put('/:id',async (req,res)=>{
try {
    const UpdateStudent =await Student.findByIdAndUpdate(req.params.id, req.body,{new:true})
     if(!UpdateStudent){
         res.status(404).json({message:'student not found'})
     }else{
        res.json(UpdateStudent)
     }
} catch (error) {
    res.status(400).json({message:error.message})
}
})

// delet data
Router.delete('/:id',async (req,res)=>{
try {
    const StudentDelet =await Student.findByIdAndDelete(req.params.id)
    if (!StudentDelet) {
           res.status(404).json({message:'student not found'})
    } else {
        res.json(StudentDelet)
    }
} catch (error) {
    res.status(500).json({message:error.message})
}
})

export default Router 