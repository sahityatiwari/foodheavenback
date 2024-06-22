const mongoose = require("mongoose");

const dbConnection = () => {
    const MONGO_URI = "mongodb+srv://sahitya7:Sahitya@2001@foodheavencluster.gwdbzq8.mongodb.net/foodheavendatabase?retryWrites=true&w=majority";

    mongoose.connect(MONGO_URI)
        .then(() => {
            console.log("Database Connected");
        })
        .catch(err => {
            console.error("Database Connection Error:", err);
        });
};

module.exports = { dbConnection };

