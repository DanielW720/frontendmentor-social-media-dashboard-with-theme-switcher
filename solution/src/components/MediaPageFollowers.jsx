import React from "react";
import MediaFollowersCard from "./MediaFollowersCard";

export default function MediaPageFollowers() {
  return (
    <div className="pl-8 pr-8 w-full">
      <div className="relative top-[-3rem] md:top-[-7rem] gap-4 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4">
        <MediaFollowersCard />
        <MediaFollowersCard />
        <MediaFollowersCard />
        <MediaFollowersCard />
      </div>
    </div>
  );
}
