import colors from "colors";
const express = require("express");
const dotenv = require("dotenv");

import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use('/api/products', productRoutes)

const PORT = process.env.PORT || 5000;

app.listen(5000, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  );
});
