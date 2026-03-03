import { postNewPatientM, getAllPatientsByIdM } from "../modules/patients.js";
import AppError from "../utils/appError.js";
// post new patient

export const postNewPatientC = async (req, res, next) => {
  try {
    const newData = req.body;
    const { id } = req.params;

    if (!newData.name || !newData.date || !newData.description) {
      throw new AppError("Error, not enough info", 400);
    }

    if (!newData) {
      throw new AppError("Error, did not vote", 400);
    }

    const post = await postNewPatientM(newData, { id });
    res.status(201).json({
      status: "success",
      data: post,
    });
  } catch (error) {
    next(error);
  }
};

// get patients by user id

export const getAllpatientsByIdC = async (req, res, next) => {
  try {
    const { userId } = req.user;
    const { sort } = req.query;
    const { name } = req.query;

    const patients = await getAllPatientsByIdM(userId, name, sort);

    if (patients.length == 0) {
      throw new AppError("No patients found", 404);
    }

    res.status(200).json({
      status: "success",
      data: patients,
    });
  } catch (error) {
    next(error);
  }
};
