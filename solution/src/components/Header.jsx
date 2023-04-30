import React from "react";

export default function Header({ updateTheme, totalFollowers }) {
  return (
    <header className="bg-[color:var(--whiteBG)] dark:bg-[color:var(--veryDarkBlueTopBGPattern)] h-60 rounded-b-3xl">
      <div className="pt-8 pr-8 pl-8 md:flex justify-between md:pl-24 md:pr-24">
        <div>
          <h1 className="text-[color:var(--veryDarkBlueText)] dark:text-[color:var(--whiteText)] text-2xl font-bold mb-1 ">
            Social Media Dashboard
          </h1>
          <p className="text-[color:var(--darkGrayishBlueText)] dark:text-[color:var(--desaturatedBlueText)] font-bold">
            Total Followers: {(+totalFollowers).toLocaleString("en-US")}
          </p>
        </div>
        <hr className="border-1 border-[color:var(--darkGrayishBlueText)] dark:border-[color:var(--desaturatedBlueText)]  mt-6 mb-6  md:hidden" />
        <div className="flex justify-between md:items-center">
          <p className="text-[color:var(--darkGrayishBlueText)] dark:text-[color:var(--desaturatedBlueText)] font-bold md:mr-2">
            Dark Mode
          </p>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div
              className="w-14 h-8 rounded-full peer peer-checked:after:translate-x-full after:absolute after:top-[4px] after:left-[4px] after:bg-gray-700 after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 bg-gradient-to-r from-[var(--toggleGradientFrom)] to-[var(--toggleGradentTo)]"
              onClick={updateTheme}
            ></div>
          </label>
        </div>
      </div>
    </header>
  );
}
