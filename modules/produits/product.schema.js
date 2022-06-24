const mongoose = require('mongoose');

const objectId = mongoose.Schema.objectId;
const productSchema = new mongoose.Schema({
    name: {type : String, required : true, trim : true, lowercase: true,
    validate(value){
        if(value.length<=2) throw new Error('name have within three letters')
    }
    },
    description: {type : String, required: false, lowercase: true} 
});
const model = mongoose.model('product',productSchema);
module.exports = model;
