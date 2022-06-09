const ServiceUser = require('./../users/users.service');
const JWT = require('jsonwebtoken');
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
        console.log(user);
        // create a token
        const token = JWT.sign(user,'diokoutechkey',{expiresIn: 60*60});
        return { user,token};
        console.log('loggin');
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