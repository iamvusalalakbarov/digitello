import Link from "next/link";

export default function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="font-bold text-lg text-brand-blue transition-colors hover:text-brand-green"
    >
      {children}
    </Link>
  );
}
