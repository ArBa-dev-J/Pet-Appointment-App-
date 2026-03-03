import { postNewPatientM } from "../modules/patients.js";
import AppError from "../utils/appError.js";
// post new patient

export const postNewPatientC = async (res, req, next) => {
  try {
    const newData = req.body;
    const { id } = req.params;

    if (!newData.name || !newData.date || !newData.description) {
      throw new AppError("Error, not enough info", 400);
    }

    if (!newData.option) {
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
