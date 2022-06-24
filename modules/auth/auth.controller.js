const AuthService = require('./auth.service');

module.exports.register = async (req,res)=>{
    const data = req.body;
    const user = await AuthService.register(data);
    res.send(user);
}
module.exports.login = async (req,res)=>{
    const data  = req.body;
    const user = await AuthService.login(data);
    if(!user){
        res.status(404).send("User not found !");
    }
    res.send(user);
}
module.exports.list = (req,res)=>{
    res.send(AuthService.list());
}