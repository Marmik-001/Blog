import express from 'express'
import {signin, signout, signup} from '../controllers/auth.controller.js'
import { handleUserSignUpError } from '../middlewares/userError.middleware.js'
const router = express.Router()

router.post('/signup' , signup)
router.post('/signin' , signin )
router.get('/signout' , signout)
router.use(handleUserSignUpError)


export default router