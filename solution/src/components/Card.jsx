import React from "react";
import { overrideTailwindClasses } from "tailwind-override";

export default function Card({ className, children }) {
  const styles = className;

  return (
    <a
      href="#"
      className={overrideTailwindClasses(
        `bg-[color:var(--lightGrayishBlueCardBG)] dark:bg-[color:var(--darkDesaturatedBlueCardBG)] flex flex-col justify-center items-center rounded-md shadow hover:bg-gray-100 ${styles}`
      )}
    >
      {children}
    </a>
  );
}
