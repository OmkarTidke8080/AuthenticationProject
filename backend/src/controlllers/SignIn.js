import User from "../models/UserModel.js";
import bcrypt from "bcrypt";
import { generateAccessToken } from "../middleware/auth.js";
import { validationResult } from "express-validator";


// User Sign in
export const SignIn = async (req, res) => {

  // checks validation of provided credentials
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
     return res.status(400).json({ errors: errors.array() });
   }

  try {

    // find the user in db using email
    const user = await User.findOne({
      Email: req.body.Email,
    });

    if (!user) {
      return res.status(404).json({
        msg: "Email not found",
      });
    } else {


      // matches the provided and stored password
      const isMatch = await bcrypt.compare(req.body.Password, user.Password);

      if (isMatch) {

        // calls the middleware to get generated tokens
        const tokens = await generateAccessToken(req.body.Email);
        const accessToken = tokens.accessToken;
        const refreshToken = tokens.refreshToken;

        // sets the access token in cookies
        res.cookie("accessToken", accessToken, {
          httpOnly: true,
          maxAge: 60 * 60 * 1000, // 1 hour
          secure: true,
          sameSite: "None",
        });

        // sets the refresh token in cookies
        res.cookie("refreshToken", refreshToken, {
          httpOnly: true,
          maxAge: 24 * 60 * 60 * 1000, // 1 day
          secure: true,
          sameSite: "None",
        });

        // return success response
        return res.status(200).json({
          msg: "Sign in successful",
          role: user.role,
        });
      } else {
        // return error response
        return res.status(400).json({
          msg: "Invalid credentials",
        });
      }
    }
  } catch (error) {
    return res.status(500).json({
      msg: "Server error",
      error: error.message,
    });
  }
};

export default SignIn;