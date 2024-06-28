import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/marketplace-logo.png";

function NavBar({ links }) {
  return (
    <>
      <div className="sticky">
        <nav className="flex justify-between items-center border-b border-b-gray-300 border-b-1">
          <div>
            <img src={logo} alt="" className="w-1/6 mx-10" />
          </div>
          <section className="flex gap-14 mx-10 text-primery-orenge">
            {links.map((link) => {
              return (
                <div className="text-beige">
                  <Link to={`/${link.href}`}>{link.label.toUpperCase()}</Link>
                </div>
              );
            })}
          </section>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
