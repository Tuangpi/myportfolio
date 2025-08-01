import React from "react";
import github from "../assets/github1.png";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHandPointRight,
  faHeart,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import FadeInSection from "./FadeInSection";

export const Contact = () => {
  return (
    <FadeInSection>
      <div className="flex flex-col mt-8 items-center justify-center mb-12 gap-6">
        <h2 className="cursor-default text-2xl font-thin uppercase leading-10 text-gray-800">
          Contact Me?
        </h2>
        <h3>
          <FontAwesomeIcon icon={faHeart} className="text-slate-900" />
        </h3>
        <div className="flex gap-x-4">
          <FontAwesomeIcon
            icon={faEnvelope}
            color="midnightblue"
            className="text-xl md:text-3xl lg:text-4xl text-slate-900"
            spin
          />
          <FontAwesomeIcon
            icon={faHandPointRight}
            color="darkcyan"
            className="text-xs md:text-lg text-slate-900"
          />
          <a
            href="mailto: singkhantuang97@gmail.com"
            className="underline hover:no-underline hover:text-gray-700 text-sm md:text-lg"
          >
            singkhantuang97@gmail.com
          </a>
        </div>
        <div className="flex gap-x-4">
          <FontAwesomeIcon
            icon={faPhone}
            color="midnightblue"
            className="text-xl md:text-3xl lg:text-4xl text-slate-900"
            spin
          />
          <FontAwesomeIcon
            icon={faHandPointRight}
            color="darkcyan"
            className="text-xs md:text-lg text-slate-900"
          />
          <a
            href="tel: +959265826622"
            className="underline hover:no-underline hover:text-gray-700 text-sm md:text-lg"
          >
            +95-9265-826-622
          </a>
        </div>
        <div className="flex gap-x-8 mt-5">
          <a
            href="https://github.com/Tuangpi"
            className="bg-slate-400 p-3 rounded-full hover:bg-slate-500 transition"
          >
            <img
              src={github}
              alt="github"
              className="scale-125 hover:scale-100 transition"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/singkhantuang/"
            className="bg-slate-400 p-3 rounded-full hover:bg-slate-500 transition"
          >
            <img
              src={linkedin}
              alt="linkedin"
              className="scale-125 hover:scale-100 transition"
            />
          </a>
          <a
            href="https://www.facebook.com/y2keo"
            className="bg-slate-400 p-3 rounded-full hover:bg-slate-500 transition"
          >
            <img
              src={facebook}
              alt="facebook"
              className="scale-125 hover:scale-100 transition"
            />
          </a>
        </div>
      </div>
    </FadeInSection>
  );
};
