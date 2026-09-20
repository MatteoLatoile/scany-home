import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/home/Hero";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import Services from "@/components/home/Services";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <FeaturedProperties />
        <Services />
      </main>

      <Footer />
    </>
  );
}