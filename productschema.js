
const mongoose = require('mongoose');

const productShema = new mongoose.Schema({
    itemImage: String,
    itemName: String,
    itemPrice: String,
    realPrice: String,
    display: String,
    name: String,
    qty: Number
});

const Product = mongoose.model("product", productShema);

module.exports = Product;




