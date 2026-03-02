import express from "express";
import { registerUserC,getAllUsersC, loginC, logout, protect} from "../controllers/user.js";

const userRoutes = express.Router();

userRoutes.route("/").get(getAllUsersC);
userRoutes.route("/logout").get(protect, logout);
userRoutes.route("/register").post(registerUserC);
userRoutes.route("/login").get(loginC);

export default userRoutes; 