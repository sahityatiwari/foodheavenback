const mongoose =  require("mongoose");

 const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log("Data Base Connected")
        }
        ).catch(err => {
            console.log(err)
        })
}

module.exports = { dbConnection };