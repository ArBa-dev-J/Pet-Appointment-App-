import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";

const app = express();


// create application/json parser
const jsonParser = bodyParser.json();

//middleware for parsing cookies to req.cookies
app.use(cookieParser());

app.use("/api/v1/user", jsonParser, userRoutes);

export default app;