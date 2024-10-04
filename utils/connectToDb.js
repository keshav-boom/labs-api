import mongoose from "mongoose";

const connectDb = async () => {
    try {
        console.log( )
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log('MongoDB connected');
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

export default connectDb;