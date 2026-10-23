import React from "react";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";

function Featured() {
  let featuredList = [
    {
      id: 1,
      type: "Productivity",
      projectName: "bLock",
      brief: "a smart combination of projects to make small tutorials a one useful website",
      tools: [
        { name: "React" },
        { name: "JavaScript" },
        { name: "Tailwind CSS" },
      ],
      demoLink: "https://b-lock-react.vercel.app/",
      reboLink: "https://github.com/Ammarrs/bLock-react",
      thumbnail: "/images/projects/tinified/bLock.png",
    },
    {
      id: 2,
      type: "Personal",
      projectName: "Pulse",
      brief: "a one page testing my skills showing gradients and some awesome colored objects",
      tools: [
        { name: "React" },
        { name: "JavaScript" },
        { name: "Tailwind CSS" },
      ],
      demoLink: "https://lustro-kappa.vercel.app/",
      reboLink: "https://github.com/Ammarrs/Lustro",
      thumbnail: "/images/projects/tinified/pulse.png",
    },
    {
      id: 3,
      type: "Mobile App",
      projectName: "MetroMate",
      brief: "a simple every day companion thaat help you reach out your destination Cairo's Metro lines",
      tools: [
        { name: "React" },
        { name: "JavaScript" },
        { name: "Tailwind CSS" },
      ],
      demoLink: "https://drive.google.com/drive/folders/1ZYzpMbLcUoy6nBCae5_Pe4tbJrRYyQrM",
      reboLink: "https://github.com/Ammarrs/metro_mate",
      thumbnail: "/images/projects/tinified/metromateDesign.png",
    },
  ];

  return (
    <div className="py-3">
      <div className="headline flex justify-between items-center">
        <div className="left flex flex-col gap-2">
          <span className="text-4xl text-txt-prm font-medium">
            Featured Work
          </span>
          <span className="text-xl text-txt-sec">
            Thoughtful interfaces. Practical applications.
          </span>
        </div>
        <div className="right">
          <Link
            to={"/projects"}
            className="flex gap-2 items-center text-txt-sec-4 font-medium"
          >
            <span>All Projects</span>
            <GoArrowRight />
          </Link>
        </div>
      </div>

      <div className="project-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-5">
        {featuredList.map((featured) => (
          <ProjectCard key={featured.id} project={featured} />
        ))}
      </div>
    </div>
  );
}

export default Featured;
