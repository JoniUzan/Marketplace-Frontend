import React, { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { productUrl } from "./ProductsPage";
import axios from "axios";
import ProductList from "../components/ProductList";

function Home() {
  const [products, setProducts] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams({
    limit: 4,
  });

  const limit = searchParams.get("limit") || 4;
  setSearchParams((prev) => {
    prev.set("limit", 4);

    return prev;
  });

  useEffect(() => {
    const dataFetching = async () => {
      const options = {
        params: {
          limit: limit,
        },
      };
      try {
        const response = await axios.get(`${productUrl}/`, options);
        setProducts(response.data);
        console.log(products);
      } catch (error) {
        console.error(error);
      }
    };
    dataFetching();
  }, []);
  return (
    <div className="min-h-screen bg-primery-blue">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Marketplace</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg">
              <div className="bg-white">
                <div className="mx-auto max-w-7xl py-12 sm:px-6 lg:flex lg:items-center lg:justify-between lg:px-8">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    <span className="block">Welcome to Our Marketplace</span>
                    <span className="block text-primery-orenge">
                      Find Your Perfect Product
                    </span>
                  </h2>
                  <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                    <div className="inline-flex rounded-md shadow">
                      <Link
                        to={"/products"}
                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-primery-orenge px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
                      >
                        Shop Now
                      </Link>
                    </div>
                    <div className="ml-3 inline-flex rounded-md shadow">
                      <a
                        href="#"
                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-primery-orenge hover:bg-indigo-50"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <ProductList products={products} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
