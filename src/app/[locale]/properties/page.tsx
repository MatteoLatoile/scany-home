import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import PropertiesExplorer from "@/components/properties/PropertiesExplorer";

export default function PropertiesPage() {
  return (
    <>
      <Header />

      <main>
        <PropertiesExplorer />
      </main>

      <Footer />
    </>
  );
}