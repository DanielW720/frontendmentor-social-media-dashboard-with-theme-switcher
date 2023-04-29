import React from "react";
import Card from "./Card";
import iconUp from "../assets/images/icon-up.svg";
import iconDown from "../assets/images/icon-down.svg";

export default function MediaFollowersCard({ platform, userName }) {
  const isPositive =
    +platform.followers.today.followers.absoluteDifference >= 0;

  return (
    <Card className="">
      <div className="w-full bg-[color:var(--facebook)] h-1 rounded-t-md mb-6"></div>
      <div className="flex justify-center items-center w-full">
        <div className="mr-2">
          <img src={platform.icon} alt="Facebook icon" />
        </div>
        <p className="text-[color:var(--darkGrayishBlueText)] dark:text-[color:var(--desaturatedBlueText)] font-semibold">
          @{userName}
        </p>
      </div>
      <h2 className="text-6xl text-[color:var(--veryDarkBlueText)] dark:text-[color:var(--whiteText)] font-bold mt-4 ">
        {formatNumber(Math.abs(platform.followers.total))}
      </h2>
      <p className="text-[color:var(--darkGrayishBlueText)] dark:text-[color:var(--desaturatedBlueText)] mt-2 mb-4 uppercase tracking-[0.3rem]">
        Followers
      </p>
      <div className="flex items-center mb-4">
        <img
          src={isPositive ? iconUp : iconDown}
          alt="Up or down votes"
          className="h-2 w-2"
        />
        <p
          className={`ml-2 font-semibold
        ${
          isPositive
            ? "text-[color:var(--limeGreen)]"
            : "text-[color:var(--brightRed)]"
        }`}
        >
          {Math.abs(platform.followers.today.followers.absoluteDifference)}{" "}
          Today
        </p>
      </div>
    </Card>
  );
}

function formatNumber(num) {
  if (num >= 10000) {
    return Math.floor(num / 1000) + "k";
  }
  return num;
}
