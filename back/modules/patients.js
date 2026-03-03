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

export const getAllPatientsByIdM = async (userId, name, sort) => {
  const sortMap = {
    DESC: sql`name DESC`,
    ASC: sql`name ASC`,
    DATEDESC: sql`date ASC`,
    DATEASC: sql`date DESC`,
  };

  const orderBy = sortMap[sort] || sql``;

  const patientsList = sql`
SELECT * FROM patients
WHERE "userId" = ${Number(userId)}
${name ? sql`AND name ILIKE ${`%` + name + `%`}` : sql``}
${sort ? sql`ORDER BY ${orderBy}` : sql``}
`;

  return patientsList;
};
