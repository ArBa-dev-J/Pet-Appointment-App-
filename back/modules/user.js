import { sql } from "../dbConnection.js";

// register new user

export const registerUserM = async (newUser) => {
    const {fullName, userName, password, emailAddress} = newUser;
    const user = {fullName, userName, password, emailAddress};

    const uploadUser  = await sql`
    INSERT INTO registered_user ${sql(
        user,
        "fullName",
        "userName",
        "password",
        "emailAddress",
    )}
    RETURNING *
    `
    return uploadUser[0];
}