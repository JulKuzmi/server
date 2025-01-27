// const express = require("express");
// const { connectTODb, getDb } = require("./db");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// const booksRouter = require("./routes/books.js");
// dotenv.config();

// const {
//   PORT = 3005,
//   API_URL = "http://127.0.0.1",
//   MONGO_URL = "mongodb://127.0.0.1:27017",
// } = process.env;

// const app = express();

// let db;

// // connectTODb((err) => {
// //   if (!err) {
// //     app.listen(PORT, (err) => {
// //       err ? console.log(err) : console.log(`Listening port ${PORT}`);
// //     });
// //     db = getDb;
// //   } else {
// //     console.log(`DB connection error: ${err}`);
// //   }
// // });

// mongoose
//   .connect(MONGO_URL)
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.error("Failed to connect to MongoDB", err));

// app.listen(PORT, () => {
//   console.log(`Сервер запущен по адресу ${API_URL}:${PORT}`);
// });
const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const booksRouter = require("./routes/books.js");
const loggerOne = require("./middlewares/loggerOne.js");
const bodyParser = require("body-parser");

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(loggerOne);
app.use(booksRouter);
app.use(cors());

const {
  PORT = 3005,
  API_URL = "http://127.0.0.1",
  MONGO_URL = "mongodb://127.0.0.1:27017/backend",
} = process.env;

app.listen(PORT, () => {
  console.log(`Сервер запущен по адресу ${API_URL}:${PORT}`);
});

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));
