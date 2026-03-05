import express from "express";
import { getAllPatientsApC } from "../controllers/adminController.js";

const adminRoutes = express.Router();

adminRoutes.route("/").get(getAllPatientsApC);

export default adminRoutes;
