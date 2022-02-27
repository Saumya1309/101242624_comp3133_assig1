const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    listing_id: {
        type: String,
        required: true
    },
    booking_id: {
        type: String,
        required: true
    },
    booking_date: {
        type: String,
        required: true
    },
    booking_start: {
        type: String,
        required: true
    },
    booking_end: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    creator: {
        type: String,
        required: true
    },
    creatorRole: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('modelBooking', bookingSchema);