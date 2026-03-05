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
  getAllpatientsByUserIdC,
  deleteUsersPatientC,
  updatePatientApinfoC
} from "../controllers/patients.js";
import validate from "../validator/validate.js";
import validateNewUser from "../validator/validateNewUser.js";
import validateNewLogin from "../validator/validateLogin.js";
import validatePatient from "../validator/validatePatient.js";

const userRoutes = express.Router();
// user registration
// userRoutes.route("/").get(getAllUsersC);
userRoutes.route("/logout").get(protect, logout);
userRoutes.route("/register").post(validateNewUser, validate, registerUserC);
userRoutes.route("/login").get(validateNewLogin, validate, loginC);
// user patients
// add new patient
userRoutes
  .route("/:id/patients/new")
  .post(
    protect,
    allowAccessTo("user"),
    restrictToOwnUser,
    validatePatient,
    validate,
    postNewPatientC,
  );
// get user patients
userRoutes
  .route("/:id/patients")
  .get(
    protect,
    allowAccessTo("user"),
    restrictToOwnUser,
    getAllpatientsByUserIdC,
  );
// delete user patient
userRoutes
  .route("/:id/patients/delete")
  .delete(
    protect,
    allowAccessTo("user"),
    deleteUsersPatientC,
  );
// update patient apointment info
userRoutes
  .route("/:id/patients/update")
  .patch(
    protect,
    allowAccessTo("user"),
    updatePatientApinfoC
  )

export default userRoutes;
