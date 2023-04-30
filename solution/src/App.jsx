import { useState } from "react";
import Header from "./components/Header";
import MediaPageFollowers from "./components/MediaPageFollowers";
import OverviewToday from "./components/OverviewToday";
import iconFacebook from "./assets/images/icon-facebook.svg";
import iconTwitter from "./assets/images/icon-twitter.svg";
import iconInstagram from "./assets/images/icon-instagram.svg";
import iconYoutube from "./assets/images/icon-youtube.svg";

export default function App() {
  const [theme, setTheme] = useState("dark");

  const updateTheme = () => {
    setTheme((prevState) => {
      return prevState === "dark" ? "" : "dark";
    });
  };

  return (
    <div className={theme}>
      <div
        className={`min-w-[330px] min-h-screen dark:bg-[color:var(--veryDarkBlueBG)]`}
      >
        <Header
          updateTheme={updateTheme}
          totalFollowers={data.platforms.reduce(
            (accumulator, platform) => accumulator + platform.followers.total,
            0
          )}
        />
        <main>
          <MediaPageFollowers data={data} />
          <OverviewToday data={data} />
        </main>
      </div>
    </div>
  );
}

const data = {
  platforms: [
    {
      platform: "facebook",
      userName: "nathanf",
      icon: iconFacebook,
      followers: {
        total: 1987,
        today: {
          followers: {
            absoluteDifference: 12,
          },
          percentageDifference: 3,
          likes: {
            absoluteDifference: 52,
            percentageDifference: -2,
          },
          platformSpecific: {
            platformMetric: "Page Views",
            absoluteDifference: 87,
            percentageDifference: 3,
          },
        },
      },
    },
    {
      platform: "twitter",
      userName: "nathanf",
      icon: iconTwitter,
      followers: {
        total: 1044,
        today: {
          followers: {
            absoluteDifference: 99,
          },
          percentageDifference: -2,
          likes: {
            absoluteDifference: 507,
            percentageDifference: 553,
          },
          platformSpecific: {
            platformMetric: "Retweets",
            absoluteDifference: 117,
            percentageDifference: 303,
          },
        },
      },
    },
    {
      platform: "instagram",
      userName: "realnathanf",
      icon: iconInstagram,
      followers: {
        total: 11734,
        today: {
          followers: {
            absoluteDifference: 1099,
          },
          percentageDifference: 3,
          likes: {
            absoluteDifference: 5462,
            percentageDifference: 2257,
          },
          platformSpecific: {
            platformMetric: "Profile Views",
            absoluteDifference: "52k",
            percentageDifference: 1375,
          },
        },
      },
    },
    {
      platform: "youtube",
      userName: "Nathan F.",
      icon: iconYoutube,
      followers: {
        total: 8239,
        today: {
          followers: {
            absoluteDifference: -144,
          },
          percentageDifference: 3,
          likes: {
            absoluteDifference: 107,
            percentageDifference: -19,
          },
          platformSpecific: {
            platformMetric: "Total Views",
            absoluteDifference: 1407,
            percentageDifference: -12,
          },
        },
      },
    },
  ],
};
