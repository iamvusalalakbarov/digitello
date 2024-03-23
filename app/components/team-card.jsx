export default function TeamCard({
  name,
  position,
  description,
  background,
  onTouchStart,
  innerStyle,
}) {
  return (
    <div
      className={`w-[240px] h-[320px] group ${background}`}
      onTouchStart={onTouchStart}
    >
      <div className={`flex flex-col items-center h-full pt-11 pb-6 bg-brand-blue/75 opacity-0 group-hover:lg:opacity-100 transition-opacity duration-500 ${innerStyle}`}>
        <h4 className="font-black text-3xl text-white leading-none">{name}</h4>
        <span className="font-bold text-xl text-brand-yellow leading-none mb-5">
          {position}
        </span>
        <p className="max-w-[220px] font-medium text-xl text-center text-white leading-none">
          {description}
        </p>
      </div>
    </div>
  );
}
