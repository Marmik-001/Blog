import express from "express";
import { configDotenv } from "dotenv";
import mongoose from "mongoose";
configDotenv();
const MONGO_URI = process.env.MONGO_URI || "";
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("sucessfully connected to database"))
  .catch((error) => console.log(error));

const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server run on PORT ${PORT}`);
});
