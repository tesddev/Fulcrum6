import express from "express";
import { authenticateToken, getAllUsersCount, updatePassword, updateProfile, isAdmin, deleteUser, getAllUsers, editUser, createUser } from "../controllers/userManagement.js"

const userRouter = express.Router();

userRouter.put('/update-password', authenticateToken, updatePassword);

userRouter.put('/update-profile', authenticateToken, updateProfile);

userRouter.get('/get-all-users-count', authenticateToken, getAllUsersCount);

userRouter.delete('/users/:_id', authenticateToken, isAdmin, deleteUser);

userRouter.get('/get-all-users', authenticateToken, isAdmin, getAllUsers);

userRouter.post('/create-user', authenticateToken, isAdmin, createUser);

userRouter.put('/edit-user/:_id', authenticateToken, isAdmin, editUser);

export default userRouter;