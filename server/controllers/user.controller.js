import { handleError } from "../utils/handleError.js";
import { hashPassword } from "../utils/helpers.js";
import User from "../schemas/user.model.js";

export const testapi = (request, response) => {
  response.send("working").status(200);
};

export const updateUser = async (request, response, next) => {
  if (request.user.id !== request.params.userId)
    return next(handleError(401, "Not Authorized"));

  let hashedPassword;
  if (request.body.password) {
    if (request.body.password.length < 6) {
      return next(handleError(400, "Password must have atleast 6 characters "));
    }
    hashedPassword = await hashPassword(request.body.password);
  }
  console.log(request.body.username);
  

  if (request.body.username) {
    
    if (request.body.username.length < 7 || request.body.username.length > 20)
      return next(
        handleError(400, "Username must be between 7 to 20 characters")
      );
    if (request.body.username.includes(" ")) {
      return next(handleError(400, "Username cannot have spaces"));
    }
    if (request.body.username !== request.body.username.toLowerCase()) {
      return next(handleError(400, "Username must be lowercase"));
    }
    if (!request.body.username.match(/^[a-zA-Z0-9]+$/)) {
      return next(
        handleError(400, "username can only have letters and numbers")
      );
    }
  }
    try {
      
      const updatedUser = await User.findByIdAndUpdate(
        request.params.userId,
        {
          $set: {
            username: request.body.username,
            email: request.body.email,
            password: hashedPassword,
            profilePicture: request.body.profilePicture,
          },
        },
        { new: true }
      );
      
      const {password , ...rest} = updatedUser._doc 
      response.status(200).json(rest)
    } catch (error) {
      next(error);
    }
};
