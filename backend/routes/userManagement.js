import express from "express";
import { authenticateToken, updatePassword, updateProfile } from "../controllers/userManagement.js"

const userRouter = express.Router();

userRouter.put('/update-password', authenticateToken, updatePassword);

userRouter.put('/update-profile', authenticateToken, updateProfile);

export default userRouter;