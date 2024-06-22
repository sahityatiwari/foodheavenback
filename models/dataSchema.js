const mongoose = require("mongoose");
const validator = require("validator");

const dataSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        minLength: [3, "First Name Must Contain Atleast 4 Characters!"],
        maxLength: [15, "First Name Can Not Exceed 15 Characters!"],
    },
    lastname: {
        type: String,
        required: true,
        minLength: [3, "Last Name Must Contain Atleast 4 Characters!"],
        maxLength: [15, "Last Name Can Not Exceed 15 Characters!"],
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Provide A Proper Email!"]
    },
    phone: {
        type: String,
        required: true,
        minLength: [11, "Phone No Must Contain Atleast 11 Digits!"],
        maxLength: [11, "Phone No Can Not Exceed 11 Digits!"],
    },
    time: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
});

const Reservationdata = mongoose.model("Reservationdata", dataSchema);
module.exports = Reservationdata;
