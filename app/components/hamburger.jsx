export default function Hamburger() {
  return (
    <div className="flex flex-col gap-y-[2.8px] lg:hidden">
      <div className="flex items-center gap-x-px h-[5px]">
        <div className="w-5 h-full rounded bg-brand-blue"></div>
        <div className="w-1 h-full rounded-r rounded-l-[1px] bg-brand-green"></div>
      </div>
      <div className="w-6 h-[5px] rounded bg-brand-yellow"></div>
      <div className="w-6 h-[5px] rounded bg-brand-blue"></div>
    </div>
  );
}
