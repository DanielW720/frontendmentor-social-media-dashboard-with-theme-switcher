import React from "react";
import Card from "./Card";
import iconUp from "../assets/images/icon-up.svg";
import iconDown from "../assets/images/icon-down.svg";

export default function MediaFollowersCard({ platform }) {
  const isPositive = platform.followers.today.followers.absoluteDifference >= 0;

  const platformColorGradients = {
    facebook: "bg-gradient-to-r from-[#198ff5] to-[#198ff5]",
    twitter: "bg-gradient-to-r from-[#1ca0f2] to-[#1ca0f2]",
    instagram: "bg-gradient-to-r from-[#fdc468] to-[#df4996]",
    youtube: "bg-gradient-to-r from-[#c4032a] to-[#c4032a]",
  };

  return (
    <Card className="">
      <div
        className={`${
          platformColorGradients[platform.platform]
        } h-1 rounded-t-md mb-6 w-full`}
      ></div>
      <div className="flex justify-center items-center w-full">
        <div className="mr-2">
          <img src={platform.icon} alt="Facebook icon" />
        </div>
        <p className="text-[color:var(--darkGrayishBlueText)] dark:text-[color:var(--desaturatedBlueText)] font-semibold">
          @{platform.userName}
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
