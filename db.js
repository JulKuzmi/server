const { MongoClient } = require("mongodb");

const URL = "mongodb://localhost:27017/backend";

let dbConnection;

module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect(URL)
      .then((client) => {
        console.log("Connected to MongoDb");
        dbConnection = client.db();
        return cb();
      })
      .catch((err) => {
        return cb(err);
      });
  },
  getDb: () => dbConnection,
};
