const bcrypt = require('bcrypt');
const User = require('./users.schema');
const users = [
    {code: 2,name : 'zola', username: 'tech',password: '1234', role:'user'},
    {code: 3,name : 'cheikh', username: 'zola',password: '1234',role:'admin'},
    {code: 3,name : 'aissatou', username: 'diokou',password: '1234',role:'admin'},
];

module.exports.insertOne = async (userInput)=>{
    const user = {...userInput,role:'User',id : users.length+2};
    const result = await User.create(user);
    // console.log(result);
    // users.push(user);
    return result;
}

module.exports.findByUsername = (username)=>{
    
    const result = User.findOne({username : username});
    //const user = users.find((user) => user.username === username);
    // console.log(result);
    return result;
    
}
module.exports.list = ()=>{
    return users;
}