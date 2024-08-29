import express from "express";
import { authenticateToken, isAdmin, deleteUser, getAllUsers, editUser, createUser } from "../controllers/admin.js"

const adminRouter = express.Router();

adminRouter.delete('/users/:_id', authenticateToken, isAdmin, deleteUser);

adminRouter.get('/get-all-users', authenticateToken, isAdmin, getAllUsers);

adminRouter.post('/create-user', authenticateToken, isAdmin, createUser);

adminRouter.put('/edit-user/:_id', authenticateToken, isAdmin, editUser);

export default adminRouter;