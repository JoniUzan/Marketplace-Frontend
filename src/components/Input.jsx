import { KeyRound, Mail, Search } from "lucide-react";
import React from "react";
import { useRef } from "react";

function Input({
  value,
  handler,
  placeholder,
  type,
  name,
  iconStyle,
  ref,
  inputStyle,
}) {
  return (
    <div className="form relative">
      {iconStyle == "mail" ? (
        <Mail className={"absolute left-2 -translate-y-1/2 top-1/2 p-1 "} />
      ) : iconStyle == "password" ? (
        <KeyRound className={"absolute left-2 -translate-y-1/2 top-1/2 p-1 "} />
      ) : iconStyle == "search" ? (
        <Search className={"absolute left-2 -translate-y-1/2 top-1/2 p-1 "} />
      ) : null}
      <input
        className={`input rounded-3xl px-8 py-3 border-2 border-transparent focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 shadow-md w-full ${inputStyle}`}
        placeholder={placeholder}
        required=""
        type={type}
        value={value}
        onChange={handler}
        name={name}
        ref={ref}
      />
    </div>
  );
}

export default Input;
