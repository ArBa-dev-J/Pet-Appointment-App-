import express from "express";
import { getAllPatientsApC, updatePatientApIsConfirmedC } from "../controllers/adminController.js";

const adminRoutes = express.Router();

adminRoutes.route("/").get(getAllPatientsApC);
adminRoutes.route("/patient/:id/confirm").patch(updatePatientApIsConfirmedC);
export default adminRoutes;
