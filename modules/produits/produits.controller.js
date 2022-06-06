const produits = [
    { id : 1,name: 'iphone 12 pro',description: 'phone use off !'},
    { id : 2,name: 'iphone 8',description: 'phone use off !'},
    { id : 3,name: 'iphone X Air ',description: 'phone use off !'},
];

module.exports.getAllProduct = (req,res)=>{
    console.log('get All products');
    res.send(produits);
}
module.exports.getOneProduct = function(){
    console.log('get one product');
}
module.exports.saveProduct = (req,res)=>{
    console.log('save products');
}
module.exports.deleteProduct = (req,res)=>{
    console.log('delete products');
}
module.exports.updateProduct = (req,res)=>{
    console.log('update products');
}
