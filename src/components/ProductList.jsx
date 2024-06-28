import React from "react";
import ProductItem from "./ProductItem";
import ProductCard from "./ProductCard";

function ProductList({ products }) {
  return (
    <>
      
      <div className="grid grid-cols-4 gap-8 m-8">
        {products.map((product) => {
          return <ProductItem key={product._id} product={product} />;
        })}
      </div>
    </>
  );
}

export default ProductList;
