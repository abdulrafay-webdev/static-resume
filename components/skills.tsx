import React from "react";

export const Skills = () => {
  return (
    <div className="md:mb-5">
      <h1 className="md:scroll-m-20 md:pb-2 md:text-3xl text-sm text-blue-500 font-semibold tracking-tight first:mt-0">
        Skills :
      </h1>
      <ol className="md:my-1 md:ml-9 ml-4 md:p-2 px-0.5 list-disc md:text-lg text-xxs font-medium md:[&>li]:mt-1 md:flex">
        <li>
          <h4 className="text-green-700 md:text-lg text-xs">HTML/CSS :</h4>
          <p className="font-light">
            Fundamental web technologies for creating structured, responsive,
            and visually appealing layouts.
          </p>
        </li>
        <li>
          <h4 className="text-green-700 md:text-lg text-xs">Typescript :</h4>
          <p className="font-light">
            Strongly typed programming language enhancing JavaScript for
            scalable applications.
          </p>
        </li>
        <li>
          <h4 className="text-green-700 md:text-lg text-xs">React :</h4>
          <p className="font-light">
            JavaScript library for building user interfaces with reusable
            components.
          </p>
        </li>
      </ol>
    </div>
  );
};
