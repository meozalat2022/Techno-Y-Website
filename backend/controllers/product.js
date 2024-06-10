import Product from "../models/product.js";

export const addProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    return res.status(201).json(product);
  } catch (error) {
    next(error);
  }
};

export const getProductByCategory = async (req, res, next) => {
  const catId = req.params.catId;

  const id = catId.slice(2);

  try {
    const productsList = await Product.find({ category: id });

    return res.status(200).json(productsList);
  } catch (error) {
    next(error);
  }
};
