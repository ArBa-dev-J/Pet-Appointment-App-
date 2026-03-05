import { sql } from "../dbConnection.js";

// get all patient apoitments from all users

export const getAllPatientsApM = async () => {
    const allPatients = sql`
    SELECT patients.*, registered_user."fullName" FROM patients
    JOIN  registered_user ON  patients."userId" = registered_user."userId"
    `;

    return allPatients;
} 