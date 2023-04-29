import React from "react";
import Card from "./Card";
import iconUp from "../assets/images/icon-up.svg";
import iconDown from "../assets/images/icon-down.svg";

export default function OverviewTodayPlatformCards({ platform, useLikes }) {
  const isPositivePlatformSpecific =
    platform.followers.today.followers.absoluteDifference >= 0;
  const isPositiveLikes =
    platform.followers.today.likes.percentageDifference >= 0;

  return (
    <Card className="flex-row justify-between p-6 h-32">
      <div className="h-full flex flex-col justify-between">
        <p className="text-[color:var(--darkGrayishBlueText)] dark:text-[color:var(--desaturatedBlueText)] font-semibold">
          {useLikes
            ? "Likes"
            : platform.followers.today.platformSpecific.platformMetric}
        </p>
        <p className="dark:text-[color:var(--whiteText)] text-3xl font-bold">
          {useLikes
            ? platform.followers.today.likes.absoluteDifference
            : platform.followers.today.platformSpecific.absoluteDifference}
        </p>
      </div>
      <div className="h-full flex flex-col justify-between">
        <div className="self-end">
          <img src={platform.icon} alt="Facebook icon" />
        </div>
        {useLikes ? (
          <div className="flex items-center">
            <img
              src={isPositiveLikes ? iconUp : iconDown}
              alt="Up or down votes"
              className="h-2 w-2"
            />
            <p
              className={`ml-1 font-semibold
          ${
            isPositiveLikes
              ? "text-[color:var(--limeGreen)]"
              : "text-[color:var(--brightRed)]"
          }`}
            >
              {Math.abs(platform.followers.today.likes.percentageDifference)}%
            </p>
          </div>
        ) : (
          <div className="flex items-center">
            <img
              src={isPositivePlatformSpecific ? iconUp : iconDown}
              alt="Up or down votes"
              className="h-2 w-2"
            />
            <p
              className={`ml-1 font-semibold
          ${
            isPositivePlatformSpecific
              ? "text-[color:var(--limeGreen)]"
              : "text-[color:var(--brightRed)]"
          }`}
            >
              {Math.abs(
                platform.followers.today.platformSpecific.percentageDifference
              )}
              %
            </p>
          </div>
        )}
      </div>
    </Card>
  );
}
