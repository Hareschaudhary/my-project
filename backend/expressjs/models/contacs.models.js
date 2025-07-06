import mongoose from "mongoose";
import  mongoosePaginate from "mongoose-paginate-v2"

const ContactsSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: [true, 'First name is required'],
        trim: true,
        minLength: [2, 'First name must be at least 2 characters'],
        maxLength: [50, 'First name must be less than 50 characters']
    },
    last_name: {
        type: String,
        required: [true, 'Last name is required'],
        trim: true,
        minLength: [2, 'Last name must be at least 2 characters'],
        maxLength: [50, 'Last name must be less than 50 characters']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, 'Please enter a valid email address']
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required'],
        trim: true,
        minLength: [9, 'Please enter a valid phone number (min 9 )'],
        maxLength: [25, 'Please enter a valid phone number (max 15)'],
    },
    address: {
        type: String,
        trim: true,
        maxLength: [100, 'Address must be less than 100 characters']
    }
});

ContactsSchema.plugin(mongoosePaginate)

const contact = mongoose.model("Contact",ContactsSchema)

export default contact;
