"use client";

import {
  Bath,
  BedDouble,
  Heart,
  MapPin,
  Maximize2,
  MessageCircle,
} from "lucide-react";

import {
  useTranslations,
} from "next-intl";

import {
  Link,
} from "@/i18n/navigation";

import {
  Property,
  PropertyLocale,
} from "@/types/property";

import {
  getWhatsAppUrl,
} from "@/lib/whatsapp";

type Props = {
  property: Property;
  locale: PropertyLocale;
};

export default function PropertyCard({
  property,
  locale,
}: Props) {
  const t =
    useTranslations("propertyCard");

  const rentType =
    t(`rent.${property.rentType}`);

  return (
    <article className="group overflow-hidden rounded-[28px] border border-slate-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* IMAGE */}

      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={property.images[0]}
          alt={property.title[locale]}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* RENT TYPE */}

        <div className="absolute end-4 top-4 rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-[#148ad7] shadow-sm backdrop-blur">
          {rentType}
        </div>

        {/* FAVORITE */}

        <button
          className="absolute start-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-slate-700 shadow-sm transition hover:scale-105 hover:text-red-500"
          aria-label={t("favorite")}
        >
          <Heart size={18} />
        </button>
      </div>

      {/* CONTENT */}

      <div className="p-5">
        <div className="mb-2 flex items-center gap-1.5 text-sm text-slate-500">
          <MapPin
            size={15}
            className="shrink-0 text-[#e7aa39]"
          />

          <span className="truncate">
            {property.district[locale]}
            ,{" "}
            {property.city[locale]}
          </span>
        </div>

        <Link
          href={`/properties/${property.slug}`}
          className="block"
        >
          <h2 className="line-clamp-2 min-h-[56px] text-lg font-bold leading-7 text-slate-900 transition hover:text-[#148ad7]">
            {property.title[locale]}
          </h2>
        </Link>

        {/* DETAILS */}

        <div className="mt-4 flex flex-wrap gap-4 border-b border-slate-100 pb-4 text-sm text-slate-500">

          <span
            className="flex items-center gap-1.5"
            title={t("bedrooms")}
          >
            <BedDouble
              size={17}
              className="text-[#148ad7]"
            />

            {property.bedrooms}
          </span>

          <span
            className="flex items-center gap-1.5"
            title={t("bathrooms")}
          >
            <Bath
              size={17}
              className="text-[#148ad7]"
            />

            {property.bathrooms}
          </span>

          <span
            className="flex items-center gap-1.5"
            title={t("area")}
          >
            <Maximize2
              size={16}
              className="text-[#148ad7]"
            />

            {property.area} m²
          </span>
        </div>

        {/* PRICE */}

        <div className="mt-4 flex items-center justify-between gap-4">
          <div>
            <div className="text-xs font-medium text-slate-400">
              {t("price")}
            </div>

            <div className="mt-1 text-xl font-bold text-[#148ad7]">
              {property.price.toLocaleString()}{" "}
              <span className="text-sm">
                SAR
              </span>
            </div>
          </div>

          {/* WHATSAPP */}

          <a
            href={getWhatsAppUrl(
              property,
              locale
            )}
            target="_blank"
            rel="noreferrer"
            title={t("whatsapp")}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#22c55e] text-white shadow-sm transition hover:scale-105 hover:bg-[#16a34a]"
          >
            <MessageCircle
              size={20}
            />
          </a>
        </div>
      </div>
    </article>
  );
}