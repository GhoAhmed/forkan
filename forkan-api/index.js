import pool from "./config/db.js";
import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

pool
  .connect()
  .then(() => {
    console.log("Connected to the database successfully.");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err);
  });
