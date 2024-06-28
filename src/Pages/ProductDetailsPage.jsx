import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import ProductDetails from "../components/ProductDetails";

const baseProductURL = "http://localhost:3000/api/products";
function ProductDetailsPage() {
  const [product, setProduct] = useState({});
  

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(id);
    const dataFetching = async () => {
      try {
        const response = await axios.get(`${baseProductURL}/${id}`);

        setProduct(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    dataFetching();
  }, []);

  async function deleteProduct() {
    try {
      await axios.delete(`${baseProductURL}/${id}`);
      console.log("Product deleted");
    } catch (error) {
      console.log(error);
    }
    navigate(-1);
  }

  return (
    <div>
      <ProductDetails
        product={product}
        deleteProduct={deleteProduct}
        navigate={navigate}
        setProduct={setProduct}
      />
    </div>
  );
}

export default ProductDetailsPage;
