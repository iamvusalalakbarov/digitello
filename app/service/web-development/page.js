import Image from "next/image";
import Header from "@/components/header";
import Heading from "@/components/heading";
import Footer from "@/components/footer";

export const metadata = {
  title: "Web Development",
};

export default function WebDevelopmentPage() {
  return (
    <>
      <Header />
      <div className="px-8 md:px-12 lg:px-24 mt-24 mb-[352px]">
        <Heading className="mb-16">Web development</Heading>
        <div className="flex gap-x-32">
          <Image
            src={"/photos/web-dev-vector.svg"}
            width={470}
            height={300}
            alt="Vector image about web development"
            className="hidden lg:block"
          />

          <div className="max-w-[365px] flex flex-col justify-between gap-y-[17px] leading-none">
            <h3 className="font-black text-[40px] text-brand-green">
              We are here to <span className="text-brand-blue">show</span> the
              world <span className="text-brand-blue">your potential</span>
            </h3>

            <p className="font-medium text-2xl text-black">
              At your service since 2015
            </p>

            <p className="max-w-[515px] text-lg text-brand-black">
              We believe our unique approach sets us apart from the rest. Our
              focus on individuality and customization sets us apart in the
              world of off-the-shelf solutions. We pride ourselves on being
              different and offering a personalized experience to each of our
              customers.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
