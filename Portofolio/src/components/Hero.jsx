import React from "react";
import { FaCode } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import Tools from "./Tools";

function Hero() {
  const toolsList = [
    {name: "React"},
    {name: "TypeScript"},
    {name: "JavaScript"},
    {name: "TailwindCSS"},
    {name: "HTML5"},
    {name: "Node.js"},
    {name: "git/github"},
    {name: "Vercel"},
  ]

  let navigate = useNavigate();
  function projectNavigate() {
    navigate("/projects");
  }
  function contactNavigate() {
    navigate("/contact");
  }
  return (
    <div className="py-18 flex flex-col items-center gap-14">
      
      
      <div className="w-60 role-tag flex gap-2 justify-center items-center py-2 px-4 rounded-3xl text-lg bg-tag-bg-2 text-txt-sec-4">
        <div className="icon">
          <FaCode />
        </div>
        <div className="name font-medium">Frontend Developer</div>
      </div>


      <div className="hook w-250 text-center flex justify-center">
        <span className="text-8xl font-bold">
          Building Modern Web Experiences
        </span>
      </div>


      <div className="breif w-170 text-center flex justify-center">
        <span className="text-xl text-txt-sec">
          Hi, I'm Ammar Meshaal — a Frontend Developer focused on crafting
          clean, performant React applications with modern UI/UX.
        </span>
      </div>


      <div className="hero-actions flex gap-3">
        <button
          onClick={projectNavigate}
          className="bg-bg-prm text-txt-sec-3 px-5.5 py-2 rounded-4xl flex gap-3 items-center hover:opacity-90 hover:cursor-pointer"
        >
          <span>View Projects</span>
          <GoArrowRight />
        </button>
        <button
          onClick={contactNavigate}
          className="px-5.5 py-2 rounded-4xl border-2 border-brdr-color hover:bg-bg-sec-2 hover:cursor-pointer"
        >
          Contact Me
        </button>
      </div>


      <div className="toolkit py-3 flex flex-col items-center gap-3.5">
        <span className="text-txt-sec-2 text-sm font-medium">
          MY EVERYDAY TOOLKIT
        </span>
        <div>
        <Tools tools={toolsList}/>
        </div>
      </div>
    </div>
  );
}

export default Hero;
