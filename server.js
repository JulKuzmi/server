const express = require("express");
const { connectTODb, getDb } = require("./db");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const {
  PORT = 3005,
  API_URL = "http://127.0.0.1",
  MONGO_URL = "mongodb://127.0.0.1:27017",
} = process.env;

const app = express();

let db;

// connectTODb((err) => {
//   if (!err) {
//     app.listen(PORT, (err) => {
//       err ? console.log(err) : console.log(`Listening port ${PORT}`);
//     });
//     db = getDb;
//   } else {
//     console.log(`DB connection error: ${err}`);
//   }
// });

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

app.listen(PORT, () => {
  console.log(`Сервер запущен по адресу ${API_URL}:${PORT}`);
});
