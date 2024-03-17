import Career from "@/components/career";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Heading from "@/components/heading";

export default function AboutPage() {
  return (
    <>
      <Header />
      <div className="flex gap-x-32 px-8 md:px-12 lg:px-24 my-24">
        <div className="w-[480px] h-[360px] relative group">
          <img src="/photos/about-photo-1.jpg" className="opacity-25" />
          <div className="w-20 h-20 flex justify-center items-center rounded-full bg-[#e50000] opacity-0 group-hover:opacity-70 transition-opacity duration-500 cursor-pointer absolute inset-1/2 -translate-x-1/2 -translate-y-1/2">
            <img src="/photos/triangle.svg" className="ml-2" />
          </div>
        </div>

        <div className="max-w-[365px] flex flex-col gap-y-[17px] leading-none">
          <h3 className="font-black text-[40px] text-brand-green">
            We are here to <span className="text-brand-blue">show</span> the
            world <span className="text-brand-blue">your potential</span>
          </h3>

          <p className="font-medium text-2xl text-black">
            At your service since 2015
          </p>

          <p className="w-[515px] text-lg text-brand-black">
            We believe our unique approach sets us apart from the rest. Our
            focus on individuality and customization sets us apart in the world
            of off-the-shelf solutions. We pride ourselves on being different
            and offering a personalized experience to each of our customers.
          </p>
        </div>
      </div>

      <div className="flex gap-x-32 px-8 md:px-12 lg:px-24 mb-24 relative">
        <div className="flex flex-col gap-y-6">
          <h3 className="max-w-[300px] font-black text-[40px] leading-none text-brand-blue">
            We are unique, you are unique!
          </h3>

          <p className="max-w-[515px] text-lg leading-6 text-brand-black">
            We believe our unique approach sets us apart from the rest. Our
            focus on individuality and customization sets us apart in the world
            of off-the-shelf solutions. We pride ourselves on being different
            and offering a personalized experience to each of our customers.
          </p>

          <p className="max-w-[515px] text-lg leading-6 text-brand-black">
            With an array of cutting-edge tools and a team of seasoned experts,
            we don&apos;t just deliver projects; we craft transformative experiences
            that leave lasting impressions. Our dedication to excellence drives
            us to explore new avenues and stay ahead of the curve, ensuring you
            stay one step ahead of the competition.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-8">
          <div className="absolute -top-24 -z-10">
            <img src="/photos/circles-vector.png" />
          </div>
          <div className="flex flex-col justify-center gap-y-[6px] pl-4 w-[160px] h-[130px] rounded-[20px] bg-[#e7e7e7] mt-20">
            <p className="font-black text-3xl text-brand-black">34250+</p>
            <p className="font-medium text-lg text-brand-blue">Working hours</p>
          </div>

          <div className="flex flex-col justify-center gap-y-[6px] pl-4 w-[160px] h-[130px] rounded-[20px] bg-[#FFE4B4]">
            <p className="font-black text-3xl text-brand-black">124+</p>
            <p className="font-medium text-lg text-brand-blue">Project done</p>
          </div>

          <div className="flex flex-col justify-center gap-y-[6px] pl-4 w-[160px] h-[130px] rounded-[20px] bg-[#FFE4B4] mt-20">
            <p className="font-black text-3xl text-brand-black">80+</p>
            <p className="font-medium text-lg text-brand-blue">Happy client</p>
          </div>

          <div className="flex flex-col justify-center gap-y-[6px] pl-4 w-[160px] h-[130px] rounded-[20px] bg-[#e7e7e7]">
            <p className="font-black text-3xl text-brand-black">440+</p>
            <p className="font-medium text-lg text-brand-blue">Cup of coffee</p>
          </div>
        </div>
      </div>

      <div className="px-8 md:px-12 lg:px-24 mb-24">
        <Heading className="mb-[60px]">Our clients saying</Heading>
        <div className="flex justify-between gap-x-[30px]">
          <div className="flex flex-col items-center w-[270px] p-6 rounded-2xl border border-[#cbcbcb]">
            <div className="size-[140px] rounded-2xl mb-6">
              <img src="/photos/client-1.jpg" className="rounded-2xl" />
            </div>

            <h6 className="font-bold text-sm text-brand-blue mb-1">
              Name Surname
            </h6>
            <span className="text-xs text-black mb-4">Job Position</span>

            <p className="font-light text-xs text-center">
              Nullam finibus tellus et metus laoreet, at vestibulum lorem
              accumsan. In hac habitasse platea dictumst. Etiam ullamcorper quam
              eu felis fringilla, a porttitor libero mattis.
            </p>
          </div>

          <div className="flex flex-col items-center w-[270px] p-6 rounded-2xl border border-[#cbcbcb]">
            <div className="size-[140px] rounded-2xl mb-6">
              <img src="/photos/client-2.jpg" className="rounded-2xl" />
            </div>

            <h6 className="font-bold text-sm text-brand-blue mb-1">
              Name Surname
            </h6>
            <span className="text-xs text-black mb-4">Job Position</span>

            <p className="font-light text-xs text-center">
              Nullam finibus tellus et metus laoreet, at vestibulum lorem
              accumsan. In hac habitasse platea dictumst. Etiam ullamcorper quam
              eu felis fringilla, a porttitor libero mattis.
            </p>
          </div>

          <div className="flex flex-col items-center w-[270px] p-6 rounded-2xl border border-[#cbcbcb]">
            <div className="size-[140px] rounded-2xl mb-6">
              <img src="/photos/client-3.jpg" className="rounded-2xl" />
            </div>

            <h6 className="font-bold text-sm text-brand-blue mb-1">
              Name Surname
            </h6>
            <span className="text-xs text-black mb-4">Job Position</span>

            <p className="font-light text-xs text-center">
              Nullam finibus tellus et metus laoreet, at vestibulum lorem
              accumsan. In hac habitasse platea dictumst. Etiam ullamcorper quam
              eu felis fringilla, a porttitor libero mattis.
            </p>
          </div>

          <div className="flex flex-col items-center w-[270px] p-6 rounded-2xl border border-[#cbcbcb]">
            <div className="size-[140px] rounded-2xl mb-6">
              <img src="/photos/client-4.jpg" className="rounded-2xl" />
            </div>

            <h6 className="font-bold text-sm text-brand-blue mb-1">
              Name Surname
            </h6>
            <span className="text-xs text-black mb-4">Job Position</span>

            <p className="font-light text-xs text-center">
              Nullam finibus tellus et metus laoreet, at vestibulum lorem
              accumsan. In hac habitasse platea dictumst. Etiam ullamcorper quam
              eu felis fringilla, a porttitor libero mattis.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center h-[140px] px-8 md:px-12 lg:px-24 mb-24 bg-brand-yellow">
        <form className="flex items-center gap-[30px]">
          <input type="number" placeholder="Your phone number" className="w-[270px] h-9 rounded-[10px] text-xl text-center text-brand-black bg-white placeholder:text-[#cecece] focus-within:outline-none remove-arrow" />
          <input type="email" placeholder="Your e-mail" className="w-[270px] h-9 rounded-[10px] text-xl text-center text-brand-black bg-white placeholder:text-[#cecece] focus-within:outline-none" />

          <div className="flex items-center gap-x-2">
            <span className="block size-5 bg-white"></span>
            <span className="text-white underline cursor-pointer">Captcha</span>
          </div>

          <button className="py-2 px-8 rounded-[10px] text-xl text-white bg-brand-blue hover:bg-brand-green transition-colors cursor-pointer">Submit</button>
        </form>

        <p className="font-bold text-[30px] text-black">Say hello to us!</p>
      </div>

      <Career className="mb-24" vector={true} />

      <div>
        <Heading className="mb-[60px]">Team</Heading>

        <div className="flex justify">

        </div>
      </div>
      <Footer />
    </>
  );
}
