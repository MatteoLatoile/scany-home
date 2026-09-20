"use client";

import dynamic from "next/dynamic";

import {
  Banknote,
  BedDouble,
  Building2,
  CalendarDays,
  ChevronDown,
  RotateCcw,
  Search,
  SlidersHorizontal,
  Sofa,
} from "lucide-react";

import {
  useLocale,
  useTranslations,
} from "next-intl";

import {
  useMemo,
  useState,
} from "react";

import { properties } from "@/data/properties";

import PropertyCard from "./PropertyCard";

import {
  PropertyLocale,
} from "@/types/property";

const PropertyMap = dynamic(
  () => import("./PropertyMap"),
  {
    ssr: false,

    loading: () => (
      <div className="flex h-[600px] items-center justify-center bg-slate-100 text-sm text-slate-400">
        Loading map...
      </div>
    ),
  }
);

function SelectBox({
  value,
  onChange,
  children,
  icon: Icon,
}: {
  value: string;
  onChange: (value: string) => void;
  children: React.ReactNode;
  icon: React.ElementType;
}) {
  return (
    <div className="group relative">
      <Icon
        size={18}
        className="pointer-events-none absolute start-4 top-1/2 z-10 -translate-y-1/2 text-[#148ad7]"
      />

      <select
        value={value}
        onChange={(event) =>
          onChange(event.target.value)
        }
        className="
          h-[52px]
          w-full
          appearance-none
          rounded-2xl
          border
          border-slate-200
          bg-white
          ps-11
          pe-10
          text-sm
          font-semibold
          text-slate-700
          shadow-sm
          outline-none
          transition-all
          duration-200
          hover:border-[#148ad7]/40
          hover:shadow-md
          focus:border-[#148ad7]
          focus:ring-4
          focus:ring-[#148ad7]/10
        "
      >
        {children}
      </select>

      <ChevronDown
        size={16}
        className="
          pointer-events-none
          absolute
          end-4
          top-1/2
          -translate-y-1/2
          text-slate-400
          transition
          group-hover:text-[#148ad7]
        "
      />
    </div>
  );
}

export default function PropertiesExplorer() {
  const locale =
    useLocale() as PropertyLocale;

  const t =
    useTranslations("propertiesPage");

  const [search, setSearch] =
    useState("");

  const [type, setType] =
    useState("all");

  const [rentType, setRentType] =
    useState("all");

  const [bedrooms, setBedrooms] =
    useState("all");

  const [furnished, setFurnished] =
    useState("all");

  const [maxPrice, setMaxPrice] =
    useState("all");

  const filtered = useMemo(() => {
    return properties.filter(
      (property) => {
        const query = search
          .trim()
          .toLowerCase();

        const matchesSearch =
          !query ||
          property.title[locale]
            .toLowerCase()
            .includes(query) ||
          property.district[locale]
            .toLowerCase()
            .includes(query) ||
          property.city[locale]
            .toLowerCase()
            .includes(query);

        const matchesType =
          type === "all" ||
          property.type === type;

        const matchesRent =
          rentType === "all" ||
          property.rentType ===
            rentType;

        const matchesBedrooms =
          bedrooms === "all" ||
          property.bedrooms >=
            Number(bedrooms);

        const matchesFurnished =
          furnished === "all" ||
          property.furnished ===
            (furnished === "yes");

        const matchesPrice =
          maxPrice === "all" ||
          property.price <=
            Number(maxPrice);

        return (
          matchesSearch &&
          matchesType &&
          matchesRent &&
          matchesBedrooms &&
          matchesFurnished &&
          matchesPrice
        );
      }
    );
  }, [
    search,
    type,
    rentType,
    bedrooms,
    furnished,
    maxPrice,
    locale,
  ]);

  function resetFilters() {
    setSearch("");
    setType("all");
    setRentType("all");
    setBedrooms("all");
    setFurnished("all");
    setMaxPrice("all");
  }

  return (
    <>
      {/* HERO */}

      <section className="relative overflow-hidden border-b border-slate-100 bg-white">
        <div className="absolute -end-32 top-0 h-80 w-80 rounded-full bg-[#148ad7]/5 blur-3xl" />

        <div className="absolute -start-32 bottom-0 h-72 w-72 rounded-full bg-[#e7aa39]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#148ad7]/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#148ad7]">
              <Building2 size={15} />

              SCANY HOME
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
              {t("title")}
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-500">
              {t("description")}
            </p>
          </div>
        </div>
      </section>

      {/* FILTERS */}

      <section className="sticky top-[78px] z-30 border-b border-slate-200/70 bg-[#f7f9fc]/95 shadow-sm backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-5 py-4 lg:px-8">
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-[1.6fr_repeat(5,1fr)_56px]">

            {/* Search */}

            <div className="group relative">
              <Search
                size={18}
                className="absolute start-4 top-1/2 -translate-y-1/2 text-[#148ad7]"
              />

              <input
                value={search}
                onChange={(event) =>
                  setSearch(
                    event.target.value
                  )
                }
                placeholder={t(
                  "filters.search"
                )}
                className="
                  h-[52px]
                  w-full
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  ps-11
                  pe-4
                  text-sm
                  font-medium
                  shadow-sm
                  outline-none
                  transition-all
                  hover:border-[#148ad7]/40
                  hover:shadow-md
                  focus:border-[#148ad7]
                  focus:ring-4
                  focus:ring-[#148ad7]/10
                "
              />
            </div>

            {/* TYPE */}

            <SelectBox
              value={type}
              onChange={setType}
              icon={Building2}
            >
              <option value="all">
                {t("filters.type")}
              </option>

              <option value="apartment">
                {t("types.apartment")}
              </option>

              <option value="villa">
                {t("types.villa")}
              </option>

              <option value="studio">
                {t("types.studio")}
              </option>

              <option value="house">
                {t("types.house")}
              </option>
            </SelectBox>

            {/* RENT */}

            <SelectBox
              value={rentType}
              onChange={setRentType}
              icon={CalendarDays}
            >
              <option value="all">
                {t("filters.rentType")}
              </option>

              <option value="daily">
                {t("rent.daily")}
              </option>

              <option value="monthly">
                {t("rent.monthly")}
              </option>

              <option value="yearly">
                {t("rent.yearly")}
              </option>
            </SelectBox>

            {/* BEDROOMS */}

            <SelectBox
              value={bedrooms}
              onChange={setBedrooms}
              icon={BedDouble}
            >
              <option value="all">
                {t("filters.bedrooms")}
              </option>

              <option value="1">
                1+
              </option>

              <option value="2">
                2+
              </option>

              <option value="3">
                3+
              </option>

              <option value="4">
                4+
              </option>
            </SelectBox>

            {/* FURNISHED */}

            <SelectBox
              value={furnished}
              onChange={setFurnished}
              icon={Sofa}
            >
              <option value="all">
                {t("filters.furnished")}
              </option>

              <option value="yes">
                {t("furnished.yes")}
              </option>

              <option value="no">
                {t("furnished.no")}
              </option>
            </SelectBox>

            {/* PRICE */}

            <SelectBox
              value={maxPrice}
              onChange={setMaxPrice}
              icon={Banknote}
            >
              <option value="all">
                {t("filters.maxPrice")}
              </option>

              <option value="2000">
                2,000 SAR
              </option>

              <option value="3000">
                3,000 SAR
              </option>

              <option value="5000">
                5,000 SAR
              </option>

              <option value="25000">
                25,000 SAR
              </option>

              <option value="50000">
                50,000 SAR
              </option>
            </SelectBox>

            {/* RESET */}

            <button
              onClick={resetFilters}
              title={t("filters.reset")}
              className="
                flex
                h-[52px]
                items-center
                justify-center
                rounded-2xl
                border
                border-slate-200
                bg-white
                text-slate-500
                shadow-sm
                transition-all
                hover:border-[#148ad7]
                hover:bg-[#148ad7]
                hover:text-white
                hover:shadow-md
              "
            >
              <RotateCcw size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* RESULTS */}

      <section className="bg-[#f7f9fc]">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid xl:grid-cols-[minmax(0,1.15fr)_minmax(450px,0.85fr)]">

            {/* LISTINGS */}

            <div className="px-5 py-8 lg:px-8">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    {filtered.length}{" "}
                    {t(
                      "results.properties"
                    )}
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    {t(
                      "results.description"
                    )}
                  </p>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-500 shadow-sm">
                  <SlidersHorizontal
                    size={15}
                    className="text-[#148ad7]"
                  />

                  {t("filters.label")}
                </div>
              </div>

              {filtered.length > 0 ? (
                <div className="grid gap-5 md:grid-cols-2">
                  {filtered.map(
                    (property) => (
                      <PropertyCard
                        key={
                          property.id
                        }
                        property={
                          property
                        }
                        locale={
                          locale
                        }
                      />
                    )
                  )}
                </div>
              ) : (
                <div className="rounded-[28px] border border-dashed border-slate-300 bg-white p-14 text-center">
                  <Search
                    size={34}
                    className="mx-auto text-[#148ad7]"
                  />

                  <h3 className="mt-5 text-xl font-bold">
                    {t("empty.title")}
                  </h3>

                  <p className="mt-2 text-slate-500">
                    {t(
                      "empty.description"
                    )}
                  </p>

                  <button
                    onClick={
                      resetFilters
                    }
                    className="mt-6 rounded-full bg-[#148ad7] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0874be]"
                  >
                    {t(
                      "filters.reset"
                    )}
                  </button>
                </div>
              )}
            </div>

            {/* DESKTOP MAP */}

            <div className="hidden xl:block">
              <div className="sticky top-[163px] h-[calc(100vh-163px)] overflow-hidden">
                <PropertyMap
                  properties={
                    filtered
                  }
                  locale={locale}
                />
              </div>
            </div>
          </div>

          {/* MOBILE / TABLET MAP */}

          <div className="px-5 pb-8 xl:hidden">
            <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
              <div className="h-[500px]">
                <PropertyMap
                  properties={
                    filtered
                  }
                  locale={locale}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}