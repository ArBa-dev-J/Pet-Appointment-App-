import { body } from "express-validator";

const adminBool = [
    body().notEmpty().withMessage("Must contain data"),

    body("isConfirmed")
    .isBoolean()
    .toBoolean()
    .withMessage("must be a boolean")
]

export default adminBool;