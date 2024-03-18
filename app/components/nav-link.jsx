import Link from "next/link";

export default function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="block font-bold text-lg text-brand-blue transition-colors hover:text-brand-green p-4 lg:p-0"
    >
      {children}
    </Link>
  );
}
