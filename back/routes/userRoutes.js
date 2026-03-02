import express from "express";
import { registerUserC } from "../controllers/user.js";

const userRoutes = express.Router();
userRoutes.route("/register").post(registerUserC);

export default userRoutes;