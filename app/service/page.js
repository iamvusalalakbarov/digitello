import Header from "@/components/header";
import Service from "@/components/service";
import Footer from "@/components/footer";

export const metadata = {
  title: "Service",
};


export default function ServicePage() {
  return (
    <>
      <Header />
      <Service className="my-24" />
      <Footer />
    </>
  );
}
