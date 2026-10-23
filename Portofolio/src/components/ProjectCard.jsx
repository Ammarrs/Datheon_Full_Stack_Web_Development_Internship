import React from "react";
import Tools from "./Tools";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import { TbBrandGithub } from "react-icons/tb";

function ProjectCard({
  project: { type, projectName, brief, tools, demoLink, repoLink, thumbnail },
}) {
  let toolsList = [
    { name: "React" },
    { name: "JavaScript" },
    { name: "Tailwind CSS" },
  ];

  return (
    <div className=" rounded-xl border-2 border-brdr-color grid grid-rows-4">
      <div className="display row-span-2 bg-[url(${thumbnail})] bg-cover bg-center rounded-t-x">
        <img className="rounded-t-xl h-full" src={thumbnail} alt="" srcset="" />
      </div>
      <div className="details row-span-2 p-6 flex flex-col gap-5.5">
        <div className="type text-txt-sec-2">{type}</div>
        <div className="project-name text-3xl text-txt-prm">{projectName}</div>
        <div className="project-brief text-txt-sec-2">{brief}</div>
        <div className="tech-stack text-sm">
          <Tools tools={tools} />
        </div>
        <hr className="border border-brdr-color" />
        <div className="btns flex gap-5 items-center text-txt-sec-4">
          <Link to={demoLink} className="live-demo flex gap-1 items-center">
            <GoArrowUpRight />
            <span>Live Demo</span>
          </Link>
          <Link to={repoLink} className="github flex gap-1 items-center">
            <TbBrandGithub />
            <span>Github</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
