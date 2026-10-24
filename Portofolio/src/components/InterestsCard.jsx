import React from "react";

function InterestsCard() {
  return (
    <div className="border-2 border-brdr-color rounded-2xl flex flex-col gap-5 p-7">
      <div className="title">
        <span className="text-3xl">Interests & Focus</span>
      </div>
      <div className="categories flex gap-8">
        <div className="cat flex gap-3 items-baseline">
          <div className="dot w-2 h-2 bg-bg-prm rounded-4xl"></div>
          <div className="text flex flex-col gap-1.5">
            <div className="title">UI/UX detail</div>
            <div className="subtitle text-txt-sec">
              Polished layouts and purposeful interactions.
            </div>
          </div>
        </div>
        <div className="cat flex gap-3 items-baseline">
          <div className="dot w-2 h-2 bg-bg-prm rounded-4xl"></div>
          <div className="text flex flex-col gap-1.5">
            <div className="title">React architecture</div>
            <div className="subtitle text-txt-sec">
              Reusable components and maintainable code.
            </div>
          </div>
        </div>
        <div className="cat flex gap-3 items-baseline">
          <div className="dot w-2 h-2 bg-bg-prm rounded-4xl"></div>
          <div className="text flex flex-col gap-1.5">
            <div className="title">AI integration</div>
            <div className="subtitle text-txt-sec">
              Useful AI features in everyday applications.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InterestsCard;
