import React from "react";
import MediaFollowersCard from "./MediaFollowersCard";

export default function MediaPageFollowers({ data }) {
  return (
    <div className="pl-8 pr-8 w-full md:pl-24 md:pr-24">
      <div className="relative top-[-3rem] md:top-[-7rem] gap-4 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4">
        {data.platforms.map((platform, idx) => (
          <MediaFollowersCard key={idx} platform={platform} />
        ))}
      </div>
    </div>
  );
}
