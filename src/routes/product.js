const express = require('express');
const productSchema = require('../models/product');

const router = express.Router();

// Create a product
router.post('/products', (req, res) => {
    const product = productSchema(req.body);
    product
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Get all products
router.get('/products', (req, res) => {
    productSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Get a product
router.get('/products/:id', (req, res) => {
    const { id } = req.params;
    productSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Update a product
router.put('/products/:id', (req, res) => {
    const { id } = req.params;
    const { name, about, cant } = req.body;
    productSchema
        .updateOne({ _id: id }, { $set: { name, about, cant } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Delete a product
router.delete('/products/:id', (req, res) => {
    const { id } = req.params;
    productSchema
        .remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});



module.exports = router;