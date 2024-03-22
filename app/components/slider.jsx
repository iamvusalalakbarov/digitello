import ReadMoreButton from "./read-more-button";

export default function Slider({ className }) {
  return (
    <div
      className={`flex justify-center gap-x-[10vw] px-8 md:px-12 lg:px-24 mt-36 ${className}`}
    >
      <div className="flex flex-col gap-y-10 leading-none">
        <h1 className="max-w-[406px] font-black text-[52px] text-brand-blue ">
          Your Keyword in Digital World!
        </h1>
        <p className="max-w-[393px] font-light text-[26px] text-brand-black">
          Advertise, analyze, and optimize! We do it all for you!
        </p>
        <ReadMoreButton />
      </div>
      <div className="hidden md:block w-[560px] h-[64vh] max-h-[480px] border-[41px] border-brand-yellow border-b-0 relative">
        <img
          src="/photos/slider-man.png"
          alt="Slider Man"
          className="w-[380px] absolute bottom-0 left-1/2 -translate-x-1/2 z-10"
        />
      </div>
    </div>
  );
}
