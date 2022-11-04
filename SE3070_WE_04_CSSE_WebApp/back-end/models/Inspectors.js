const mongoose = require('mongoose'); // import mongoose package

const Schema = mongoose.Schema; // create schema

const inspectorsSchema = new Schema({  //assign values to schema

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
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    }

})

const inspectors = mongoose.model("inspectors", inspectorsSchema); // passing two parameters, tablename(document) & schemaname

module.exports = inspectors; //export add blood samples