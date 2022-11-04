const mongoose = require('mongoose'); // import mongoose package

const Schema = mongoose.Schema; // create schema

const passengersSchema = new Schema({  //assign values to schema

    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    contactNumber: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    nic: {
        type: String,
        required: true,
    },
    cardType: {
        type: String,
        required: true,
    },
    passengerType: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    }

})

const passengers = mongoose.model("passengers", passengersSchema); // passing two parameters, tablename(document) & schemaname

module.exports = passengers; //export add blood samples