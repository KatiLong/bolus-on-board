"use strict";

const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

const bolusSchema = new mongoose.Schema({
    insulinType: {
        type: String,
        required: false
    },
    bloodGlucose: {
        type: Number,
        required: false
    },
    insulinUnits: {
        type: Number,
        required: false
    },
    inputCarbs: {
        type: Number,
        required: false
    },
    inputDate: {
        type: Date,
        required: false
    },
    inputTime: {
        type: String,
        required: false
    },
    bolusAmount: {
        type: Number,
        required: false
    }
});

const Bolus = mongoose.model('Bolus', bolusSchema);

module.exports = Bolus;
