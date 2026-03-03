import express from "express";
import {
  registerUserC,
  loginC,
  logout,
  protect,
  getAuthenticatedUser,
  allowAccessTo,
} from "../controllers/user.js";
import { postNewPatientC } from "../controllers/patients.js";
import validate from "../validator/validate.js";
import validateNewUser from "../validator/validateNewUser.js";
import validateNewLogin from "../validator/validateLogin.js";

const userRoutes = express.Router();

// userRoutes.route("/").get(getAllUsersC);
userRoutes.route("/logout").get(protect, logout);
userRoutes.route("/register").post(validateNewUser, validate, registerUserC);
userRoutes.route("/login").get(validateNewLogin, validate, loginC);
userRoutes.route("/:id/patients").post(protect, allowAccessTo("user"), getAuthenticatedUser, postNewPatientC);

export default userRoutes;
