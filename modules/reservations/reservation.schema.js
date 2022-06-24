const mongoose = require('mongoose');
const reservationSchema = mongoose.Schema({
    clientId : Number,
    productId: Number,
    count : Number,
    amount : Number
});
const model = mongoose.model('reservations',reservationSchema);
module.exports = model;