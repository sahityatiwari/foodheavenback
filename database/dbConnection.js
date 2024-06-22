const mongoose = require("mongoose");

const dbConnection = () => {
    const MONGO_URI = "mongodb+srv://sahitya7:Sahitya@2001@cluster0.xnbgpr8.mongodb.net/database1?retryWrites=true&w=majority&appName=Cluster0";

    mongoose.connect(MONGO_URI)
        .then(() => {
            console.log("Database Connected");
        })
        .catch(err => {
            console.error("Database Connection Error:", err);
        });
};

module.exports = { dbConnection };

