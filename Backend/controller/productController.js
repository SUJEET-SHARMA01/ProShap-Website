import asyncHandle from "../middleware/asyncHandle.js";
import Product from "../model/productModel.js";

const getProducts=asyncHandle(async(req,res)=>{
     const products = await Product.find({});
    res.json(products);
});

const getProductbyID=asyncHandle(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      return res.json(product);
    }
    res.status(404).json({ message: "Product not found" });
});

export default {getProducts,getProductbyID};
