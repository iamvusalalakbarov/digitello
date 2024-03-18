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
      html.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      html.style.overflow = "unset";
      document.body.style.overflow = "unset";
    }

    return () => {
      html.style.overflow = "unset";
      document.body.style.overflow = "unset";
    }

  }, [isMobileMenuOpen]);

  function handleHamburgerClick() {
    setMobileMenuOpen((isMobileMenuOpen) => !isMobileMenuOpen);
  }

  return (
    <header className={clsx("flex justify-between items-center px-8 md:px-12 lg:px-24 mt-13 bg-white sticky lg:relative", {
      "absolute z-10": isMobileMenuOpen,
    })}>
      <Logo />
      <HeaderNav
        className={clsx({
          "invisible opacity-0 lg:opacity-100 lg:visible": !isMobileMenuOpen,
          "visible opacity-100 w-screen h-screen": isMobileMenuOpen,
        })}
      />
      <Hamburger
        onClick={handleHamburgerClick}
        isMobileMenuOpen={isMobileMenuOpen}
      />
    </header>
  );
}
