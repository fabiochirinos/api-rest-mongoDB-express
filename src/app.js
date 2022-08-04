const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const userRoutes = require('./routes/user');
const productRoutes = require('./routes/product');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', productRoutes);

//Routes
app.get('/', (req, res) => {
    res.send('Welcome to my API');
});

// mongodb connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log(`Connected to MongoDB Atlas`))
    .catch((error) => console.error(error));

app.listen(port, () => console.log(`Serves listening on port ${port}`))
