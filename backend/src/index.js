import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";

const port = process.env.PORT || 8080;
const clientDevUrl = process.env.CLIENT_DEV_URL || '';

// middleware
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

const start = async () => {
  try {
    console.info("Server running on", process.env.NODE_ENV);
    app.listen(port, () => console.log(`Server listening on port ${port}...`));
  } catch (err) {
    console.error(err);
  }
};

start();
