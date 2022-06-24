const ServiceUser = require('./../users/users.service');
const JWT = require('jsonwebtoken');
const KeySecret = process.env.KEY_SECRET;
module.exports.register = function({name,username, password}){
    return ServiceUser.insertOne({name,username,password, email: 'test@gmail.com'});
}
module.exports.login =async function({username, password}){
    let user = await ServiceUser.findByUsername(username);
    if(!user || user.password !== password){
        return null;
    }else{
        user = { ...user.toObject() };
        // delete password for the browser
        delete user.password;
        // create a token
        console.log(KeySecret);
        const token = JWT.sign(user,KeySecret,{expiresIn:'8h'});
        return { user,token};
        // return (!user || user.password == password) ? null: user;
    }
}
module.exports.list = function(){
    return ServiceUser.list();
}

module.exports.verifyToken = (token)=>{
    return new Promise((resolve,reject)=>{
        JWT.verify(token,'diokoutechkey',null,(error,decoded)=>{
            if(error){
            reject(error);
        }else{
            resolve(decoded);
        }
    });
    })
}