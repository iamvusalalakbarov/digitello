import Header from "./components/header";
import Footer from "./components/footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <div className="flex justify-center px-8 md:px-12 lg:px-24 mt-24">
        <p className="font-medium text-lg text-brand-black">Related page could not be found (404).</p>
      </div>
      <Footer />
    </>
  );
}
