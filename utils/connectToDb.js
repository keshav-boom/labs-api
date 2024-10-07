import mongoose from "mongoose";

const connectDb = async () => {
    try {
        console.log( )
        await mongoose.connect('mongodb+srv://kmalik0907:L6VaAzdJnH02UbiF@cluster0.a1xb2.mongodb.net');
        console.log('MongoDB connected');
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

export default connectDb;