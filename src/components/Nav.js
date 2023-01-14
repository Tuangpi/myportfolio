import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export const Nav = () => {
  return (
    <>
      <ul className="flex justify-end items-center space-x-4 text-stone text-lg">
        <Link to="/" className="inline mr-auto -ml-24">
          <img src={logo} alt="logo" />
        </Link>
        <Link to="/" className="hover:text-gray-500 cursor-pointer">
          Home
        </Link>
        <Link to="/projects" className="hover:text-gray-500 cursor-pointer">
          Projects
        </Link>
        <Link to="/about" className="hover:text-gray-500 cursor-pointer">
          About
        </Link>
        <Link to="/contact" className="hover:text-gray-500 cursor-pointer">
          Contact
        </Link>
      </ul>
    </>
  );
};
