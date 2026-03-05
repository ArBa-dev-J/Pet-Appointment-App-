import {
  postNewPatientM,
  getAllPatientsByUserIdM,
  deleteUsersPatientM,
  getPatientsByIdM,
  updatePatientApInfoM
} from "../modules/patients.js";
import AppError from "../utils/appError.js";
// post new patient

export const postNewPatientC = async (req, res, next) => {
  try {
    const newData = req.body;
    const { id } = req.params;
    const boolToString = newData.isConfirmed.toString();

    if (
      !newData.name ||
      !newData.date ||
      !newData.description ||
      !boolToString
    ) {
      throw new AppError("Error, not enough info", 400);
    }

    if (!newData) {
      throw new AppError("Error", 400);
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

export const getAllpatientsByUserIdC = async (req, res, next) => {
  try {
    const { userId } = req.user;
    const { sort } = req.query;
    const { name } = req.query;

    const patients = await getAllPatientsByUserIdM(userId, name, sort);

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

//delete patient from user

export const deleteUsersPatientC = async (req, res, next) => {
  try {
    const { userId } = req.user;
    // console.log(userId);
    const { id } = req.params;
    // console.log(id);
    const patients = await getAllPatientsByUserIdM(userId);

    if (patients.length === 0) {
      throw new AppError("No patients found", 404);
    }

    const patient = await getPatientsByIdM(id);

    if (patient == 0) {
      throw new AppError("The patient was not found", 404);
    }

    await deleteUsersPatientM(id, userId);

    res.status(200).json({
      statu: "success",
      message: "data was successfully deleted",
    });
  } catch (error) {
    next(error);
  }
};


// update patient apointment info

export const updatePatientApinfoC = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { userId } = req.user;

    const newPatientApData = req.body;

    if (Object.keys(newPatientApData).length === 0) {
      throw new AppError("No fields provided to update", 400);
    }

    const patientUpdated = await updatePatientApInfoM(id, newPatientApData, userId);

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