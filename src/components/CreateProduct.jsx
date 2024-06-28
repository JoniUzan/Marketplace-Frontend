import React from "react";
import Input from "./Input";
import { Plus } from "lucide-react";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import Button from "@mui/material/Button";

function CreateProduct({ formData, handleFormData, handleSubmit }) {
  return (
    <div className="p-10">
      <div className="mx-auto p-5 flex flex-col gap-5 bg-white shadow-lg w-1/2 rounded-md justify-center items-center ">
        <section className="flex border-sky-600 border-solid border bg-white bg-opacity-10 justify-around items-center p-5 mx-auto gap-8 rounded-md w-full">
          <div className="border-1 border border-sky-600 rounded-md p-14 shadow-lg hover:cursor-pointer hover:bg-gray-500 hover:bg-opacity-15 hover:scale-110 ">
            <AddPhotoAlternateIcon color="disabled" />
          </div>
          <div className="border-1 border border-sky-600 rounded-md p-14 shadow-lg hover:cursor-pointer hover:bg-gray-500 hover:bg-opacity-15 hover:scale-110">
            <AddPhotoAlternateIcon color="disabled" />
          </div>
          <div className="border-1 border border-sky-600 rounded-md p-14 shadow-lg hover:cursor-pointer hover:bg-gray-500 hover:bg-opacity-15 hover:scale-110 ">
            <AddPhotoAlternateIcon color="disabled" />
          </div>
        </section>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col z  w-full"
        >
          <div className=" border-sky-600 border-solid border p-5 flex flex-col gap-5 rounded-md ">
            <Input
              name={"name"}
              type={"text"}
              placeholder={"Title"}
              iconStyle={"hidden"}
              handler={handleFormData}
            />
            <Input
              name={"price"}
              type={"number"}
              placeholder={"Price"}
              iconStyle={"hidden"}
              handler={handleFormData}
            />
            <Input
              name={"quantity"}
              type={"number"}
              placeholder={"Quantity"}
              iconStyle={"hidden"}
              handler={handleFormData}
            />
            <Input
              name={"category"}
              type={"text"}
              placeholder={"Category"}
              iconStyle={"hidden"}
              handler={handleFormData}
            />
          </div>
          <button className="mt-6">
            <Button variant="contained" color="success">
              <p>Post Product</p>
            </Button>
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateProduct;
