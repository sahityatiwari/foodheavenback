const express = require("express");
const router = express.Router();
const { sendReservationData , getReservations,  deleteReservation} = require("../controller/reservation.js");
const Reservationdata = require("../models/dataSchema.js");

// POST request to send reservation data
router.post('/send', sendReservationData);

router.get('/askdata', getReservations);

router.delete('/:id', deleteReservation);

// GET request to fetch all reservations
// router.get('/reservation', async (req, res, next) => {
//     try {
//         const reservations = await Reservationdata.find();
//         res.status(200).json(reservations);
//     } catch (error) {
//         next(error); // Pass error to error handling middleware
//     }
// });

module.exports = router;
