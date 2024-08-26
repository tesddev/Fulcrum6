import mongoose from "mongoose"
import config from "../config.js"

export default () => {
    mongoose.connect(config.connectionstring)
      .then(() => {
        console.log("Database is running");
      })
      .catch((error) => {
        console.log("Database connection failed", error);
      });
  };
 