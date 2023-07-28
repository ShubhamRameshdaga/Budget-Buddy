//jshint esversion:9
import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoute from "./router/authRoute.js";
import tranRoute from "./router/transactionRoutes.js";
import cors from "cors";

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/auth", tranRoute);

app.get("/", (req, res) => {
  res.send("Hello World from the SHubham");
});

const PORT = process.env.port || 8080;

app.listen(PORT, () => {
  console.log(
    `Server running on ${process.env.DEV_MODE} mode on port ${PORT} `.bgCyan
      .white
  );
});
