import Image from "next/image";
import React from "react";
import { Info } from "./info";

export const Profile = () => {
  return (
    <div className=" md:h-[297mm] h-[148.5mm] bg-blue-500 p-2 md:pt-10 md:pb-10 flex flex-col items-center justify-between">
      <div>
        <Image
          className="rounded-full"
          src={require("./images/rp.jpeg")}
          alt="profile pic"
        />
        <h1 className="md:text-3xl text-xs font-bold text-center text-white mb-1">Abdul Rafay</h1>
        <p className="md:text-lg text-xxs font-semibold text-yellow-300 text-center">Front-End Web Developer</p>
      </div>
      <Info/>
      <div className="w-full overflow-hidden break-words p-1  md:p-2">
        <h1 className="md:text-2xl text-xs font-bold text-left text-white mb-1">Contact</h1>
        <ul className="md:text-sm text-xxs">
          <li>
            <p>
              <b className="text-yellow-300">Number:</b>
              <br />
              0313-2354942
            </p>
          </li>
          <li>
            <p>
              <b className="text-yellow-300">Email:</b>
              <br />
              rafaysheikhuk218@gmail.com
            </p>
          </li>
          <li>
            <p>
              <b className="text-yellow-300">Address:</b>
              <br />
              B183 , North Nazimabad , Karachi .
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
