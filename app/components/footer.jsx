import Link from "next/link";
import WhiteLogo from "./white-logo";

export default function Footer() {
  return (
    <footer className="h-[196px] flex">
      <div className="bg-brand-black pl-8 md:pl-12 lg:pl-24 pr-20 pt-9">
        <WhiteLogo />
        <p className="text-[#fff] pt-8">
          Hyatt Tower II, 6th floor <br />
          AZ1025 - Baku, Azerbaijan <br />
          +994 55 221 62 81
        </p>
      </div>
      <div className="flex-1 bg-brand-yellow pr-8 md:pr-12 lg:pr-24 pt-8 pl-20">
        <div className="flex justify-between items-end">
          <ul className="grid grid-cols-2 gap-x-16">
            <li>
              <Link
                href="/about"
                className="font-bold text-lg text-brand-blue hover:text-brand-black transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/service"
                className="font-bold text-lg text-brand-blue hover:text-brand-black transition-colors"
              >
                Service
              </Link>
            </li>
            <li>
              <Link
                href="/portfolio"
                className="font-bold text-lg text-brand-blue hover:text-brand-black transition-colors"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="font-bold text-lg text-brand-blue hover:text-brand-black transition-colors"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/career"
                className="font-bold text-lg text-brand-blue hover:text-brand-black transition-colors"
              >
                Career
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="font-bold text-lg text-brand-blue hover:text-brand-black transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>

          <ul className="grid grid-cols-6 gap-y-6 gap-x-9">
            <li>
              <Link href="">
                <img src="/social-icons/facebook.svg" />
              </Link>
            </li>
            <li>
              <Link href="">
                <img src="/social-icons/behance.svg" />
              </Link>
            </li>
            <li>
              <Link href="">
                <img src="/social-icons/facebook.svg" />
              </Link>
            </li>
            <li>
              <Link href="">
                <img src="/social-icons/instagram.svg" />
              </Link>
            </li>
            <li>
              <Link href="">
                <img src="/social-icons/twitter.svg" />
              </Link>
            </li>
            <li>
              <Link href="">
                <img src="/social-icons/whatsapp.svg" />
              </Link>
            </li>
            <li>
              <Link href="">
                <img src="/social-icons/linkedin.svg" />
              </Link>
            </li>
            <li>
              <Link href="">
                <img src="/social-icons/pinterest.svg" />
              </Link>
            </li>
            <li>
              <Link href="">
                <img src="/social-icons/telegram.svg" />
              </Link>
            </li>
            <li>
              <Link href="">
                <img src="/social-icons/tiktok.svg" />
              </Link>
            </li>
            <li>
              <Link href="">
                <img src="/social-icons/youtube.svg" />
              </Link>
            </li>
            <li>
              <Link href="">
                <img src="/social-icons/maps.svg" />
              </Link>
            </li>
          </ul>
        </div>

        <p className="font-medium text-sm text-brand-blue mt-10">
          Developed by <span className="underline">Digitello</span>. All rights reserved 2023
        </p>
      </div>
    </footer>
  );
}
