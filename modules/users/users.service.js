const users = [
    {code: 2,name : 'zola', username: 'tech',password: '1234', role:'user'},
    {code: 3,name : 'cheikh', username: 'zola',password: '1234',role:'admin'},
    {code: 3,name : 'aissatou', username: 'diokou',password: '1234',role:'admin'},
];

module.exports.insertOne = (userInput)=>{
    const user = {... userInput,role:'User',id : users.length+2};
    users.push(user);
    return user;
}

module.exports.findByUsername = (username)=>{
    
    const user = users.find((user) => user.username === username);
    console.log(user);
    return user;
    
}
module.exports.list = ()=>{
    return users;
}