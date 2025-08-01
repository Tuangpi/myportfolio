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
import { faSmile } from "@fortawesome/free-solid-svg-icons";
import FadeInSection from "./FadeInSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const About = () => {
  return (
    <div className="flex flex-col mt-8 justify-center mb-12">
      <FadeInSection>
        <h2 className="font-thin text-2xl cursor-default">About</h2>
        <div className="mt-5 mb-20 tracking-tight">
          <p>
            Results-driven Full Stack Web Developer with 4+ years of
            professional experience delivering high- quality web and SaaS
            applications in remote environments. Skilled in PHP, Javascript,
            Typescript, Vue, Node.js, and API development. Highly effective in
            async communication and remote collaboration across global teams.
            Excels at building maintainable code, solving complex problems, and
            learning new technologies quickly to meet evolving project needs.
            Currently expanding expertise in software architecture, AI
            integration, and scalable system design to grow as a well-rounded
            software professional. Actively seeking fully remote opportunities
            with innovative startups or product-focused companies.
          </p>
          <br />
          <p className="-mt-4">
            In addition to my{" "}
            <a
              href="#skill"
              className="underline tracking-tighter hover:text-slate-700"
            >
              technical skills
            </a>
            , I am a proactive learner who is always looking to improve my
            knowledge and stay up to date on the latest web development
            technologies and best practices.
          </p>
          <br />
          <p className="-mt-4">
            Furthermore, I can work with a team to create a new website from
            scratch. I primarily focus on writing clean, elegant, and efficient
            code.
          </p>
          <br />
          <p className="-mt-4">
            <FontAwesomeIcon icon={faSmile} className="text-yellow-700" /> Thank
            you for visiting my website. I hope you find the information and
            services I offer to be of value. Please don't hesitate to contact me
            if you have any questions or would like to discuss a potential
            project.{""}
            <FontAwesomeIcon icon={faSmile} className="text-orange-800" />
          </p>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="mb-20">
          <h2 className="font-thin text-2xl cursor-default" id="skill">
            Skills
          </h2>
          <div className="mt-5 mb-16">
            These are the technologies I've worked with
            <div className="flex flex-wrap gap-4 mt-3 justify-center md:justify-start">
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
      </FadeInSection>
      <FadeInSection>
        <h2 className="font-thin text-2xl cursor-default mt-5" id="skill">
          Resume
        </h2>
        <a
          href="https://drive.google.com/file/d/14st8frIsxEiKrh1u6qgh9l765jcKZ2CN/view?usp=sharing"
          className="mt-5 flex justify-start items-center gap-2 underline hover:text-slate-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="1.4rem"
            className="mysvg"
          >
            <path d="M339 314.9L175.4 32h161.2l163.6 282.9H339zm-137.5 23.6L120.9 480h310.5L512 338.5H201.5zM154.1 67.4L0 338.5 80.6 480 237 208.8 154.1 67.4z" />
          </svg>
          View Resume
        </a>
      </FadeInSection>
    </div>
  );
};
