import Header from "./components/header";
import Slider from "./components/slider";
import Partners from "./components/partners";
import About from "./components/about";
import Service from "./components/service";
import Portfolio from "./components/portfolio";
import Career from "./components/career";
import Blog from "./components/blog";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <Slider className="mb-28" />
      <Partners className="mb-32" />
      <About className="mb-24" />
      <Service className="mb-24" />
      <Portfolio className="mb-24" />
      <Career className="mb-24" />
      <Blog className="mb-24" />
      <Footer />
    </>
  );
}
