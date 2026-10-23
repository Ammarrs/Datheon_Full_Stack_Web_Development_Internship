import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";


function NotFound() {
  let navigator = useNavigate();
  function backButton() {
    navigator(-1);
  }
  function projectNavigate() {
    navigate("/projects");
  }
  function homeNavigate() {
    navigate("/");
  }

  return (
    <div className="h-177.5 py-20 flex flex-col justify-center items-center gap-6 text-center">
      <span className="404 text-9xl font-bold text-txt-sec-4">404</span>
      <span className="title text-5xl font-bold">Page not found</span>
      <span className="info w-lg text-txt-sec">Looks like this page took a wrong turn. It may have moved, or the link might be incorrect.</span>
      <div className="btns flex gap-4 items-center justify-center">
        <button
          onClick={homeNavigate}
          className="bg-bg-prm text-txt-sec-3 px-5.5 py-2 rounded-4xl flex gap-3 items-center hover:opacity-90 hover:cursor-pointer"
        >
          <span>Back to Home</span>
          <GoArrowRight />
        </button>
        <button
          onClick={backButton}
          className="px-5.5 py-2 rounded-4xl border-2 border-brdr-color hover:bg-bg-sec-2 hover:cursor-pointer"
        >
          View Projects
        </button>
      </div>
    </div>
  );
}

export default NotFound;
