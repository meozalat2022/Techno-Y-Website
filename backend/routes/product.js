import express from "express";
import { addProduct, getProductByCategory } from "../controllers/product.js";

const router = express.Router();

router.post("/create", addProduct);
router.get("/productByCategory/:catId", getProductByCategory);

export default router;
