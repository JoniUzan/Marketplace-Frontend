import React from "react";
import Input from "../components/Input";
import logInImage from "../assets/log-in-image.jpg";
import { Link } from "react-router-dom";

function LogInPage() {
  return (
    <div className="p-20">
      <div className="bg-white flex mx-16 items-center shadow-lg ">
        <div className="flex flex-col gap-8 w-1/2 text-center font-bold p-10 ">
          <h2 className="text-4xl">Log in</h2>
          <Input type={"email"} iconStyle={"mail"} placeholder={"User name"} />
          <Input iconStyle={"password"} placeholder={"Password"} />
          <Link to={"/sighUp"}>
            <p>Sigh up</p>
          </Link>
        </div>
        <div className="w-1/2">
          <img className="" src={logInImage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default LogInPage;
