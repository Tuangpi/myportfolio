import {
  faContactBook,
  faHome,
  faInfoCircle,
  faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../index.css";

export const Nav = () => {
  return (
    <>
      <ul className="flex justify-end items-center space-x-4 text-slate text-lg">
        <Link to="/" className="inline mr-auto -ml-24">
          <img src={logo} alt="logo" />
        </Link>
        <Link
          to="/"
          className="hover:text-slate-600 cursor-pointer text-1 text-slate-900"
        >
          <FontAwesomeIcon icon={faHome} size="xs" className="mr-1" />
          Home
        </Link>
        <Link
          to="/projects"
          className="hover:text-slate-600 cursor-pointer text-2 text-slate-900"
        >
          <FontAwesomeIcon
            icon={faProjectDiagram}
            size="sm"
            className="mr-1 text-l"
          />
          Projects
        </Link>
        <Link
          to="/about"
          className="hover:text-slate-600 cursor-pointer text-3 text-slate-900"
        >
          <FontAwesomeIcon icon={faInfoCircle} size="lg" className="mr-1" />
          About
        </Link>
        <Link
          to="/contact"
          className="hover:text-slate-600 cursor-pointer text-4 text-slate-900"
        >
          <FontAwesomeIcon icon={faContactBook} size="lg" className="mr-1" />
          Contact
        </Link>
      </ul>
    </>
  );
};
