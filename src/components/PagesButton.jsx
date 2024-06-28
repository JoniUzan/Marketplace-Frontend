import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";

function PagesButton({ handlePage, page }) {
  return (
    <div className="flex gap-5 justify-center">
      <button onClick={() => handlePage("prev")}>
        <ArrowLeft />
      </button>
      <span>{page}</span>
      <button onClick={() => handlePage("next")}>
        <ArrowRight />
      </button>
    </div>
  );
}

export default PagesButton;
