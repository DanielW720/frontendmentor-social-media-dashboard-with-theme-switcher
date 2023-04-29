import React from "react";
import OverviewTodayCard from "./OverviewTodayCard";

export default function OverviewToday() {
  return (
    <div className="p-8 pt-0 relative md:top-[-4rem]">
      <h2 className="text-[color:var(--veryDarkBlueText)] dark:text-[color:var(--whiteText)] font-bold text-2xl mb-4">
        Overview - Today
      </h2>
      <div className="grid grid-cols-1 gap-4 xs:grid-cols-2 sm:grid-cols-4">
        <OverviewTodayCard />
        <OverviewTodayCard />
        <OverviewTodayCard />
        <OverviewTodayCard />
        <OverviewTodayCard />
        <OverviewTodayCard />
        <OverviewTodayCard />
        <OverviewTodayCard />
      </div>
    </div>
  );
}
