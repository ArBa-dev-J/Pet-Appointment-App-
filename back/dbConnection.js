import postgres from "postgres";
import 'dotenv/config';

export const sql = postgres({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
});

export const testConnection = async () => {
    try {
        await sql`select 1 as result`;
        console.log(`Connection to the database ${process.env.DB_NAME} was successful`);
    } catch (err) {
        console.log(`Failed to connect to the database ${process.env.DB_NAME}, ${err}`);
    }
}