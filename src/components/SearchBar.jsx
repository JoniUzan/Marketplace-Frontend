import React from "react";
import Input from "./Input";

function SearchBar({ name, handleFilter }) {
  return (
    <div >
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
