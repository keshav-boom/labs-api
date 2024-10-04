import express from "express";
import { configDotenv } from "dotenv";
import LabsRouter from "./routes/labsRoute.js";
import connectDb from "./utils/connectToDb.js";
import AdminRouter from './routes/adminRoutes.js'
import cors from 'cors'

const app = express();
configDotenv();

app.use(cors())
app.use(express.json());
connectDb()

app.get("/", (req, res) => {
    res.json({
        message: "API is working",
    });
});

app.use("/api/v1/labs", LabsRouter);
app.use("/api/v1/admin", AdminRouter);


const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
