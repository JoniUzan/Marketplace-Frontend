import { LogIn, Pencil, Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import Input from "./Input";
import axios from "axios";
import { productUrl } from "../Pages/ProductsPage";

function ProductDetails({ product, deleteProduct, setProduct }) {
  const [editMode, setEditMode] = useState(false);
  const [productToEdit, setProductToEdit] = useState({});

  function handleEditMode() {
    setProductToEdit({
      name: product.name,
      price: product.price,
      quantity: product.quantity,
      category: product.category,
    });
    setEditMode(!editMode);
  }

  function handleFormData(e) {
    const { name, value } = e.target;
    setProductToEdit((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(productToEdit);
  }

  async function handleUpdateClick() {
    try {
      await axios.put(`${productUrl}/update/${product._id}`, productToEdit);
      console.log("Product updated!!!");
      setProduct(productToEdit);
      setEditMode(!editMode);
    } catch (error) {
      console.error("error updating", error);
    }
  }

  return (
    <section className="w-2/4 mx-auto my-16">
      <img
        src="https://dummyimage.com/720x400"
        alt=""
        className="rounded-tl-3xl rounded-tr-3xl"
      />
      <div className="flex flex-col bg-primery-beige rounded-bl-3xl rounded-br-3xl">
        <div className="px-6 py-8 sm:p-10 sm:pb-6">
          <div className="grid items-center justify-center w-full grid-cols-1 text-left">
            <div>
              {!editMode ? (
                <>
                  <h2 className="text-lg font-medium tracking-tighter text-gray-600 lg:text-3xl">
                    {product.name}
                  </h2>
                  <p className="mt-2 text-sm text-gray-500">
                    {product.category}
                  </p>
                  <p className="mt-2 text-sm text-gray-500">
                    {product.quantity} In stock
                  </p>
                  <div className="mt-6">
                    <p>
                      <span className="text-3xl font-light tracking-tight text-black">
                        {product.price}
                      </span>
                      <span className="text-base font-medium text-gray-500">
                        {" "}
                        ${" "}
                      </span>
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <Input
                    name={"name"}
                    inputStyle={"my-5"}
                    type="text"
                    value={productToEdit.name}
                    iconStyle={"hidden"}
                    handler={handleFormData}
                  />

                  <Input
                    name={"category"}
                    inputStyle={"my-5"}
                    type="text"
                    value={productToEdit.category}
                    iconStyle={"hidden"}
                    handler={handleFormData}
                  />
                  <Input
                    name={"quantity"}
                    inputStyle={"my-5"}
                    type="text"
                    value={productToEdit.quantity}
                    iconStyle={"hidden"}
                    handler={handleFormData}
                  />
                  <Input
                    name={"price"}
                    inputStyle={"my-5"}
                    type="text"
                    value={productToEdit.price}
                    iconStyle={"hidden"}
                    handler={handleFormData}
                  />
                  <button onClick={handleUpdateClick} className="mx-auto">
                    Update
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-end px-6 pb-8 sm:px-8 gap-8">
          <button onClick={handleEditMode}>
            <Pencil strokeWidth={1} />
          </button>
          <button onClick={deleteProduct}>
            <Trash2 strokeWidth={1} color="red" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
