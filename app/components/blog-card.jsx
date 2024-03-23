import Link from "next/link";

export default function BlogCard({ imageURL, onMouseEnter, innerStyle }) {
  return (
    <div className="w-[280px] h-[400px] relative group" onMouseEnter={onMouseEnter}>
      <img src={imageURL} className="absolute inset-0 -z-10" />
      <div className={`w-full h-full flex flex-col justify-between py-6 px-3 bg-brand-blue/75 opacity-0 group-hover:opacity-100 transition-all duration-500 ${innerStyle}`}>
        <h6 className="font-bold text-3xl text-[#fff] leading-none">
          Curabitur felis ligula, gravida ut venenatis nec, accumsan et sem.
        </h6>

        <p className="text-xl text-[#fff] leading-none">
          Nulla ornare, sem fringilla porta efficitur, leo turpis ornare diam,
          ut egestas nunc leo commodo mauris. Etiam dapibus mi quis vehicula
          venenatis. Cras orci erat, auctor in vulputate vel, iaculis sed nisi.
          In ac sem ac ...
        </p>

        <Link
          href="/blog"
          className="font-bold text-lg text-brand-yellow hover:text-[#fff] transition-colors"
        >
          read more...
        </Link>
      </div>
    </div>
  );
}
