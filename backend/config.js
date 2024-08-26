import dotenv from "dotenv"

dotenv.config()

export default {
    port: process.env.PORT || 3001,
    connectionstring: process.env.CONNENTION_STRING ,
    jwtSecret: process.env.JWT_SECRET
}