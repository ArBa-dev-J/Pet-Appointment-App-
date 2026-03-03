import { sql } from "../dbConnection.js";

// post new patient

export const postNewPatientM = async (newData, { id }) => {
  const data = {
    name: newData.name,
    date: newData.date,
    description: newData.description,
    userId: id,
  };
  console.log(data);
  const newPatient = await sql`
    INSERT INTO patients ${sql(data, "name", "date", "description", "userId")}
    RETURNING *
  `;

  return newPatient[0];
};
