import React from "react";
import Card from "./Card";
import iconFacebook from "../assets/images/icon-facebook.svg";
import iconUp from "../assets/images/icon-up.svg";

export default function OverviewTodayCard() {
  const isPositive = true;

  return (
    <Card className="flex-row justify-between p-6 h-32">
      <div className="h-full flex flex-col justify-between">
        <p className="text-[color:var(--darkGrayishBlueText)] dark:text-[color:var(--desaturatedBlueText)] font-semibold">
          Page Views
        </p>
        <p className="dark:text-[color:var(--whiteText)] text-3xl font-bold">
          87
        </p>
      </div>
      <div className="h-full flex flex-col justify-between">
        <div className="self-end">
          <img src={iconFacebook} alt="Facebook icon" />
        </div>
        <div className="flex items-center">
          <img src={iconUp} alt="Up or down votes" className="h-2 w-2" />
          <p
            className={`ml-1 font-semibold
        ${
          isPositive
            ? "text-[color:var(--limeGreen)]"
            : "text-[color:var(--brightRed)]"
        }`}
          >
            3%
          </p>
        </div>
      </div>
    </Card>
  );
}
