import React from "react";
import { Profile } from "./profile";
import { Objective } from "./objective";
import { Education } from "./education";
import { Skills } from "./skills";
import { Experience } from "./experience";

export const A4 = () => {
  return (
    <div>
      {/* tablet view  */}
      <div className="md:hidden bg-gray-200 flex justify-center items-center p-2">
      <div className="a4-Msize shadow-lg overflow-hidden">
        <div className="w-full flex">
          {/* sidebar  */}
          <div className=" w-4/12">
            <Profile />
          </div>
          {/* right side  */}
          <div className="w-8/12 px-0.5 pl-3">
          <Objective/>
          <Education/>
          <Skills/>
          <Experience/>
          </div>
        </div>
      </div>
    </div>
    {/* desktop view   */}
    <div className="hidden md:bg-gray-200 md:flex md:justify-center md:items-center md:p-4">
      <div className="a4-size shadow-lg    overflow-hidden">
        <div className="w-full flex">
          {/* sidebar  */}
          <div className=" w-1/4">
            <Profile />
          </div>
          {/* right side  */}
          <div className="w-3/4 p-5 pl-4">
          <Objective/>
          <Education/>
          <Skills/>
          <Experience/>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
