import asyncHandler from "express-async-handler";

import Product from "../models/productModel.js";

/**
 * @desc		Get all products
 * @route		GET /api/products
 * @access	public
 */
const getProducts = asyncHandler(async (req, res) => {
	const products = await Product.find({});
	res.json(products);
});

/**
 * @desc		Get single product
 * @route		GET /api/products/:id
 * @access	public
 */
const getProductById = asyncHandler(async (req, res) => {
	try {
		const product = await Product.findById(req.params.id);

		if (product) {
			res.json(product);
		} else {
			res.status(404).json({ message: "Product not found" });
		}
	} catch (err) {
		console.log(err.message);
		res.json(err);
	}
});

export { getProductById, getProducts };
