import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import { useLocation, useSearchParams } from "react-router-dom";

import SearchBar from "../components/SearchBar";
import { ArrowLeft, ArrowRight, Maximize } from "lucide-react";
import PagesButton from "../components/PagesButton";
import PriceRangeSlider from "../components/PriceRangeSlider";

export const productUrl = `http://localhost:3000/api/products`;

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [productsCount, setProductsCount] = useState(0);

  const [searchParams, setSearchParams] = useSearchParams({
    name: "",
    minPrice: "",
    maxPrice: "",
    page: 1,
  });

  const name = searchParams.get("name") || "";
  const minPrice = searchParams.get("minPrice") || "";
  const maxPrice = searchParams.get("maxPrice") || "";
  const page = searchParams.get("page") || 1;

  useEffect(() => {
    const dataFetching = async () => {
      const options = {
        params: {
          name: name,
          minPrice: minPrice,
          maxPrice: maxPrice,
          page: page,
        },
      };
      try {
        setLoading(true);
        if (loading) return <div>Loading...</div>;
        const response = await axios.get(`${productUrl}/`, options);
        const productCount = await axios.get(`${productUrl}/count`);
        setProductsCount(productCount);
        setProducts(response.data);
        console.log(products);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    dataFetching();
  }, [useLocation, searchParams]);

  function handleFilter(e) {
    setSearchParams((prev) => {
      prev.set(e.target.name, e.target.value);

      return prev;
    });
  }

  function handlePage(direction) {
    const maxPages = Math.ceil(productsCount.data.count / 12);
    console.log(maxPages);
    console.log(Number(page));

    if (direction == "next" && Number(page) < maxPages) {
      setSearchParams((prev) => {
        prev.set("page", Number(page) + 1);

        return prev;
      });
    }

    if (direction == "prev" && Number(page) > 1) {
      setSearchParams((prev) => {
        prev.set("page", Number(page) - 1);

        return prev;
      });
    }
  }

  return (
    <>
      <div className="bg-primery-beige">
        <h1 className="mx-10 text-4xl">Products</h1>
        <PriceRangeSlider
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
        <div className="flex justify-center">
          <SearchBar
            handleFilter={handleFilter}
            name={name}
            minPrice={minPrice}
            maxPrice={maxPrice}
          />
        </div>
        <PagesButton handlePage={handlePage} page={page} />
        <ProductList products={products} />
        <PagesButton handlePage={handlePage} page={page} />
      </div>
    </>
  );
}

export default ProductsPage;
