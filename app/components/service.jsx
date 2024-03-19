import Link from "next/link";
import Image from "next/image";
import Heading from "./heading";

const services = [
  {
    id: 1,
    iconURL: "/service-icons/web-dev-icon.svg",
    name: "Web development",
    description:
      "Lorem ipsum dolor sit amet. Etiam dolor lacus, ultrices sed est vitae, semper sollicitudin turpis.",
    href: "./service/web-development",
  },
  {
    id: 2,
    iconURL: "/service-icons/smm-icon.svg",
    name: "SMM",
    description:
      "Lorem ipsum dolor sit amet. Etiam dolor lacus, ultrices sed est vitae, semper sollicitudin turpis.",
    href: "./service/smm",
  },
  {
    id: 3,
    iconURL: "/service-icons/seo-icon.svg",
    name: "SEO",
    description:
      "Lorem ipsum dolor sit amet. Etiam dolor lacus, ultrices sed est vitae, semper sollicitudin turpis.",
    href: "./service/seo",
  },
  {
    id: 4,
    iconURL: "/service-icons/graphic-design-icon.svg",
    name: "Graphic design",
    description:
      "Lorem ipsum dolor sit amet. Etiam dolor lacus, ultrices sed est vitae, semper sollicitudin turpis.",
    href: "./service/graphic-design",
  },
  {
    id: 5,
    iconURL: "/service-icons/branding-icon.svg",
    name: "Brand building",
    description:
      "Lorem ipsum dolor sit amet. Etiam dolor lacus, ultrices sed est vitae, semper sollicitudin turpis.",
    href: "./service/brand-building",
  },
  {
    id: 6,
    iconURL: "/service-icons/tech-support-icon.svg",
    name: "Technical support",
    description:
      "Lorem ipsum dolor sit amet. Etiam dolor lacus, ultrices sed est vitae, semper sollicitudin turpis.",
    href: "./service/technical-support",
  },
  {
    id: 7,
    iconURL: "/service-icons/copywriting-icon.svg",
    name: "Copywriting",
    description:
      "Lorem ipsum dolor sit amet. Etiam dolor lacus, ultrices sed est vitae, semper sollicitudin turpis.",
    href: "./service/copywriting",
  },
  {
    id: 8,
    iconURL: "/service-icons/motion-design-icon.svg",
    name: "Motion and 3D design",
    description:
      "Lorem ipsum dolor sit amet. Etiam dolor lacus, ultrices sed est vitae, semper sollicitudin turpis.",
    href: "./service/motion-and-3d-design",
  },
];

export default function Service({ className }) {
  return (
    <div className={`${className}`}>
      <Heading className="mb-10">Service</Heading>
      <ul className="flex flex-col lg:flex-row justify-center items-center lg:flex-wrap gap-10">
        {services.map((service) => (
          <li key={service.id}>
            <Link
              href={service.href}
              className="flex flex-col justify-between items-center gap-y-8 w-[253px] py-6 rounded-[10px] border border-[#cecece]"
            >
              <div className="grid place-items-center w-[60px] h-[60px] rounded-[5px] bg-brand-blue">
                <Image
                  src={service.iconURL}
                  width={36}
                  height={36}
                  alt={service.name}
                />
              </div>

              <h3 className="font-medium text-xl text-brand-black">
                {service.name}
              </h3>

              <p className="max-w-[217px] text-sm text-center text-[#474747]">
                {service.description}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
