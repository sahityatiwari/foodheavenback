const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { dbConnection } = require("./database/dbConnection.js");
const { errorMiddleware } = require("./error/errorMiddleware.js");
const router = require("./routes/route.js");


const app = express();
dotenv.config({ path: './config/config.env' });

app.use(cors({
    origin: [process.env.FRONTEND_URL, "http://localhost:5173"],
    methods: ["POST", "GET", "DELETE"],
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("Welcome to the API");
});

app.use('/api/v1/reservation', router);


// Handle CORS preflight
app.options('*', cors());

dbConnection();

app.use(errorMiddleware);

module.exports = app;
