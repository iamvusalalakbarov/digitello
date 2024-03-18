"use client";

import { useState, useEffect } from "react";
import Logo from "./logo";
import HeaderNav from "./header-nav";
import Hamburger from "./hamburger";
import clsx from "clsx";

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    }

  }, [isMobileMenuOpen]);

  function handleHamburgerClick() {
    setMobileMenuOpen((isMobileMenuOpen) => !isMobileMenuOpen);
  }

  return (
    <header className={clsx("flex justify-between items-center px-8 md:px-12 lg:px-24 mt-13 bg-white sticky lg:relative", {
      "absolute": isMobileMenuOpen,
    })}>
      <Logo />
      <HeaderNav
        className={clsx({
          "invisible opacity-0 lg:opacity-100 lg:visible": !isMobileMenuOpen,
          "visible opacity-100 h-screen": isMobileMenuOpen,
        })}
      />
      <Hamburger
        onClick={handleHamburgerClick}
        isMobileMenuOpen={isMobileMenuOpen}
      />
    </header>
  );
}
