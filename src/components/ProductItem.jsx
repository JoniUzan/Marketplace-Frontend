import React from "react";
import { Link } from "react-router-dom";
import ProductDetailsPage from "../Pages/ProductDetailsPage";

function ProductItem({ product }) {
  return (
    <section className="">
      <img
        src="https://dummyimage.com/720x400"
        alt=""
        className="rounded-tl-3xl rounded-tr-3xl"
      />
      <div className="flex flex-col justify-between bg-primery-beige rounded-bl-3xl rounded-br-3xl">
        <div className=" sm:p-6 sm:pb-6">
          <div className="grid items-center justify-center w-full grid-cols-1 text-left">
            <div>
              <h2 className="text-lg font-medium tracking-tighter text-gray-600 lg:text-3xl">
                {product.name}
              </h2>
              <p className="mt-2 text-sm text-gray-500">{product.category}</p>
            </div>
            <div className="mt-6">
              <p>
                <span className="text-3xl font-light tracking-tight text-black">
                  {product.price}
                </span>
                <span className="text-base font-medium text-gray-500"> $ </span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex px-6 pb-8 sm:px-8">
          <Link
            to={`details/${product._id}`}
            aria-describedby="tier-company"
            class="flex items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
          >
            info
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProductItem;
