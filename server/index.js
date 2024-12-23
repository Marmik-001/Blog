import express from "express";
import { configDotenv } from "dotenv";
import mongoose from "mongoose";
import userRoutes from './routes/user.route.js'
import auth from './routes/auth.route.js'
configDotenv();
const MONGO_URI = process.env.MONGO_URI || "";
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("sucessfully connected to database"))
  .catch((error) => console.log(error));

const app = express();
app.use(express.json())
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server run on PORT ${PORT}`);
});

app.use('/api/user' ,userRoutes)
app.use('/api/auth' , auth)