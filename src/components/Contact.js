import React from "react";
import github from "../assets/github1.png";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import gmail from "../assets/gmail.png";
import telephone from "../assets/telephone.png";
import decree from "../assets/decree.png";

export const Contact = () => {
  return (
    <div className="flex flex-col mt-8 items-center justify-center mb-12 gap-6">
      <h2 className="cursor-default text-2xl font-thin uppercase leading-10 text-gray-800">Contact Me?</h2>
      <h3>💙</h3>
      <div className="flex gap-x-4">
        <img src={gmail} alt="gmail" />
        <img src={decree} alt="decree" />
        <a
          href="mailto: singkhantuang97@gmail.com"
          className="underline hover:no-underline hover:text-gray-700"
        >
          singkhantuang97@gmail.com
        </a>
      </div>
      <div className="flex gap-x-4">
        <img src={telephone} alt="telephone" />
        <img src={decree} alt="decree" />
        <a
          href="tel: +959265826622"
          className="underline hover:no-underline hover:text-gray-700"
        >
          +95-9265-826-622
        </a>
      </div>
      <div className="flex gap-x-8 mt-5">
        <a href="https://github.com/Tuangpi">
          <img
            src={github}
            alt="github"
            className="scale-125 hover:scale-100 transition"
          />
        </a>
        <a href="https://www.linkedin.com/in/singkhantuang/">
          <img
            src={linkedin}
            alt="linkedin"
            className="scale-125 hover:scale-100 transition"
          />
        </a>
        <a href="https://www.facebook.com/y2keo">
          <img
            src={facebook}
            alt="facebook"
            className="scale-125 hover:scale-100 transition"
          />
        </a>
      </div>
    </div>
  );
};
