import express from "express";
import { LoginUser, verifyUser } from "../controllers/userController.js";
const UserRoutes = express.Router();


UserRoutes.post('/login', LoginUser);
UserRoutes.post('/verify', verifyUser);

export default UserRoutes;
