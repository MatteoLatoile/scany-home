"use client";

import { useState } from "react";
import {
  Bath,
  BedDouble,
  Building2,
  Heart,
  MapPin,
  MoveRight,
} from "lucide-react";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const properties = [
  {
    id: 1,
    price: "2,500",
    beds: 3,
    baths: 2,
    gradient: "from-[#148ad7] to-[#25c6e6]",
  },
  {
    id: 2,
    price: "3,800",
    beds: 4,
    baths: 3,
    gradient: "from-[#0874be] to-[#148ad7]",
  },
  {
    id: 3,
    price: "2,100",
    beds: 2,
    baths: 2,
    gradient: "from-[#25b9dc] to-[#e7aa39]",
  },
];

export default function FeaturedProperties() {
  const t = useTranslations("featuredProperties");
  const [liked, setLiked] = useState<number[]>([]);

  function toggleLike(id: number) {
    setLiked((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  }

  return (
    <section className="bg-[#f7f9fc] py-24">

      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between gap-6"
        >

          <div>
            <div className="mb-3 text-sm font-bold uppercase tracking-widest text-[#148ad7]">
              {t("eyebrow")}
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {t("title")}
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-slate-500">
              {t("description")}
            </p>
          </div>

          <motion.button
            whileHover={{ x: 4 }}
            className="group hidden items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold transition hover:border-[#148ad7] hover:text-[#148ad7] sm:flex"
          >
            {t("viewAll")}
            <MoveRight size={16} className="transition group-hover:translate-x-1" />
          </motion.button>

        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {properties.map((property, index) => (
            <motion.article
              key={property.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-[28px] border border-slate-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-2xl"
            >

              <div
                className={`relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-gradient-to-br ${property.gradient}`}
              >

                <motion.div
                  animate={{ rotate: [0, 8, 0, -8, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Building2
                    size={70}
                    strokeWidth={1.2}
                    className="text-white/70"
                  />
                </motion.div>

                <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/10" />

                <div className="absolute start-5 top-5 rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-[#148ad7] shadow-sm">
                  {t("available")}
                </div>

                <button
                  onClick={() => toggleLike(property.id)}
                  aria-label="favorite"
                  className="absolute end-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 shadow-sm transition hover:scale-110 active:scale-95"
                >
                  <Heart
                    size={16}
                    className={
                      liked.includes(property.id)
                        ? "fill-[#e7aa39] text-[#e7aa39]"
                        : "text-slate-400"
                    }
                  />
                </button>

              </div>

              <div className="p-6">

                <div className="mb-3 flex items-center gap-2 text-sm text-slate-500">
                  <MapPin size={16} className="text-[#e7aa39]" />
                  {t(`items.${property.id}.location`)}
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {t(`items.${property.id}.title`)}
                </h3>

                <div className="mt-5 flex items-center gap-5 border-b border-slate-100 pb-5 text-sm text-slate-500">
                  <div className="flex items-center gap-2">
                    <BedDouble size={18} />
                    {property.beds}
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath size={18} />
                    {property.baths}
                  </div>
                </div>

                <div className="mt-5 flex items-end justify-between">
                  <div>
                    <div className="text-xs text-slate-400">
                      {t("startingFrom")}
                    </div>
                    <div className="mt-1 text-xl font-bold text-[#148ad7]">
                      {property.price} SAR
                    </div>
                  </div>
                  <div className="text-sm text-slate-400">
                    / {t("month")}
                  </div>
                </div>

              </div>

            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
}
