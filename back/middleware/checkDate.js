import AppError from "../utils/appError.js";

const checkDate = (req, res, next) => {
    const { date: updatedDate, appDate } = req.body;

    const currentDate = new Date();
    const updatedDateN = new Date(updatedDate).getTime();
    const currentDateN = currentDate.getTime();

    const appDateN = new Date(appDate).getTime();
    const oneDayBeforeApp = appDateN - 24 * 60 * 60 * 1000;

    try {
        // 1. Prevent past or current date
        if (updatedDateN <= currentDateN) {
            throw new AppError("Wrong date", 400);
        }

        // 2. Prevent updates if within 24h before appointment
        if (currentDateN >= oneDayBeforeApp) {
            throw new AppError(
                "You cannot update or choose a date 24 hours before appointment",
                400
            );
        }

        next();
    } catch (error) {
        next(error);
    }
};

export default checkDate;