import React from "react";
import hero from "../assets/hero.jpg";

export const Home = () => {
  return (
    <>
      <div className="flex flex-col-reverse mt-8 items-center justify-center lg:flex-row">
        <div>
          <h1 className="cursor-default text-2xl font-thin uppercase leading-10 mt-6 mb-6 text-gray-800 text-center lg:-mt-6 lg:text-left">
            Web Developer
          </h1>
          <p className="w-9/12 leading-relaxed cursor-default text-gray-800 m-auto mb-8 text-center lg:text-left lg:m-0">
            I am help your business get there, no matter where “there” is. I
            assure you that if you choose me, I shall deliver you a bug-free and
            high-quality solution, which end users would like to use and
            experience.
          </p>
        </div>
        <img
          src={hero}
          alt="Hero"
          className="w-80 h-80 rounded-full bg-slate-900"
        />
      </div>
    </>
  );
};
