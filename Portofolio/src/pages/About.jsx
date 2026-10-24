import React from "react";
import EduCard from "../components/eduCard";
import SkillCard from "../components/SkillCard";
import InterestsCard from "../components/InterestsCard";

function About() {
  return (
    <div className="flex flex-col gap-12 py-18 px-40">
      <div className="title flex flex-col gap-4">
        <span className="title text-5xl font-bold">About</span>
        <span className="subtitle">
          A little about the person behind the interfaces.
        </span>
      </div>
      <div className="background flex justify-between gap-16">
        <div className="biography flex flex-col gap-4">
          <span className="Lead text-3xl font-bold">
            Clean code. Thoughtful design. Better everyday experiences.
          </span>
          <span className="bio text-txt-sec-2">
            I'm Ammar Meshaal, a frontend developer who enjoys turning ideas
            into clear, user-centered web applications. I focus on building with
            React, keeping code readable and making every interaction feel
            considered.
          </span>
          <span className="approach text-txt-sec-2">
            From the structure of a component to the smallest UI detail, I care
            about creating experiences that are responsive, accessible and easy
            to use.
          </span>
        </div>
        <div className="education">
          <EduCard />
        </div>
      </div>
      <div className="section flex flex-col gap-6">
        <div className="title">
          <span className="text-3xl">Skills & Tools</span>
        </div>
        <div className="container grid grid-cols-3 gap-5">
          <SkillCard />
          <SkillCard />
          <SkillCard />
        </div>
        <div className="container">
          <InterestsCard/>
        </div>
      </div>
    </div>
  );
}

export default About;
