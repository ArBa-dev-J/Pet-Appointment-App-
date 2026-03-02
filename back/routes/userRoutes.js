import express from "express";
import { registerUserC, loginC} from "../controllers/user.js";

const userRoutes = express.Router();
userRoutes.route("/register").post(registerUserC);
userRoutes.route("/login").get(loginC);

export default userRoutes; 