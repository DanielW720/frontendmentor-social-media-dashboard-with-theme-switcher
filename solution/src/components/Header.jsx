import React from "react";

export default function Header({ updateTheme }) {
  return (
    <header className="bg-[color:var(--whiteBG)] dark:bg-[color:var(--veryDarkBlueTopBGPattern)] h-60 ">
      <div className="pt-8 pr-8 pl-6 md:flex justify-between">
        <div>
          <h1 className="text-[color:var(--veryDarkBlueText)] dark:text-[color:var(--whiteText)] text-2xl font-bold mb-1 ">
            Social Media Dashboard
          </h1>
          <p className="text-[color:var(--darkGrayishBlueText)] dark:text-[color:var(--desaturatedBlueText)] font-semibold">
            Total Followers: 23,004
          </p>
        </div>
        <hr className="border-1 border-[color:var(--darkGrayishBlueText)] dark:border-[color:var(--desaturatedBlueText)]  mt-6 mb-6  md:hidden" />
        <div className="flex justify-between md:items-center">
          <p className="text-[color:var(--darkGrayishBlueText)] dark:text-[color:var(--desaturatedBlueText)] font-semibold md:mr-2">
            Dark Mode
          </p>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div
              className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
              onClick={updateTheme}
            ></div>
          </label>
        </div>
      </div>
    </header>
  );
}
