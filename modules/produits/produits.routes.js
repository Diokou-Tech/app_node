module.exports = function(app){
    const Ctrl = require('./produits.controller');
// definition des routes 
    app.route('/produits')
        .post(Ctrl.saveProduct);
    app.route('/produits/:name')
        .delete(Ctrl.deleteProduct)
        .put(Ctrl.updateProduct);
}