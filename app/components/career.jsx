import Heading from "./heading";

export default function Career({ className }) {
  return (
    <div className={`flex flex-col justify-center items-center px-8 md:px-12 lg:px-24 ${className}`}>
      <Heading className="mb-10">Career</Heading>
      <p className="max-w-[793px] font-medium text-2xl text-center leading-none text-brand-blue">
        You can send your CV to the following email address{" "}
        <span className="underline">net@digitello.net</span> so that we can contact you in case of new
        vacancies.
      </p>
    </div>
  );
}
