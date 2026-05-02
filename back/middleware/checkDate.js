import AppError from "../utils/appError.js";

const checkDate = (req, res, next) => {
    const updatedDate = req.body.date;
    const currentDate = new Date();

    const updatedDateN = new Date(updatedDate).getTime();
    const currentDateN = currentDate.getTime();

    try {
        // checks if date is older or current
        if (updatedDateN <= currentDateN) {
            throw new AppError("Wrong date", 400);
        } 
        next();
    } catch (error) {
        next(error);
    }

}

export default checkDate;