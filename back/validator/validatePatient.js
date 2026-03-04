import { body } from "express-validator";

const validatePatient = [
  body().notEmpty().withMessage("Must contain data"),

  body("name")
    .isString()
    .withMessage("Name must be a string")
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage("Must be from 2 to 100 chars longs"),

  body("date")
    .isString()
    .withMessage("Name must be a string")
    .isDate()
    .withMessage("must be a date"),

  body("isConfirmed").isBoolean().withMessage("Must be a boolean"),

  body("description")
    .isString()
    .withMessage("Name must be a string")
    .trim()
    .isLength({ min: 2, max: 1000 })
    .withMessage("Must be from 2 to 100 chars longs"),
];

export default validatePatient;
