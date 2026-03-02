import { body } from "express-validator";

const validateNewUser = [
    body().notEmpty().withMessage("Must contain data"),

    // data validation

    body("fullName")
        .isString()
        .withMessage("Name must be a string")
        .trim()
        .isLength({ min: 2, max: 100 })
        .withMessage("Must be from 2 to 100 chars longs")
        // check for two words
        .trim()
        .custom((value) => {
            const words = value.split(/\s+/);
            if (words.length !== 2 || words.length === 3) {
                throw new Error("Must contain your name and surname");
            }
            return true;
        }),

    body("userName")
        .isString()
        .withMessage("Name must be a string")
        .trim()
        .isLength({ min: 2, max: 100 })
        .withMessage("Must be from 2 to 100 chars longs"),

    body("password")
        .isString()
        .withMessage("Must be a string").trim()
        .isLength({ min: 2, max: 100 })
        .withMessage("Must be from 2 to 100 chars longs"),

    body("emailAddress")
        .isString()
        .withMessage("Must be a string")
        .isEmail()
        .withMessage("Must be an email")
        .isLength({ min: 5, max: 30 })
        .withMessage("Email must be from 5, to 30 chars long")

];

export default validateNewUser;