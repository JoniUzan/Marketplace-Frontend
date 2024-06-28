import React from "react";
import Input from "./Input";

function SearchBar({ name, handleFilter }) {
  return (
    <div className="flex justify-center bg-primery-green p-5 rounded-3xl w-2/3  gap-5 mx-8 mt-8">
      <Input
        value={name}
        handler={handleFilter}
        placeholder={"Search..."}
        type={"text"}
        name={"name"}
      />
    </div>
  );
}

export default SearchBar;
