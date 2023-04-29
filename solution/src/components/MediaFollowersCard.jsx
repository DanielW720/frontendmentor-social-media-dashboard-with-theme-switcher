import React from "react";
import Card from "./Card";
import iconFacebook from "../assets/images/icon-facebook.svg";
import iconUp from "../assets/images/icon-up.svg";

export default function MediaFollowersCard() {
  const isPositive = true;

  return (
    <Card className="">
      <div className="w-full bg-[color:var(--facebook)] h-1 rounded-t-md mb-6"></div>
      <div className="flex justify-center items-center w-full">
        <div className="mr-2">
          <img src={iconFacebook} alt="Facebook icon" />
        </div>
        <p className="text-[color:var(--darkGrayishBlueText)] dark:text-[color:var(--desaturatedBlueText)] font-semibold">
          @nathanf
        </p>
      </div>
      <h2 className="text-6xl text-[color:var(--veryDarkBlueText)] dark:text-[color:var(--whiteText)] font-bold mt-4 ">
        1987
      </h2>
      <p className="text-[color:var(--darkGrayishBlueText)] dark:text-[color:var(--desaturatedBlueText)] mt-2 mb-4 uppercase tracking-[0.3rem] font-thin">
        Followers
      </p>
      <div className="flex items-center mb-4">
        <img src={iconUp} alt="Up or down votes" className="h-2 w-2" />
        <p
          className={`ml-2 font-semibold
        ${
          isPositive
            ? "text-[color:var(--limeGreen)]"
            : "text-[color:var(--brightRed)]"
        }`}
        >
          12 Today
        </p>
      </div>
    </Card>
  );
}
