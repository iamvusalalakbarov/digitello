"use client";

import { useState } from "react";
import clsx from "clsx";

export default function Hamburger() {
  const [isHamburgerOpen, setHamburgerOpen] = useState(false);

  function handleHamburgerClick() {
    setHamburgerOpen((isHamburgerOpen) => !isHamburgerOpen);
  }

  return (
    <label
      className="flex flex-col gap-y-[2.8px] cursor-pointer relative"
      onClick={handleHamburgerClick}
    >
      <div
        className={clsx(
          "flex justify-between items-center w-6 h-[5px] transition-transform duration-500",
          {
            "absolute inset-0 rotate-45": isHamburgerOpen,
          }
        )}
      >
        <div className="w-full h-full rounded bg-brand-blue"></div>
        <div
          className={clsx(
            "w-1 h-full rounded-r rounded-l-[1px] bg-brand-green ml-[1px]",
            {
              hidden: isHamburgerOpen,
            }
          )}
        ></div>
      </div>
      <div
        className={clsx("w-6 h-[5px] rounded bg-brand-yellow transition-all duration-500", {
          "opacity-0 duration-100": isHamburgerOpen,
        })}
      ></div>
      <div
        className={clsx(
          "w-6 h-[5px] rounded bg-brand-blue transition-transform duration-500",
          {
            "absolute inset-0 -rotate-45": isHamburgerOpen,
          }
        )}
      ></div>
    </label>
  );
}
