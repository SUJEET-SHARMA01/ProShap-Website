import express from "express";
// import products from "../data/products.js";
import asyncHandle from "../middleware/asyncHandle.js";
import Product from "../model/productModel.js";
const router = express.Router();

router.get(
  "/",
  asyncHandle(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

router.get(
  "/:id",
  asyncHandle(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      return res.json(product);
    }
    res.status(404).json({ message: "Product not found" });
  })
);

export default router;
