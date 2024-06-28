import { useState } from "react";

import "./index.css";
import ProductsPage from "./Pages/ProductsPage";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import CreateProductPage from "./Pages/CreateProductPage";
import ProductDetailsPage from "./Pages/ProductDetailsPage";
import "@wix/design-system/styles.global.css";
import LogInPage from "./Pages/LogInPage";
import SighUpPage from "./Pages/SighUpPage";

const links = [
  {
    label: "Home",
    href: "",
  },
  {
    label: "products",
    href: "products",
  },
  {
    label: "create",
    href: "create",
  },
  {
    label: "log in",
    href: "logIn",
  },
];

function App() {
  return (
    <>
      <NavBar links={links} />
      <Routes>
        <Route path="/products">
          <Route index element={<ProductsPage />} />

          <Route path="details/:id" element={<ProductDetailsPage />} />
        </Route>
        <Route path="/create" element={<CreateProductPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/logIn" element={<LogInPage />} />
        <Route path="/sighUp" element={<SighUpPage />} />
      </Routes>
    </>
  );
}

export default App;
