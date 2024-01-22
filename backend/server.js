const express = require("express");
const dotenv = require("dotenv");

import products from './data/products.js'

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = product.find((prod) => prod._id === req.params.id);
  res.json(product);
});

const PORT = process.env.PORT || 5000;

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
