import NavLink from "./nav-link";

export default function HeaderNav({ className }) {
  return (
    <nav className={`hidden lg:block ${className}`}>
      <ul className="flex justify-center items-center gap-x-6">
        <li>
          <NavLink href={"./about"}>About</NavLink>
        </li>
        <li>
          <NavLink href={"./service"}>Service</NavLink>
        </li>
        <li>
          <NavLink href={"./portfolio"}>Portfolio</NavLink>
        </li>
        <li>
          <NavLink href={"./blog"}>Blog</NavLink>
        </li>
        <li>
          <NavLink href={"./career"}>Career</NavLink>
        </li>
        <li>
          <NavLink href={"./contact"}>Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}
