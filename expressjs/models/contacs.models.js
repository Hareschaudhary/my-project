import mongoose from "mongoose";
import  mongoosePaginate from "mongoose-paginate-v2"

const ContactsSchema = mongoose.Schema({
    first_name: {
        type: String,
         trim: true,
         minLength:2,
    },
    last_name: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    address: {
        type: String
    }
})

ContactsSchema.plugin(mongoosePaginate)

const contact = mongoose.model("Contact",ContactsSchema)

export default contact;
