import express from "express";
import { labTest, createLab, getAllLabs} from "../controllers/labController.js";

const LabsRouter = express.Router();

LabsRouter.post('/', labTest);
LabsRouter.post('/createLab', createLab)
LabsRouter.post('/getAllLabs', getAllLabs)

export default LabsRouter;
