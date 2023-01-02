const express = require("express"); // Express web server framework
const mongoose = require("mongoose"); // MongoDB
const bodyParser = require("body-parser"); // Parses the request body to be a readable json format
const cors = require("cors"); // Cross Origin Resource Sharing
const dotenv = require("dotenv"); // Loads environment variables from a .env file into process.env
const app = express(); // Initialize the Express application

require("dotenv").config(); // Loads environment variables from a .env file into process.env

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL; // MongoDB URL

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection; // MongoDB Connection
connection.once("open", () => {
  console.log("MongoDB Database Connection Successfull");
});


module.exports = (function () {
  let connectionInstance;
  let db;

  function getInstance() {
    return new mongoose.Promise(function (resolve, reject) {
      if (connectionInstance) {
        return resolve(connectionInstance);
      }

      const options = {
        useNewUrlParser: true
      };
      mongoose.connect(dotenv.config.db.URL, options, function (err, client) {
        if(err) {
          return reject(err);
        }

        connectionInstance = client;
        db = client.db(config.db.name);

        return resolve(connectionInstance);
      });
    });
  }

  function getDb() {
    if(!db) {
      throw new Error("DB object is not initialized!");
    }
    console.log("MongoDB Database Connection Successfull"); // Display in console if connection is successful
    return db;
  }

  return {
    getInstance,
    getDb
  };
})

 // add passengers route
 const passengersRouter = require("./routes/passengersRouter");
 app.use("/passengers", passengersRouter);

// add inspectors route
const inspectorsRouter = require("./routes/inspectorsRouter");
app.use("/inspectors", inspectorsRouter);

// add card route
const cardRouter = require("./routes/cardRouter");
app.use("/card", cardRouter);




app.listen(PORT, () => {
  console.log(`Server is running on port number : ${PORT}`); // Dipaly in console if server is running
});
