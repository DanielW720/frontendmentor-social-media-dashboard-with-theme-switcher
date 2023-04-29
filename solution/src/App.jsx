import { useState } from "react";
import Header from "./components/Header";
import MediaPageFollowers from "./components/MediaPageFollowers";
import OverviewToday from "./components/OverviewToday";

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
        <Header updateTheme={updateTheme} />
        <main>
          <MediaPageFollowers />
          <OverviewToday />
        </main>
      </div>
    </div>
  );
}
