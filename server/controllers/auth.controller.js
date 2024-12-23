
import User from '../schemas/user.model.js'
import { hashPassword } from '../utils/helpers.js'
export const signup = async (request , response) => {

    const {username , email,  password} = request.body
    
    if( !username || !email || !password || username === ''|| email ==='' || password === ''){
        response.status(400).send("All fields are required")
    }
    const hashed_password = await hashPassword(password)
    const newUser = new User({
        username,
        email,
        password:hashed_password
    });
    try {
        await newUser.save()
        
        response.status(201).send("User signup successful")
    } catch (error) {
        response.status(400).send(error.errmsg)
    }
    


}