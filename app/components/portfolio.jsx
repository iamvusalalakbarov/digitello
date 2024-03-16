import Heading from "./heading";

export default function Portfolio({ className }) {
  return (
    <div className={`px-8 md:px-12 lg:px-24 ${className}`}>
      <Heading className="mb-10">Portfolio</Heading>
      <ul className="flex flex-wrap justify-between items-center gap-y-8">
        <li>
          <img src="/photos/portfolio-photo-1.png" />
        </li>
        <li>
          <img src="/photos/portfolio-photo-2.png" />
        </li>
        <li>
          <img src="/photos/portfolio-photo-3.png" />
        </li>
        <li>
          <img src="/photos/portfolio-photo-4.png" />
        </li>
        <li>
          <img src="/photos/portfolio-photo-5.png" />
        </li>
      </ul>
    </div>
  );
}
