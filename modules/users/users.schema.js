const Mongoose = require('mongoose');
const objectId = Mongoose.Schema.objectId;
const UserSchema = new Mongoose.Schema({
    username : String,
    name : String,
    email: String ,
    password :String,
    role : {type: String, default: 'user'}
});
// add model
Mongoose.model('User',UserSchema);

