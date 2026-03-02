import express from "express";
import { registerUserC, loginC, logout, protect} from "../controllers/user.js";
import validate from "../validator/validate.js";
import validateNewUser from "../validator/validateNewUser.js";

const userRoutes = express.Router();

// userRoutes.route("/").get(getAllUsersC);
userRoutes.route("/logout").get(protect, logout);
userRoutes.route("/register").post(validateNewUser, validate, registerUserC);
userRoutes.route("/login").get(loginC);

export default userRoutes; 