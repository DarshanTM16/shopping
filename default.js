const product = require('./product.js');
const Product = require('./productschema.js');

const defaultData = async ()=> {
    await Product.deleteMany({});
    await Product.insertMany(product);
    console.log('data imported ');
}


module.exports = defaultData;