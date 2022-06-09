module.exports = function(app){
    const Ctrl = require('./produits.controller');
// definition des routes 
    app.route('/produits')
        .post(Ctrl.saveProduct);
    app.route('/produits/:id')
        .delete(Ctrl.deleteProduct)
        .put(Ctrl.updateProduct);
}