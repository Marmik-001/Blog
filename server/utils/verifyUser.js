import jwt from "jsonwebtoken"
import { handleError } from "./handleError.js"

export const verifyUser = (request , response , next) => {
    const token = request.cookies.access_token
    if(!token){
        return next(handleError(401 , 'Unauthorized'))
    }
    jwt.verify(token, process.env.JWT_SECRET , (error , user) => {
        if(error){
            return next(handleError(401 , 'Unauthorized'))

        }
        request.user = user
        next();
    })
}