require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const app =  express();
const PORT = process.env.PORT || 5000;

const productRoute = require('./routes/productRoute');

app.use('/api/products', productRoute);

//middleware
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Database connected');
})
.catch(err => {
    console.log(err);
});

// basic route
app.get('/', (req, res)=> {
    res.json({
        message: 'Pricelist API'
    });
});



// start server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});


module.exports = app;