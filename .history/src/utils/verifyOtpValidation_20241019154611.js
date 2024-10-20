import { body, validationResult } from "express-validator";

const validateVerifyOtp = [
  body("Email")
    .isEmail()
    .withMessage("Email is not valid")
    .notEmpty()
    .withMessage("Email is required"),

  body("Otp")
    .isString()
    .trim()
    .withMessage("OTP should be in String ")
    .notEmpty()
    .withMessage("Password cannot be empty")
    .isLength({ min: 8, max: 16 })
    .withMessage(
      "Passsword should contain atleast 8 and maximum 16 characters"
    ),
];

export default validateVerifyOtp;
