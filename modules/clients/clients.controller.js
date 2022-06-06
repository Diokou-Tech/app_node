const clients = [
    {name:'cheikh',lastName:'diokou',date_birth: '2000',id:1},
    {name:'tech',lastName:'diokou',date_birth: '2002',id:2},
    {name:'zola',lastName:'Nekk',date_birth: '2002',id:3},
    {name:'cheikh',lastName:'diokou',date_birth: '2001',id:3}
];

module.exports.getAll = (req,res)=>{
     res.send(clients);
}
module.exports.getOne = (req,res)=>{
    let id = req.params.id;
    let client  = clients.find((cl) => cl.id == id);
    res.send(client);
}
module.exports.addClient = (req,res)=>{
    let cl = req.body;
    console.log(cl);
    console.log('add client');
}
module.exports.deleteClient = (req,res)=>{
    let id = req.params.id;
    console.log(id);
    console.log('delete client');
    res.send({ddelete : true});
}
module.exports.updateClient =(req,res)=>{
    console.log('update client !');
}
