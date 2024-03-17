import Link from "next/link";

export default function SocialLink({ href, width, height, d }) {
  return (
    <Link
      href={href}
      className="font-bold text-lg text-brand-blue hover:text-brand-black transition-colors group"
    >
      <svg width={width} height={height} fill="none">
        <path d={d} className="fill-brand-blue group-hover:fill-brand-black transition-all" />
      </svg>
    </Link>
  );
}
