import Link from "next/link";

export default function FooterLink({ href, children }) {
  return (
    <Link
      href={href}
      className="font-bold text-lg text-brand-blue hover:text-brand-black transition-colors"
    >
      {children}
    </Link>
  );
}
