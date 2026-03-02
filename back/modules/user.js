import { sql } from "../dbConnection.js";

// register new user

export const registerUserM = async (newUser) => {
  const { fullName, userName, password, emailAddress } = newUser;
  const user = { fullName, userName, password, emailAddress };

  const uploadUser = await sql`
    INSERT INTO registered_user ${sql(
      user,
      "fullName",
      "userName",
      "password",
      "emailAddress",
    )}
    RETURNING *
    `;
  return uploadUser[0];
};

// get all users

// get users by id
export const getUserByIdM = async (id) => {
  const users = await sql`select * from registered_user where "userId"=${id}`;
  return users[0];
};

// get  by email

export const getUserByEmailM = async (emailAddress) => {
  const users = await sql`
    SELECT * FROM registered_user where "emailAddress" = ${emailAddress}
    `;

  return users[0];
};
