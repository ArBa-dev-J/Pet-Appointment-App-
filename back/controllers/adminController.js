import { getAllPatientsApM, updatePatientApIsConfirmedM } from "../modules/adminModel.js";
import AppError from "../utils/appError.js";

// ge get all patient apoitments from all users

export const getAllPatientsApC = async (req, res, next) => {
    try {
        const allPatients = await getAllPatientsApM();

        if (allPatients.length == 0) {
            throw new AppError("No patients found", 404);
        } else res.status(200).json({
            status: "success",
            data: allPatients,
        });

    } catch (error) {
        next(error);
    }
}

// admin change isConfirmed to true
export const updatePatientApIsConfirmedC = async (req, res, next) => {
    try {
        const { id } = req.params;

        const newPatientApData = req.body;

        if (Object.keys(newPatientApData).length === 0) {
            throw new AppError("No fields provided to update", 400);
        }

        if (newPatientApData.name || newPatientApData.date || newPatientApData.desciption) {
            throw new AppError("Not auhorized to update", 403);
        }

        const patientUpdated = await updatePatientApIsConfirmedM(id, newPatientApData);

        if (!patientUpdated) {
            throw new AppError("Invalid patient apointment ID", 404);
        }
        res.status(201).json({
            status: "success",
            data: patientUpdated,
        });
    } catch (error) {
        next(error);
    }

}