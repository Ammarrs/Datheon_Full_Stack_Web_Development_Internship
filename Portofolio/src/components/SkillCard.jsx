import React from "react";
import { FaCode } from "react-icons/fa6";
import Tools from './Tools'

function SkillCard() {

  const tools = [
    {name: "React"},
    {name: "TailwindCSS"},
    {name: "JavaScript"},
  ]

  return (
    <div className="p-6 border-2 border-brdr-color rounded-2xl flex flex-col gap-5">
      <div className="title flex items-center gap-2.5">
        <FaCode />
        <span>Frontend</span>
      </div>
      <div className="skills text-xs">
        <Tools tools={tools}/>
      </div>
    </div>
  );
}

export default SkillCard;
