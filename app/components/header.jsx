"use client";

import { useState, useEffect } from "react";
import Logo from "./logo";
import HeaderNav from "./header-nav";
import Hamburger from "./hamburger";
import clsx from "clsx";

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const html = document.querySelector("html");

    if (isMobileMenuOpen) {
      html.classList.add("overflow-hidden", "lg:overflow-auto");
      document.body.classList.add("overflow-hidden", "lg:overflow-auto");
    } else {
      html.classList.remove("overflow-hidden", "lg:overflow-auto");
      document.body.classList.remove("overflow-hidden", "lg:overflow-auto");
    }

    return () => {
      html.classList.remove("overflow-hidden", "lg:overflow-auto");
      document.body.classList.remove("overflow-hidden", "lg:overflow-auto");
    };
  }, [isMobileMenuOpen]);

  function handleHamburgerClick() {
    setMobileMenuOpen((isMobileMenuOpen) => !isMobileMenuOpen);
  }

  return (
    <header
      className={clsx(
        "flex justify-between items-center px-8 md:px-12 lg:px-24 mt-13 bg-white sticky lg:relative",
        {
          "absolute lg:static z-10 lg:z-0": isMobileMenuOpen,
        }
      )}
    >
      <Logo />
      <HeaderNav
        className={clsx({
          "-top-[800px]": !isMobileMenuOpen,
          "top-full w-screen h-screen lg:w-auto lg:h-auto":
            isMobileMenuOpen,
        })}
      />
      <Hamburger
        onClick={handleHamburgerClick}
        isMobileMenuOpen={isMobileMenuOpen}
      />
    </header>
  );
}
