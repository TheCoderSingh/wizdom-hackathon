import { connectDB } from "./db/connect.js";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/user.js";

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const port = process.env.PORT || 8080;
const clientDevUrl = process.env.CLIENT_DEV_URL || "";

// middleware
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});
app.use(
  cors({
    origin: [clientDevUrl],
    credentials: true,
  })
);

// Routes
app.use("/api/v1/user", authRoute);
app.use("/api/v1/users", userRoute);

const start = async () => {
  try {
    console.info("Server running on", process.env.NODE_ENV);
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server listening on port ${port}...`));
  } catch (err) {
    console.error(err);
  }
};

start();
