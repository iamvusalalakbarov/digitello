export default function Heading({ children, className }) {
  return (
    <div className={`flex justify-center ${className}`}>
      <h2 className="font-bold text-[32px] text-brand-blue relative before:content-[''] before:w-[26px] before:h-[30px] before:rounded-l before:rounded-r-[50%] before:bg-brand-yellow before:absolute before:-left-1 before:top-1/2 before:-translate-y-1/2 before:-z-10">
        {children}
      </h2>
    </div>
  );
}
