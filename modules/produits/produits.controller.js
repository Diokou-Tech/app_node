const produits = [
    { id : 1,name: 'iphone 12 pro',description: 'phone use off !'},
    { id : 2,name: 'iphone 8',description: 'phone use off !'},
    { id : 3,name: 'iphone X Air ',description: 'phone use off !'},
];

module.exports.produits = produits;

module.exports.getAllProduct = (req,res)=>{
    console.log('get All products');
    res.send(produits);
}
module.exports.getOneProduct = function(req,res){
    console.log('get one product');
    res.send(produits.find((pr)=> pr.id == req.params.id));
}
module.exports.saveProduct = (req,res)=>{
    let product = req.body;
    console.log(product);
    if(product != null){
        produits.push(product);
        console.log('save products');
        res.send({data: produits})
    }else{
        res.send({statut:false,message: 'impossible d\'ajouter un produit vide !'})
    }
}
module.exports.deleteProduct = (req,res)=>{
    console.log('delete products');
    let indexElement = produits.findIndex((pr)=> pr.id == req.params.id);
    produits.splice(indexElement,1);
    res.send({statut:true,message: 'suppression du produit avec succes !',data: produits})
}
module.exports.updateProduct = (req,res)=>{
    console.log('update products');
}
