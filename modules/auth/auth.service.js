const ServiceUser = require('./../users/users.service');
const JWT = require('jsonwebtoken');
const KeySecret = process.env.KEY_SECRET;
module.exports.register = function({name,username, password}){
    return ServiceUser.insertOne({name,username,password});
}
module.exports.login = function({username, password}){
    let user = ServiceUser.findByUsername(username);
    if(!user || user.password !== password){
        return null;
    }else{
        user = { ...user };
        // delete password for the browser
        delete user.password;
        // create a token
        console.log(KeySecret);
        const token = JWT.sign(user,KeySecret,{expiresIn:'2h'});
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