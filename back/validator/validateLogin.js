import { body } from "express-validator";

const validateNewLogin = [
    body().notEmpty().withMessage("Must contain data"),

    body("emailAddress")
        .isString()
        .withMessage("Must be a string")
        .isEmail()
        .withMessage("Must be an email")
        .isLength({ min: 5, max: 30 })
        .withMessage("Email must be from 5, to 30 chars long"),

    body("password")
        .isString()
        .withMessage("Must be a string").trim()
        .isLength({ min: 2, max: 100 })
        .withMessage("Must be from 2 to 100 chars longs"),

]

export default validateNewLogin;