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

// get all patients by user id

export const getAllPatientsByIdM = async (userId, name) => {
  return await sql`
SELECT * FROM patients
WHERE "userId" = ${Number(userId)}
${name ? sql`AND name ILIKE ${`%` + name + `%`}` : sql``}
`;
};
