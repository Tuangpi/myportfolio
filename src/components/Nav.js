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
      <ul className="flex justify-around items-center sm:space-x-4 lg:space-x-6 text-slate mb-20 sm:mb-0">
        <Link to="/" className="sm:inline hidden mr-auto md:-ml-2 lg:-ml-24">
          <img src={logo} alt="logo" />
        </Link>
        <Link
          to="/"
          className="hover:text-slate-600 cursor-pointer text-1 text-slate-900 flex flex-col justify-center items-center gap-1 md:text-base md:flex-row"
        >
          <FontAwesomeIcon icon={faHome} size="xs" className="block sm:inline md:mr-1" />
          <div>Home</div>
        </Link>
        <Link
          to="/projects"
          className="hover:text-slate-600 cursor-pointer text-2 text-slate-900 flex flex-col justify-center items-center gap-1 md:text-xl md:flex-row"
        >
          <FontAwesomeIcon
            icon={faProjectDiagram}
            size="sm"
            className="block sm:inline md:mr-1"
          />
          <div>Projects</div>
        </Link>
        <Link
          to="/about"
          className="hover:text-slate-600 cursor-pointer text-3 text-slate-900 flex flex-col justify-center items-center gap-1 md:text-xl md:flex-row"
        >
          <FontAwesomeIcon icon={faInfoCircle} size="lg" className="block sm:inline md:mr-1" />
          <div>About</div>
        </Link>
        <Link
          to="/contact"
          className="hover:text-slate-600 cursor-pointer text-4 text-slate-900 flex flex-col justify-center items-center gap-1 md:text-2xl md:flex-row"
        >
          <FontAwesomeIcon icon={faContactBook} size="lg" className="block sm:inline md:mr-1" />
          <div>Contact</div>
        </Link>
      </ul>
    </>
  );
};
