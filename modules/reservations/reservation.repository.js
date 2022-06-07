const products = require('../produits/produits.controller').produits;
module.exports = class ReservationRepository {
    id;
    clientId;
    productId;
    count;
    amount;
    product;
    constructor(data) {
        Object.assign(this, data);
        this.product = products.find((p) => p.id == this.productId);
    }
}