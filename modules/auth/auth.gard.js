// permet de donner les autorisations par rapport aux requêtes 
const AuthService = require('./auth.service');
module.exports = (app)=>{
    app.use(async (req,res,next)=>{
        const authorization = req.headers.authorization || '';
        console.log(authorization);
        try {
            const tokenValidation = await AuthService.verifyToken(authorization.replace('Bearer ',''));
            req.user = tokenValidation;
            next();
        } catch (error) {
            console.log(error);          
            res.status(401).send('Session Expired ' + error)  
        }
        // les promises
        // AuthService.verifyToken(authorization.replace('Bearer ','')).
        // then((result)=>{})
        // .catch((error)=>{})
    });
}