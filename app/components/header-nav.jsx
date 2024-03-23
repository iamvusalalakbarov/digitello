import NavLink from "./nav-link";

export default function HeaderNav({ className }) {
  return (
    <nav className={`w-full lg:w-auto absolute lg:top-0 left-1/2 -translate-x-1/2 -z-20 lg:-z-0 mt-4 lg:mt-0 bg-white transition-all duration-700 lg:duration-0 ${className}`}>
      <ul className="flex flex-col lg:flex-row justify-center items-center gap-x-6 [&>li]:w-full lg:[&>li]:w-auto [&>li]:text-center">
        <li>
          <NavLink href={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink href={"/service"}>Service</NavLink>
        </li>
        <li>
          <NavLink href={"/portfolio"}>Portfolio</NavLink>
        </li>
        <li>
          <NavLink href={"/blog"}>Blog</NavLink>
        </li>
        <li>
          <NavLink href={"/career"}>Career</NavLink>
        </li>
        <li>
          <NavLink href={"/contact"}>Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}
