import express from "express";
import { testapi } from "../controllers/user.controller.js";
const router = express.Router();

router.get("/test", testapi);

export default router;
