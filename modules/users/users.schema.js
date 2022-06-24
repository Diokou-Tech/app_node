// import module mongoose
const Mongoose = require('mongoose');
// create a schema for user 
const objectId = Mongoose.Schema.objectId;
// add the fields of users 
const UserSchema = new Mongoose.Schema({
    username : String,
    name : String,
    email: String ,
    password :String,
    role : {type: String, default: 'user'}
});
// add model to database
const model = Mongoose.model('user',UserSchema);
// export 
module.exports = model;
