import express from "express"
import config from "./config.js";
import dbConnection from "./db/dbConnection.js";
import authRouter from "./routes/auth.js";
import userRouter from "./routes/userManagement.js";
import cors from "cors"

const app = express();

app.use(express.json());
app.use(cors())

//Routes
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);

dbConnection()
app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`)
})