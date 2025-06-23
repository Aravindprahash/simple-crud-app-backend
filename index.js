const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use('/api/products', productRoute); 
 

mongoose.connect("mongodb+srv://aravindprahash19072004:Aravind1719@cluster0.czgpo5y.mongodb.net/")
.then(() => {
    console.log("Connected to database!")
    app.listen(3000, () => {
    console.log('Server is running on port 3000')
});
})
.catch(() => {
    console.log("Connection failed")
});