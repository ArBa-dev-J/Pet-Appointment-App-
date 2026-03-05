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
    .custom((value) => {
      if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(value)) {
        throw new Error('Value must be YYYY-MM-DDTHH:mm:ss.SSSZ');
      }
      return true;
    })
    .withMessage(Error.message),

  body("isConfirmed").isBoolean().toBoolean().withMessage("Must be a boolean"),

  body("description")
    .isString()
    .withMessage("Name must be a string")
    .trim()
    .isLength({ min: 2, max: 1000 })
    .withMessage("Must be from 2 to 100 chars longs"),
];

export default validatePatient;
