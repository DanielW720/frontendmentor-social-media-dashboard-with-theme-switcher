import React from "react";
import OverviewTodayPlatformCards from "./OverviewTodayPlatformCards";

export default function OverviewToday({ data }) {
  return (
    <div className="p-8 pt-0 relative md:top-[-4rem]">
      <h2 className="text-[color:var(--veryDarkBlueText)] dark:text-[color:var(--whiteText)] font-bold text-2xl mb-4">
        Overview - Today
      </h2>
      {
        <div className="grid grid-cols-1 gap-4 xs:grid-cols-2 md:grid-cols-4">
          <OverviewTodayPlatformCards
            platform={data.platforms[0]}
            useLikes={false}
          />
          <OverviewTodayPlatformCards
            platform={data.platforms[0]}
            useLikes={true}
          />
          <OverviewTodayPlatformCards
            platform={data.platforms[2]}
            useLikes={true}
          />
          <OverviewTodayPlatformCards
            platform={data.platforms[2]}
            useLikes={false}
          />
          <OverviewTodayPlatformCards
            platform={data.platforms[1]}
            useLikes={false}
          />
          <OverviewTodayPlatformCards
            platform={data.platforms[1]}
            useLikes={true}
          />
          <OverviewTodayPlatformCards
            platform={data.platforms[3]}
            useLikes={true}
          />
          <OverviewTodayPlatformCards
            platform={data.platforms[3]}
            useLikes={false}
          />
        </div>
      }
    </div>
  );
}
