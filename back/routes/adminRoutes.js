import express from "express";
import { getAllPatientsApC, updatePatientApIsConfirmedC } from "../controllers/adminController.js";
import adminBool from "../validator/validateAdminBool.js";
import validate from "../validator/validate.js";

const adminRoutes = express.Router();

adminRoutes.route("/").get(getAllPatientsApC);
adminRoutes.route("/patient/:id/confirm").patch(adminBool, validate, updatePatientApIsConfirmedC);
export default adminRoutes;
