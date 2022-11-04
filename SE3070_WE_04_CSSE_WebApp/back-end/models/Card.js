const mongoose = require('mongoose'); // import mongoose package

const Schema = mongoose.Schema; // create schema

const cardSchema = new Schema({  //assign values to schema

    firstName: {
        type: String,
        required: true,
    },
    charge: {
        type: String,
        required: true,
    },
    passengerType: {
        type: String,
        required: true,
    },
    period: {
        type: String,
        required: true,
    }

})

const card = mongoose.model("card", cardSchema); // passing two parameters, tablename(document) & schemaname

module.exports = card; //export add blood samples