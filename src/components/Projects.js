import React from "react";
import img1 from "../assets/img1.png";
import FadeInSection from "./FadeInSection";
// import img2 from "../assets/img2.jpg";

export const Projects = () => {
  return (
    <>
      <h1 className="mt-8 font-thin text-2xl cursor-default">Site Projects</h1>
      <div className="flex mt-12 items-center justify-center mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-4 gap-10">
          <FadeInSection>
            <div className="rounded-2xl p-5 shadow-xl shadow-slate-500 hover:shadow-slate-600 transition">
              <a href="https://vakul.tv" target="_blank" rel="noreferrer">
                <img
                  src={img1}
                  alt="card2"
                  className="rounded-t-2xl rounded-b-2xl cursor-pointer hover:scale-105 hover:rounded-b-none hover:rounded-t-none transition mt-2"
                />
              </a>
              <div className="mt-6 text-slate-900 cursor-default">
                <h2 className="text-lg font-semibold text-center mb-2">
                  Vakul Project
                </h2>
                <p>
                  <em>link</em>:
                  <a
                    href="https://vakul.tv"
                    target="_blank"
                    rel="noreferrer"
                    className="underline italic"
                  >
                    Vakul Project
                  </a>
                </p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                hic repellendus quo libero incidunt porro amet ut ipsa, eaque
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </>
  );
};
