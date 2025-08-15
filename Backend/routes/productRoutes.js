import express from "express";
// import products from "../data/products.js";
import productController from "../controller/productController.js"
const router = express.Router();

router.route('/').get(productController.getProducts)
router.route('/:id').get(productController.getProductbyID)



export default router;
