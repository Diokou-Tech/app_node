const ReservationRepository = require('./reservation.repository');
const reservationModel = require('./reservation.schema');
module.exports.findAll = async function(req,res) {
    // let reser =  reservations.map((reservation) => new ReservationRepository(reservation));
    let reser = await reservationModel.find({});
    res.send(reser);
}

module.exports.findOne =  async function(req,res) {
    let reserv = await reservationModel.findOne({_id: req.params.id});
    res.send(reserv);
}

module.exports.deleteOne =  function(req,res){
    const index = reservations.findIndex((resa) => resa.id == req.params.id);
    reservations.splice(index, 1);
    res.send(true);
}

module.exports.insertOne = async (req,res) => {
    console.log({user : req.user});
    const reservation = {...req.body,clientId: req.user.id};
    reservationModel.create(reservation);
    let reservations = await reservationModel.find({});
    res.send(reservations);
}