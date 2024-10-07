import express from "express";
import { labTest, createLab, getAllLabs, getUserLab, updateLab} from "../controllers/labController.js";

const LabsRouter = express.Router();

LabsRouter.post('/', labTest);
LabsRouter.post('/createLab', createLab)
LabsRouter.post('/getAllLabs', getAllLabs)
LabsRouter.post('/getUserLabs', getUserLab)
LabsRouter.post('/updateLab', updateLab)

export default LabsRouter;
