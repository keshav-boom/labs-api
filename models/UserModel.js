import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
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
    },
    lab:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Labs'
    },
    role:{
        type: String,
        default: 'user'
    }
}, {
    timestamps: true
})

const User = mongoose.models.User || mongoose.model('User', userSchema)
export default User;