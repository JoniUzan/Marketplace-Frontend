import React from "react";
import { Link } from "react-router-dom";
import ProductDetailsPage from "../Pages/ProductDetailsPage";
import ProductCard from "./ProductCard";

function ProductItem({ product }) {
  return (
    <Link to={`/products/details/${product._id}`}>
      <ProductCard product={product} />
    </Link>
  );
}

export default ProductItem;
