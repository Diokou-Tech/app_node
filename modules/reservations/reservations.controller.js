const { produits } = require('../produits/produits.controller');
const ReservationRepository = require('./reservation.repository');
const reservations = [
    {
        id: 1,
        clientId: 1,
        productId: 2,
        count: 2,
        amount: 100
    },
    {
        id: 2,
        clientId: 3,
        productId: 1,
        count: 1,
        amount: 50
    }
];
module.exports.findAll = function(req,res) {
    let reser =  reservations.map((reservation) => new ReservationRepository(reservation));
    res.send(reser);
}

module.exports.findOne =  function(req,res) {
    let r = reservations.find((resa) => resa.id == req.params.id);
    res.send(new ReservationRepository(r));
}

module.exports.deleteOne =  function(req,res){
    const index = reservations.findIndex((resa) => resa.id == req.params.id);
    reservations.splice(index, 1);
    res.send(true);
}

module.exports.insertOne =  (req,res) => {
    console.log({user : req.user});
    const reservation = {...req.body,clientId: req.user.id};
    reservations.push(reservation);
    res.send(reservations);
}