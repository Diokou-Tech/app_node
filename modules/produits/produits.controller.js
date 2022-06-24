const modelProduct = require('./product.schema');

module.exports.getAllProduct = async (req,res)=>{
    console.log('get All products');
    let all_products = await modelProduct.find({});
    res.send(all_products);
}
module.exports.getOneProduct = async function(req,res){
    console.log('get one product');
    let  product = await modelProduct.findOne({name : req.params.name})
    res.send(product);
}
module.exports.saveProduct = async (req,res)=>{
    let product = req.body;
    if(product != null){
       modelProduct.create(product);
    let all_products = await modelProduct.find({});
        res.send(all_products);
    }else{
        res.send({statut:false,message: 'impossible d\'ajouter un produit vide !'})
    }
}
module.exports.deleteProduct =async (req,res)=>{
    console.log('delete products');
    let product = await modelProduct.deleteOne({name : req.params.name});
    res.send({statut:true,message: 'suppression du produit avec succes !',data: product})
}
module.exports.updateProduct = (req,res)=>{
    console.log('update products');
}
