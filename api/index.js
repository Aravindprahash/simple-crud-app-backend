const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const serverless = require('serverless-http');

const productRoute = require('../routes/product.route.js');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/products', productRoute);

// ✅ Mongoose connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports.handler = serverless(app);
