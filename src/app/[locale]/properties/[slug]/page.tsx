import { notFound } from "next/navigation";

import { getTranslations } from "next-intl/server";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import {
  getPropertyBySlug,
  properties,
} from "@/data/properties";

import { PropertyLocale } from "@/types/property";

import { getWhatsAppUrl } from "@/lib/whatsapp";

import PropertyHero from "@/components/properties/PropertyHero";
import StatsBar from "@/components/properties/StatsBar";
import PropertyBody from "@/components/properties/PropertyBody";
import ContactCard from "@/components/properties/ContactCard";
import MobileStickyBar from "@/components/properties/MobileStickyBar";

type Props = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export function generateStaticParams() {
  return properties.map((property) => ({
    slug: property.slug,
  }));
}

export default async function PropertyPage({
  params,
}: Props) {
  const {
    locale: localeParam,
    slug,
  } = await params;

  const locale =
    localeParam as PropertyLocale;

  const property =
    getPropertyBySlug(slug);

  if (!property) {
    notFound();
  }

  const t = await getTranslations({
    locale,
    namespace: "propertyDetails",
  });

  const stats = [
    {
      icon: "bed" as const,
      label: t("bedrooms"),
      value: property.bedrooms,
    },
    {
      icon: "bath" as const,
      label: t("bathrooms"),
      value: property.bathrooms,
    },
    {
      icon: "sofa" as const,
      label: t("livingRooms"),
      value: property.livingRooms,
    },
    {
      icon: "area" as const,
      label: t("area"),
      value: `${property.area} m²`,
    },
    {
      icon: "floor" as const,
      label: t("floor"),
      value: property.floor,
    },
  ];

  const features = property.features.map(
    (feature) => ({
      key: feature,
      label: t(`featureLabels.${feature}`),
    })
  );

  const whatsappUrl = getWhatsAppUrl(
    property,
    locale
  );

  return (
    <>
      <Header />

      <main className="bg-[#f7f9fc] pb-10">
        <PropertyHero
          images={property.images}
          title={property.title[locale]}
          badge={t(
            `types.${property.type}`
          )}
          location={`${property.district[locale]}, ${property.city[locale]}`}
          backLabel={t("back")}
        />

        <StatsBar
          stats={stats}
          price={property.price}
          priceLabel={t("price")}
          rentLabel={t(
            `rent.${property.rentType}`
          )}
        />

        <section className="mx-auto mt-10 grid max-w-7xl gap-8 px-5 lg:grid-cols-[minmax(0,1fr)_360px] lg:px-8">
          <PropertyBody
            descriptionTitle={t(
              "description"
            )}
            description={
              property.description[
                locale
              ]
            }
            featuresTitle={t(
              "features"
            )}
            features={features}
          />

          <aside>
            <ContactCard
              title={t(
                "contact.title"
              )}
              description={t(
                "contact.description"
              )}
              whatsappUrl={
                whatsappUrl
              }
              whatsappLabel={t(
                "contact.whatsapp"
              )}
              reference={
                property.reference
              }
              referenceLabel={t(
                "reference"
              )}
            />
          </aside>
        </section>
      </main>

      <MobileStickyBar
        price={property.price}
        rentLabel={t(
          `rent.${property.rentType}`
        )}
        whatsappUrl={whatsappUrl}
        whatsappLabel={t(
          "contact.whatsapp"
        )}
      />

      <Footer />
    </>
  );
}