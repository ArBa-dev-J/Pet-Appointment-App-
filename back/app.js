import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
const app = express();


// create application/json parser
const jsonParser = bodyParser.json();

app.use(
  cors({
    origin: `http://localhost:5173`,
    credentials: true,
  }),
);

//middleware for parsing cookies to req.cookies
app.use(cookieParser());

app.use("/api/v1/user", jsonParser, userRoutes);
app.use("/api/v1/admin", jsonParser, adminRoutes); 
export default app;