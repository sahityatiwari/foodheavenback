const mongoose = require("mongoose");

const dbConnection = () => {
    mongoose.connect("mongodb+srv://sahitya7:Sahitya@2001@foodheavencluster.gwdbzq8.mongodb.net/foodheavendatabase?retryWrites=true&w=majority&appName=foodheavencluster", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
    .then(() => {
        console.log("Database Connected");
    })
    .catch(err => {
        console.log("Database Connection Error:", err);
    });
}


module.exports = { dbConnection };
