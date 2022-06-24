module.exports = function(app){
    const Ctrl = require('./produits.controller');
// definition des routes 
    app.route('/produits')
        .get(Ctrl.getAllProduct)
    app.route('/produits/:name')
        .get(Ctrl.getOneProduct)
}