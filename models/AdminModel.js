import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
    name:{
        type: String,
    },
    email:{
        type: String,
    },
    password:{
        type: String,
    },
    profilePic:{
        type: String,
    }
},{
    timestamps: true
})

const Admin = mongoose.models?.Admin || mongoose.model('Admin', AdminSchema);
export default Admin;