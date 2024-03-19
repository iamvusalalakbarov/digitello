import clsx from "clsx";

export default function Hamburger({ onClick, isMobileMenuOpen }) {
  return (
    <label
      className="flex flex-col gap-y-[2.8px] cursor-pointer relative"
      onClick={onClick}
    >
      <div
        className={clsx(
          "flex justify-between items-center w-6 h-[5px] transition-transform duration-500",
          {
            "absolute inset-0 rotate-45": isMobileMenuOpen,
          }
        )}
      >
        <div className="w-full h-full rounded bg-brand-blue"></div>
        <div
          className={clsx(
            "w-1 h-full rounded-r rounded-l-[1px] bg-brand-green ml-[1px]",
            {
              hidden: isMobileMenuOpen,
            }
          )}
        ></div>
      </div>
      <div
        className={clsx(
          "w-6 h-[5px] rounded bg-brand-yellow transition-all duration-500",
          {
            "opacity-0 duration-75": isMobileMenuOpen,
          }
        )}
      ></div>
      <div
        className={clsx(
          "w-6 h-[5px] rounded bg-brand-blue transition-transform duration-500",
          {
            "absolute inset-0 -rotate-45": isMobileMenuOpen,
          }
        )}
      ></div>
    </label>
  );
}
