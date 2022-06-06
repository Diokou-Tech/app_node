module.exports = function(app){
    const Ctrl = require('./clients.controller');
    app.route('/clients')
        .get(Ctrl.getAll)
        .post(Ctrl.addClient);
    app.route('/clients/:id')
        .get(Ctrl.getOne)
        .delete(Ctrl.deleteClient)
        .put(Ctrl.updateClient);
}