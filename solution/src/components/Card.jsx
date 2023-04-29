import React from "react";
import { overrideTailwindClasses } from "tailwind-override";

export default function Card({ className, children }) {
  const styles = className;

  return (
    <a
      href="#"
      className={overrideTailwindClasses(
        `bg-[color:var(--lightGrayishBlueCardBG)] dark:bg-[color:var(--darkDesaturatedBlueCardBG)] flex flex-col justify-center items-center rounded-md hover:bg-[color:var(--activeStateLightCardBG)] dark:hover:bg-[color:var(--activeStateDarkCardBG)] ${styles}`
      )}
    >
      {children}
    </a>
  );
}
