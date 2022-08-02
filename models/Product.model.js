const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const productSchema = new Schema({
    title: String,
    weight: Number,
    desc: String,
    sku: String,
    gallery: Array,
    price: String,
})

module.exports = model('Product', productSchema)