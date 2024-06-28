import React, { useState } from "react";
import CreateProduct from "../components/CreateProduct";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";
import { productUrl } from "./ProductsPage";

// async function CreateProduct() {

// }

function CreateProductPage() {
  const [formData, setFormData] = useState({});

  const navigate = useNavigate();

  function handleFormData(e) {
    setFormData((prev) => {
      prev[e.target.name] = e.target.value;

      return prev;
    });
    console.log(formData);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post(`${productUrl}/create`, formData);
      console.log("Product added successfully!!!");
      navigate("/products");
    } catch (error) {
      console.error("Unsuccessful to post product", error);
    }
  }

  return (
    <div className="bg-primery-blue h-full">
      <CreateProduct
        handleFormData={handleFormData}
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default CreateProductPage;
