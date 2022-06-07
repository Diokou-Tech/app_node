module.exports = function(app){
    const Ctrl = require('./produits.controller');
// definition des routes 
    app.route('/produits')
        .get(Ctrl.getAllProduct)
        .post(Ctrl.saveProduct);
    app.route('/produits/:id')
        .delete(Ctrl.deleteProduct)
        .get(Ctrl.getOneProduct)
        .put(Ctrl.updateProduct);
}