import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
app.use(express.json());
dotenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then((result) => {
    console.log("Connected Successfully to mongoDB");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB");
  });

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
