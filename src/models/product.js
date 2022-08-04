const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    cant: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Products', productSchema);