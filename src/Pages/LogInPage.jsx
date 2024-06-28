import React, { useState } from "react";
import Input from "../components/Input";
import logInImage from "../assets/log-in-image.jpg";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function LogInPage() {
  const [logInData, setLogInData] = useState({});

  function handleLogInData(e) {
    const { name, value } = e.target;
    setLogInData((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function handleLogInButton() {
    console.log(logInData);
  }
  return (
    <div className="p-20">
      <div className="bg-white flex mx-16 items-center shadow-lg ">
        <div className="flex flex-col gap-8 w-1/2 text-center font-bold p-10 ">
          <h2 className="text-4xl">Log in</h2>
          <Input
            type={"email"}
            iconStyle={"mail"}
            placeholder={"User name"}
            name={"userName"}
            handler={handleLogInData}
          />
          <Input
            type={"password"}
            iconStyle={"password"}
            placeholder={"Password"}
            name={"password"}
            handler={handleLogInData}
          />
          <div className="flex justify-center items-center gap-8">
            <Link to={"/sighUp"}>
              <p>Sigh up</p>
            </Link>
            <button onClick={handleLogInButton}>
              <Button variant="contained" color="success">
                <p>Log in</p>
              </Button>
            </button>
          </div>
        </div>
        <div className="w-1/2">
          <img className="" src={logInImage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default LogInPage;
