import clsx from "clsx";
import Heading from "./heading";

export default function Career({ className, vector }) {
  return (
    <div
      className={`flex flex-col justify-center items-center px-8 md:px-12 lg:px-24 ${className}`}
    >
      <Heading className="mb-10">Career</Heading>
      <div className="flex justify-center items-center gap-x-9">
        {vector && <img src="/photos/vector-career.svg" className="hidden mb:block" />}
        <p
          className={clsx(
            "max-w-[793px] font-medium text-2xl text-center leading-none text-brand-blue",
            {
              "lg-text-center": vector === false,
              "lg-text-start": vector === true,
            }
          )}
        >
          You can send your CV to the following email address{" "}
          <span className="underline">net@digitello.net</span> so that we can
          contact you in case of new vacancies.
        </p>
      </div>
    </div>
  );
}
