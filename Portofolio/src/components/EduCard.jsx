import React from 'react'
import { LuGraduationCap } from "react-icons/lu";

function EduCard() {
  return (
    <div className='w-100 flex flex-col gap-5 p-8 rounded-2xl border-2 border-brdr-color'>
      <div className="icon w-fit flex justify-center items-center rounded-lg bg-tag-bg-2 p-2 text-txt-sec-4">
        <LuGraduationCap />
      </div>
      <span className='title text-txt-sec-2'>Education</span>
      <span className='college text-txt-prm text-3xl font-bold'>Computer Science</span>
      <span className='uni text-txt-sec'>Science, Ain Shams University</span>
    </div>
  )
}

export default EduCard