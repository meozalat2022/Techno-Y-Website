"use client";
import React, { useEffect, useState } from "react";

const ProductDetails = ({ params }) => {
  const productId = params.productId;
  const [product, setProduct] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);

    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/backend/product/productById/:${productId}`
        );

        const data = await response.json();

        if (data.success === false) {
          setLoading(false);
          setError(data.message);
        }

        setProduct(data);
        setError(false);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  console.log(product);
  return (
    <div>
      <p>{product?.title}</p>
    </div>
  );
};

export default ProductDetails;
