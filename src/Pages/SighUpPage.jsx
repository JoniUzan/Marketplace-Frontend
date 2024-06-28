import React, { useState } from "react";

import Input from "../components/Input";
import logInImage from "../assets/log-in-image.jpg";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function SighUpPage() {
  const [sighInData, setSighInData] = useState({});

  function handleSighInData(e) {
    const { name, value } = e.target;
    setSighInData((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function handleSighInButton() {
    console.log(sighInData);
    setSighInData({})
  }
  return (
    <div className="p-20">
      <div className="bg-white flex mx-16 items-center shadow-lg ">
        <div className="flex flex-col gap-8 w-1/2 text-center font-bold p-10 ">
          <h2 className="text-4xl">Sigh up</h2>
          <Input
            type={"text"}
            iconStyle={"userName"}
            placeholder={"First name"}
            name={"firstName"}
            handler={handleSighInData}
          />
          <Input
            type={"text"}
            iconStyle={"userName"}
            placeholder={"Last name"}
            name={"lastName"}
            handler={handleSighInData}
          />
          <Input
            type={"email"}
            iconStyle={"mail"}
            placeholder={"Email"}
            name={"userName"}
            handler={handleSighInData}
          />
          <Input
            type={"text"}
            iconStyle={"password"}
            placeholder={"Password"}
            name={"password"}
            handler={handleSighInData}
          />
          <Input
            type={"text"}
            iconStyle={"password"}
            placeholder={"Confirm password"}
            name={"confirmPassword"}
          />
          <div className="flex justify-center items-center gap-8">
            <button onClick={handleSighInButton}>
              <Button variant="contained" color="success">
                <p>Sigh up</p>
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

export default SighUpPage;
