import ReadMoreButton from "./read-more-button";
import Image from "next/image";

export default function About({ className }) {
  return (
    <div
      className={`flex justify-center items-center gap-x-16 px-8 md:px-12 lg:px-24 ${className}`}
    >
      <Image
        src={"/photos/descomposition-person-wearing-vr-glasses.jpg"}
        width={520}
        height={310}
        alt="Descomposition Person Wearing VR Glasses"
        unoptimized
        className="hidden lg:block"
      />
      <div className="flex flex-col gap-y-8 leading-none">
        <h3 className="max-w-[394px] font-medium text-[52px] text-brand-blue">
          Your Keyword in Digital World!
        </h3>
        <p className="max-w-[574px] text-lg leading-tight text-brand-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          vulputate mollis euismod. Etiam auctor rutrum nunc ac congue. Nam eget
          enim a purus fringilla luctus. Ut suscipit eu tellus eu maximus. Nulla
          congue lobortis feugiat.
        </p>
        <ReadMoreButton />
      </div>
    </div>
  );
}
