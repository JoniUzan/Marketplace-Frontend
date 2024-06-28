import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function NavBar({ links }) {
  return (
    <>
      <div className="sticky">
        <nav className="flex justify-between items-center border-b border-b-gray-300 border-b-1">
          <Link to={"/"}>
            <img src={logo} alt="" className="w-48 mx-10" />
          </Link>
          <section className="flex gap-14 mx-10 ">
            {links.map((link) => {
              return (
                <div className="hover:text-primery-orenge">
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
