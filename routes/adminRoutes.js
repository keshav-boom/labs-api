import express from "express";
import {RegisterAdmin, LoginAdmin, verifyAdmin} from '../controllers/adminController.js';

const AdminRouter = express.Router();

AdminRouter.post('/register', RegisterAdmin);
AdminRouter.post('/login', LoginAdmin);
AdminRouter.post('/verify', verifyAdmin);

export default AdminRouter;
