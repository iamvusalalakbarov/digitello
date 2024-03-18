
import Logo from "./logo";
import HeaderNav from "./header-nav";
import Hamburger from "./hamburger";

export default function Header() {

  return (
    <header className="flex justify-between items-center px-8 md:px-12 lg:px-24 mt-13 relative">
      <Logo />
      <HeaderNav />
      <Hamburger />
    </header>
  ); 
}
