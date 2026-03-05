import { getAllPatientsApM } from "../modules/adminModel.js";
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