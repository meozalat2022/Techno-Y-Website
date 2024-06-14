import express from "express";
import {
  addProduct,
  getAllProducts,
  getProductByCategory,
} from "../controllers/product.js";

const router = express.Router();

router.post("/create", addProduct);
router.get("/productByCategory/:catId", getProductByCategory);
router.get("/products", getAllProducts);
export default router;
