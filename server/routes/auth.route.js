import express from "express";
import {
  signin,
  signout,
  signup,
  google,
} from "../controllers/auth.controller.js";
import { handleUserSignUpError } from "../middlewares/userError.middleware.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/google", google);
router.get("/signout", signout);
router.use(handleUserSignUpError);

export default router;
