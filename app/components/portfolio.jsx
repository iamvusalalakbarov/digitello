import Heading from "./heading";
import Image from "next/image";

export default function Portfolio({ className }) {
  return (
    <div className={`px-8 md:px-12 lg:px-24 ${className}`}>
      <Heading className="mb-10">Portfolio</Heading>
      <div className="flex justify-center items-center">
        <div className="flex flex-wrap justify-between items-stretch gap-y-[2vw] lg:gap-y-8 w-[80vw] max-w-[1136px] aspect-[142/79]">
          <div className="relative w-[22%] aspect-[127/150]">
            <Image
              src={"/photos/portfolio-photo-1.png"}
              alt="Portfolio Photo 1"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <div className="relative w-[48%] aspect-[136/75]">
            <Image
              src={"/photos/portfolio-photo-2.png"}
              alt="Portfolio Photo 2"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <div className="relative w-[22%] aspect-[127/150]">
            <Image
              src={"/photos/portfolio-photo-3.png"}
              alt="Portfolio Photo 3"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <div className="relative w-[48%] aspect-[136/75]">
            <Image
              src={"/photos/portfolio-photo-4.png"}
              alt="Portfolio Photo 4"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <div className="relative w-[48%] aspect-[136/75]">
            <Image
              src={"/photos/portfolio-photo-5.png"}
              alt="Portfolio Photo 5"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>
      </div>
    </div>
  );
}
