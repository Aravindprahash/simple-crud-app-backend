const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const productRoute = require('../routes/product.route.js');

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/products', productRoute);

// Connect DB (run only once when Vercel spins up function)
mongoose.connect("mongodb+srv://aravindprahash19072004:Aravind1719@cluster0.czgpo5y.mongodb.net/")
  .then(() => console.log("Connected to DB"))
  .catch(() => console.log("DB Connection Failed"));

// ✅ Instead of app.listen, export handler
const serverless = require('serverless-http');
module.exports.handler = serverless(app);
