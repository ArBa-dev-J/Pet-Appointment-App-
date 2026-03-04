import { sql } from "../dbConnection.js";

// post new patient apointment

export const postNewPatientM = async (newData, { id }) => {
  const data = {
    name: newData.name,
    date: newData.date,
    description: newData.description,
    isConfirmed: newData.isConfirmed,
    userId: id,
  };
  console.log(data);
  const newPatient = await sql`
    INSERT INTO patients ${sql(data, "name", "date", "description", "isConfirmed", "userId")}
    RETURNING *
  `;

  return newPatient[0];
};

// get all patient apointments by user id

export const getAllPatientsByUserIdM = async (userId, name, sort) => {
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

// get patient apointments by their ids

export const getPatientsByIdM = async (id) => {
  return sql`
  SELECT * FROM patients
  WHERE "pacientId" = ${id}
  `;
};

// delete users patient apointment

export const deleteUsersPatientM = async (id, userId) => {
  return sql`
DELETE FROM patients 
WHERE "pacientId" = ${id}
AND "userId" = ${Number(userId)}
`;
};

// update patient apointment info

export const updatePatientApInfoM = async (id, data, userId) => {
  const columns = Object.keys(data);

  const patientList = await sql`
UPDATE patients set${sql(data, columns)}
WHERE "patientId" = ${id}
AND "userId" = ${userId}
returning *
`;

  return patientList[0];
};
