import bcryptjs from 'bcryptjs'
const saltRounds = 10
export const hashPassword = async (password) => {
    try {
      const salt = await bcryptjs.genSalt(saltRounds); // Generate a salt
      const hashedPassword = await bcryptjs.hash(password, salt); // Hash the password using the generated salt
      
      return hashedPassword;
    } catch (error) {
      console.error('Error hashing password:', error);
      throw new Error('Error hashing password');
    }
};



// const hashedpassword = bcryptjs.hashSync(process.env.PASSWORD , 10)