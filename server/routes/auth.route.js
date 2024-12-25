import express from 'express'
import {signup} from '../controllers/auth.controller.js'
import { handleUserSignUpError } from '../middlewares/userError.middleware.js'
const router = express.Router()

router.post('/signup' , signup)
router.use(handleUserSignUpError)


export default router