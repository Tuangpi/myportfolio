import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import hero from "../assets/hero1.jpg";
import FadeInSection from "./FadeInSection";

export const Home = () => {
  return (
    <>
      <div className="flex flex-col-reverse mt-8 items-center justify-center lg:flex-row">
        <div className="">
          <FadeInSection>
            <h1 className="cursor-default text-2xl font-thin uppercase leading-10 mt-6 mb-4 text-gray-800 text-center lg:-mt-6 lg:text-left">
              Web Developer
            </h1>
            <p className="w-9/12 cursor-default text-gray-800 m-auto mb-8 text-center lg:text-left lg:m-0 tracking-tight">
              <div>
                Full Stack Web Developer with 4+ years of remote experience
                building high-quality web and SaaS applications. Proficient in
                PHP, JavaScript, TypeScript, Vue, Node.js, and API development.
              </div>
              <br />
              <div className="-mt-4">
                <FontAwesomeIcon
                  icon={faHandshake}
                  className="text-orange-800"
                />{" "}
                Let's work together to create a professional and functional web
                presence for your business or personal brand.
                <FontAwesomeIcon
                  icon={faHandshake}
                  className="text-yellow-800"
                />
              </div>
            </p>
            <Link
              to="/contact"
              className="bg-slate-900 text-slate-300 py-2 border-none outline-none rounded-sm block w-32 text-center mx-auto -mt-2 mb-12 lg:m-0 lg:mt-4"
            >
              Contact Me
            </Link>
          </FadeInSection>
        </div>
        <img
          src={hero}
          alt="Hero"
          className="w-80 h-80 rounded-full bg-slate-500 shadow-lg shadow-slate-900"
        />
      </div>
    </>
  );
};
