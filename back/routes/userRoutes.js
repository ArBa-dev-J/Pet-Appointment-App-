import express from "express";
import {
  registerUserC,
  loginC,
  logout,
  protect,
  allowAccessTo,
  restrictToOwnUser,
} from "../controllers/user.js";
import {
  postNewPatientC,
  getAllpatientsByIdC,
} from "../controllers/patients.js";
import validate from "../validator/validate.js";
import validateNewUser from "../validator/validateNewUser.js";
import validateNewLogin from "../validator/validateLogin.js";

const userRoutes = express.Router();
// user registration
// userRoutes.route("/").get(getAllUsersC);
userRoutes.route("/logout").get(protect, logout);
userRoutes.route("/register").post(validateNewUser, validate, registerUserC);
userRoutes.route("/login").get(validateNewLogin, validate, loginC);
// user patients
userRoutes
  .route("/:id/patients/new")
  .post(protect, allowAccessTo("user"), restrictToOwnUser, postNewPatientC);
userRoutes
  .route("/:id/patients")
  .get(protect, allowAccessTo("user"), restrictToOwnUser, getAllpatientsByIdC);

export default userRoutes;
 