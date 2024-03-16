import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href={"."}>
      <Image
        src={"./logos/digitello-logo.svg"}
        width={122}
        height={25}
        alt="Digitello Logo"
      />
    </Link>
  );
}
