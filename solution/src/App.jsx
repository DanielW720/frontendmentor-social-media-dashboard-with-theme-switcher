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
          <MediaPageFollowers />
          <OverviewToday />
        </main>
      </div>
    </div>
  );
}

const data = {
  userName: "nathanf",
  platforms: [
    {
      platform: "facebook",
      icon: iconFacebook,
      followers: {
        total: 1987,
      },
      today: {
        followers: 87,
        difference: 3,
      },
    },
    {
      platform: "twitter",
      icon: iconTwitter,
      followers: {
        total: 1044,
      },
      today: {
        followers: 87,
        difference: 3,
      },
    },
    {
      platform: "instagram",
      icon: iconInstagram,
      followers: {
        total: 11734,
      },
      today: {
        followers: 87,
        difference: 3,
      },
    },
    {
      platform: "youtube",
      icon: iconYoutube,
      followers: {
        total: 8239,
      },
      today: {
        followers: 87,
        difference: 3,
      },
    },
  ],
};
