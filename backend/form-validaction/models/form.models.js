import mongoose, { Types } from "mongoose";

const FormSchema = mongoose.Schema({
    name : {
        type: String,
        
    },
    email : {
        type: String,
        required: true,
        unique: true,
    },
    position : {
    type: String,
    },
    password : {
    type: String,
    },
    gender : {
    type: String,
    },
    confirm : {
    type: Boolean,
    }
})

const formdata = mongoose.model('FormData',FormSchema)

export default formdata