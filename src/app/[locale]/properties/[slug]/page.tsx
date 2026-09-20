import {
  ArrowLeft,
  Bath,
  BedDouble,
  Building2,
  Check,
  Layers3,
  MapPin,
  Maximize2,
  MessageCircle,
  Sofa,
} from "lucide-react";

import {
  notFound,
} from "next/navigation";

import {
  getTranslations,
} from "next-intl/server";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import {
  Link,
} from "@/i18n/navigation";

import {
  getPropertyBySlug,
  properties,
} from "@/data/properties";

import {
  PropertyLocale,
} from "@/types/property";

import {
  getWhatsAppUrl,
} from "@/lib/whatsapp";

type Props = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export function generateStaticParams() {
  return properties.map(
    (property) => ({
      slug: property.slug,
    })
  );
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

  return (
    <>
      <Header />

      <main className="bg-[#f7f9fc]">

        {/* HEADER */}

        <section className="border-b border-slate-100 bg-white">
          <div className="mx-auto max-w-7xl px-5 pb-8 pt-7 lg:px-8">

            <Link
              href="/properties"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-[#148ad7]"
            >
              <ArrowLeft
                size={17}
                className="rtl:rotate-180"
              />

              {t("back")}
            </Link>

            <div className="mt-7 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

              <div>
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-[#148ad7]/10 px-3 py-1.5 text-xs font-bold text-[#148ad7]">
                    {t(
                      `types.${property.type}`
                    )}
                  </span>

                  <span className="text-xs text-slate-400">
                    {t("reference")}{" "}
                    {property.reference}
                  </span>
                </div>

                <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                  {
                    property.title[
                      locale
                    ]
                  }
                </h1>

                <div className="mt-4 flex items-center gap-2 text-slate-500">
                  <MapPin
                    size={18}
                    className="text-[#e7aa39]"
                  />

                  {
                    property.district[
                      locale
                    ]
                  }
                  ,{" "}
                  {
                    property.city[
                      locale
                    ]
                  }
                </div>
              </div>

              <div className="rounded-2xl bg-[#148ad7]/5 px-5 py-4">
                <div className="text-sm text-slate-400">
                  {t("price")}
                </div>

                <div className="mt-1 text-3xl font-bold text-[#148ad7]">
                  {property.price.toLocaleString()}{" "}
                  <span className="text-lg">
                    SAR
                  </span>
                </div>

                <div className="mt-1 text-sm font-medium text-slate-500">
                  {t(
                    `rent.${property.rentType}`
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GALLERY */}

        <section className="mx-auto max-w-7xl px-5 py-7 lg:px-8">
          <div className="grid gap-3 overflow-hidden rounded-[30px] lg:grid-cols-2">

            <img
              src={
                property.images[0]
              }
              alt={
                property.title[
                  locale
                ]
              }
              className="h-[420px] w-full object-cover lg:h-[560px]"
            />

            <div className="grid grid-cols-2 gap-3">
              {property.images
                .slice(1, 5)
                .map(
                  (
                    image,
                    index
                  ) => (
                    <img
                      key={`${image}-${index}`}
                      src={image}
                      alt={
                        property
                          .title[
                          locale
                        ]
                      }
                      className={`h-full min-h-[200px] w-full object-cover ${
                        property
                          .images
                          .length ===
                        2
                          ? "col-span-2"
                          : ""
                      }`}
                    />
                  )
                )}
            </div>
          </div>
        </section>

        {/* BODY */}

        <section className="mx-auto grid max-w-7xl gap-8 px-5 pb-20 lg:grid-cols-[minmax(0,1fr)_360px] lg:px-8">

          <div className="space-y-7">

            {/* STATS */}

            <div className="grid grid-cols-2 gap-3 rounded-[28px] border border-slate-100 bg-white p-5 shadow-sm md:grid-cols-5">

              <Stat
                icon={BedDouble}
                label={t("bedrooms")}
                value={
                  property.bedrooms
                }
              />

              <Stat
                icon={Bath}
                label={t("bathrooms")}
                value={
                  property.bathrooms
                }
              />

              <Stat
                icon={Sofa}
                label={t("livingRooms")}
                value={
                  property.livingRooms
                }
              />

              <Stat
                icon={Maximize2}
                label={t("area")}
                value={`${property.area} m²`}
              />

              <Stat
                icon={Layers3}
                label={t("floor")}
                value={
                  property.floor
                }
              />
            </div>

            {/* DESCRIPTION */}

            <div className="rounded-[28px] border border-slate-100 bg-white p-7 shadow-sm">
              <h2 className="text-xl font-bold">
                {t("description")}
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                {
                  property
                    .description[
                    locale
                  ]
                }
              </p>
            </div>

            {/* FEATURES */}

            <div className="rounded-[28px] border border-slate-100 bg-white p-7 shadow-sm">
              <h2 className="text-xl font-bold">
                {t("features")}
              </h2>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {property.features.map(
                  (feature) => (
                    <div
                      key={
                        feature
                      }
                      className="flex items-center gap-3"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#148ad7]/10 text-[#148ad7]">
                        <Check
                          size={17}
                        />
                      </div>

                      <span className="text-sm font-medium text-slate-700">
                        {t(
                          `featureLabels.${feature}`
                        )}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* CONTACT CARD */}

          <aside>
            <div className="sticky top-28 rounded-[30px] border border-slate-100 bg-white p-6 shadow-xl shadow-slate-200/60">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#148ad7]/10 text-[#148ad7]">
                <Building2
                  size={23}
                />
              </div>

              <h2 className="mt-5 text-xl font-bold">
                {t("contact.title")}
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                {t(
                  "contact.description"
                )}
              </p>

              <a
                href={getWhatsAppUrl(
                  property,
                  locale
                )}
                target="_blank"
                rel="noreferrer"
                className="mt-6 flex w-full items-center justify-center gap-3 rounded-2xl bg-[#22c55e] px-5 py-4 font-bold text-white shadow-sm transition hover:bg-[#16a34a] hover:shadow-lg"
              >
                <MessageCircle
                  size={21}
                />

                {t(
                  "contact.whatsapp"
                )}
              </a>

              <div className="mt-5 border-t border-slate-100 pt-5 text-center text-xs text-slate-400">
                {t("reference")}{" "}
                {property.reference}
              </div>
            </div>
          </aside>
        </section>
      </main>

      <Footer />
    </>
  );
}

function Stat({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string | number;
}) {
  return (
    <div className="rounded-2xl bg-slate-50 p-4 transition hover:bg-[#148ad7]/5">
      <Icon
        size={20}
        className="text-[#148ad7]"
      />

      <div className="mt-4 text-lg font-bold">
        {value}
      </div>

      <div className="mt-1 text-xs text-slate-400">
        {label}
      </div>
    </div>
  );
}