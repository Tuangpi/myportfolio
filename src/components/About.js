import React from "react";
import html from "../assets/html-5.png";
import css from "../assets/css.png";
import js from "../assets/java-script.png";
import bootstrap from "../assets/bootstrap.png";
import tw from "../assets/tailwind-64.png";
import laravel from "../assets/laravel.png";
import php from "../assets/php.png";
import mysql from "../assets/mysql.png";
import github from "../assets/github.png";
import jquery from "../assets/jquery.png";
import java from "../assets/java.png";
import react from "../assets/react.png";

export const About = () => {
  return (
    <div className="flex flex-col mt-8 justify-center mb-12">
      <h2 className="font-thin text-2xl cursor-default">About</h2>
      <div className="mt-5">
        Hi. I'm Sing Tuang, nice to meet you. Please take a look around. I am a
        self-taught Web developer and also a hard worker. <br />
        Furthermore, I can work with a team to create a new website from
        scratch. I primarily focus on writing clean, elegant, and efficient
        code.
        <ul className="list-disc ml-5 mt-3 mb-20">
          <li>I want to know more.</li>
          <li>
            I 💙 executing what I already know This way I practice to perfection
          </li>
          <li>
            I 💙 challenging projects It is stressful but it helps me get better
          </li>
        </ul>
      </div>
      <div>
        <h2 className="font-thin text-2xl cursor-default">Skills</h2>
        <div className="mt-5">
          These are the technologies I've worked with
          <div className="flex flex-wrap gap-4 mt-3">
            <div className="px-6 pt-5 pb-3 shadow-md shadow-slate-700 hover:scale-105 hover:shadow-slate-500 transition cursor-default">
              <img src={html} alt="html" />
              <p className="mt-3 text-center">HTML</p>
            </div>
            <div className="px-6 pt-5 pb-3 shadow-md shadow-slate-700 hover:scale-105 hover:shadow-slate-500 transition cursor-default">
              <img src={css} alt="css" />
              <p className="mt-3 text-center">CSS</p>
            </div>
            <div className="px-6 pt-5 pb-3 shadow-md shadow-slate-700 hover:scale-105 hover:shadow-slate-500 transition cursor-default">
              <img src={js} alt="javascript" />
              <p className="mt-3 text-center">JAVASCRIPT</p>
            </div>
            <div className="px-6 pt-5 pb-3 shadow-md shadow-slate-700 hover:scale-105 hover:shadow-slate-500 transition cursor-default">
              <img src={bootstrap} alt="bootstrap" />
              <p className="mt-3 text-center">BOOTSTRAP</p>
            </div>
            <div className="px-6 pt-5 pb-3 shadow-md shadow-slate-700 hover:scale-105 hover:shadow-slate-500 transition cursor-default">
              <img src={tw} alt="tailwind css" />
              <p className="mt-3 text-center">TAILWIND CSS</p>
            </div>
            <div className="px-6 pt-5 pb-3 shadow-md shadow-slate-700 hover:scale-105 hover:shadow-slate-500 transition cursor-default">
              <img src={laravel} alt="laravel" />
              <p className="mt-3 text-center">LARAVEL</p>
            </div>
            <div className="px-6 pt-5 pb-3 shadow-md shadow-slate-700 hover:scale-105 hover:shadow-slate-500 transition cursor-default">
              <img src={php} alt="php" />
              <p className="mt-3 text-center">PHP</p>
            </div>
            <div className="px-6 pt-5 pb-3 shadow-md shadow-slate-700 hover:scale-105 hover:shadow-slate-500 transition cursor-default">
              <img src={mysql} alt="mysql" />
              <p className="mt-3 text-center">MYSQL</p>
            </div>
            <div className="px-6 pt-5 pb-3 shadow-md shadow-slate-700 hover:scale-105 hover:shadow-slate-500 transition cursor-default">
              <img src={github} alt="github" />
              <p className="mt-3 text-center">GITHUB</p>
            </div>
            <div className="px-6 pt-5 pb-3 shadow-md shadow-slate-700 hover:scale-105 hover:shadow-slate-500 transition cursor-default">
              <img src={jquery} alt="jquery" />
              <p className="mt-3 text-center">JQUERY</p>
            </div>
            <div className="px-6 pt-5 pb-3 shadow-md shadow-slate-700 hover:scale-105 hover:shadow-slate-500 transition cursor-default">
              <img src={java} alt="java" />
              <p className="mt-3 text-center">JAVA</p>
            </div>
            <div className="px-6 pt-5 pb-3 shadow-md shadow-slate-700 hover:scale-105 hover:shadow-slate-500 transition cursor-default">
              <img src={react} alt="react" />
              <p className="mt-3 text-center">REACT</p>
            </div>
            <div className="pl-2 mt-auto">...</div>
          </div>
        </div>
      </div>
    </div>
  );
};
