import { sql } from "../dbConnection.js";

// post new patient

export const postNewPatientM = async (newData, { id }) => {
  const { name, date, description} = newData;

  data = { name, date, description, userId: id };

  const newPatient = await sql`
    INSERT INTO patients  ${sql(data, "name", "date", "description", "userId")}
    RETURNING *
    `;

  return newPatient[0];
};
