const { ErrorHandler } = require("../error/errorMiddleware.js");
const Reservationdata = require("../models/dataSchema.js"); // Correct the import

const sendReservationData = async (req, res, next) => {
    const { firstname, lastname, email, phone, date, time } = req.body;

    if (!firstname || !lastname || !email || !phone || !date || !time) {
        return next(new ErrorHandler("Please Fill Full Reservation Form", 400));
    }

    try {
        await Reservationdata.create({ firstname, lastname, email, phone, date, time });
        res.status(200).json({
            success: true,
            message: "Reservation Sent Successfully"
        });
    } catch (error) {
        if (error.name === "ValidationError") {
            const validationErrors = Object.values(error.errors).map((err) => err.message);
            return next(new ErrorHandler(validationErrors.join(", "), 400));
        }
        return next(error);
    }
};

const getReservations = async (req, res, next) => {
  try {
    const reservations = await Reservationdata.find();
    res.status(200).json(reservations);
  } catch (error) {
    next(error);
  }
};

const deleteReservation = async (req, res, next) => {
  try {
    const reservation = await Reservationdata.findByIdAndDelete(req.params.id);
    if (!reservation) {
      return next(new ErrorHandler('Reservation not found', 404));
    }
    res.status(200).json({ message: 'Reservation deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = { sendReservationData, getReservations, deleteReservation };



