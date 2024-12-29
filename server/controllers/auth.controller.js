import User from "../schemas/user.model.js";
import { handleError } from "../utils/handleError.js";
import { comparePassword, hashPassword } from "../utils/helpers.js";
import jwt from 'jsonwebtoken'
export const signup = async (request, response, next) => {
  const { username, email, password } = request.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    next(handleError(400, "All fields are required"));
  }
  const hashed_password = await hashPassword(password);
  const newUser = new User({
    username,
    email,
    password: hashed_password,
  });
  try {
    await newUser.save();

    response.status(201).send("User signup successful");
  } catch (error) {
    // response.status(400).send(error.errmsg);
    // console.log(error);

    next(error);
  }
};

export const signin = async (request, response, next) => {
  const { email, password } = request.body;

  if (!email || !password || email == "" || password == "")
    return next(handleError(400, "All fields are required"));
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(handleError(400, "User not found"));

    const validPassword = await comparePassword(password, validUser.password);
    console.log(validPassword);
    if (!validPassword) return next(handleError(401, "Wrong Credentials"));

    const token = jwt.sign({
      id: validUser._id
    }, process.env.JWT_SECRET)

    const {password:pass , ...rest} = validUser._doc
    // console.log('sign in successful');
    response.status(200).cookie('access_token' , token ,{httpOnly:true}).json(rest)
    
  } catch (error) {
    next(error);
  }
};
