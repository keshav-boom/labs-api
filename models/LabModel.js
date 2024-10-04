import mongoose from 'mongoose';

const LabSchema = new mongoose.Schema({
    labName: {
        type: String,
    },
    pocName: {
        type: String,
    },
    pocEmail: {
        type: String,
    },
    pocPhone: {
        type: String,
    },
    address: {
        type: String,
    },
    profilePic: {
        type: String,
    }
})
const Labs = mongoose.models.Lab || mongoose.model('Lab', LabSchema);
export default Labs;