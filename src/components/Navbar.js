import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleMobile = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black font-semibold">
      <div className="flex">
        <h1 className="w-full text-3xl p-1 font-bold text-Pblue">podia</h1>
        <ul className="pl-4 hidden md:flex text-gray-500">
          <li className="p-4">Features</li>
          <li className="p-4">Examples</li>
          <li className="p-4">Pricing</li>
          <li className="p-4">Demo</li>
          <li className="p-4">Resources</li>
        </ul>
      </div>
      <ul className="hidden md:flex">
        <li className="p-4">
          {" "}
          <a className=" hover:cursor-pointer text-gray-500">Login</a>{" "}
        </li>
        <li className="p-4">
          {" "}
          <button className="bg-Pblue px-4 py-1 text-white rounded-full hover:bg-blue-500  hover:cursor-pointer">
            Sign up free
          </button>
        </li>
      </ul>
      <div onClick={handleMobile} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-Pwhite ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-Pblue m-4">podia.</h1>
        <li className="p-4 border-b border-gray-600">Features</li>
        <li className="p-4 border-b border-gray-600">Examples</li>
        <li className="p-4 border-b border-gray-600">Pricing</li>
        <li className="p-4 border-b border-gray-600">Demo</li>
        <li className="p-4 border-b border-gray-600">Resources</li>
        <div className="flex">
          <li className="p-4">
            {" "}
            <a>Login</a>{" "}
          </li>
          <li className="p-4">
            {" "}
            <a className="bg-Pblue px-4 py-1 text-white rounded-full hover:bg-blue-400 hover:cursor-pointer">
              Sign up free
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
