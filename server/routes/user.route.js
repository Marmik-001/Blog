import express from "express";
import { testapi } from "../controllers/user.controller.js";
import { updateUser } from "../controllers/user.controller.js";
import { verifyUser } from "../utils/verifyUser.js";
import { handleUserSignUpError } from "../middlewares/userError.middleware.js"
const router = express.Router();

router.get("/test", testapi);
router.put("/update/:userId",verifyUser, updateUser)
router.use(handleUserSignUpError);
export default router;
