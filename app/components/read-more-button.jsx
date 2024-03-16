import Link from "next/link";

export default function ReadMoreButton() {
  return (
    <Link href="./about">
      <button className="w-36 py-3 px-8 rounded-[10px] font-medium text-brand-black bg-brand-yellow transition-colors hover:text-brand-yellow hover:bg-brand-blue cursor-pointer">
        Read More
      </button>
    </Link>
  );
}
