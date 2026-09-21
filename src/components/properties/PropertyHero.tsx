"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Grid2x2,
  Heart,
  MapPin,
  X,
} from "lucide-react";

import { Link } from "@/i18n/navigation";

type Props = {
  images: string[];
  title: string;
  badge: string;
  location: string;
  backLabel: string;
};

export default function PropertyHero({
  images,
  title,
  badge,
  location,
  backLabel,
}: Props) {
  const [saved, setSaved] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  function openLightbox(index: number) {
    setActiveIndex(index);
    setLightboxOpen(true);
  }

  function next() {
    setActiveIndex((i) => (i + 1) % images.length);
  }

  function prev() {
    setActiveIndex((i) => (i - 1 + images.length) % images.length);
  }

  return (
    <>
      <section className="relative overflow-hidden">

        <motion.div
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative h-[62vh] min-h-[420px] w-full"
        >
          <img
            src={images[0]}
            alt={title}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/0" />

          {/* Top controls */}
          <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5 lg:px-8">
            <Link
              href="/properties"
              className="flex items-center gap-2 rounded-full bg-white/15 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/25"
            >
              <ArrowLeft size={16} className="rtl:rotate-180" />
              {backLabel}
            </Link>

            <div className="flex items-center gap-2">
              {images.length > 1 && (
                <button
                  onClick={() => openLightbox(0)}
                  className="flex items-center gap-2 rounded-full bg-white/15 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/25"
                >
                  <Grid2x2 size={16} />
                  {images.length}
                </button>
              )}

              <motion.button
                whileTap={{ scale: 0.85 }}
                onClick={() => setSaved(!saved)}
                aria-label="save"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition hover:bg-white/25"
              >
                <Heart
                  size={17}
                  className={saved ? "fill-[#e7aa39] text-[#e7aa39]" : ""}
                />
              </motion.button>
            </div>
          </div>

          {/* Overlay title */}
          <div className="absolute inset-x-0 bottom-0 p-5 lg:px-8 lg:pb-10">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-block rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-[#148ad7]"
            >
              {badge}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-3 max-w-3xl text-3xl font-bold leading-tight text-white md:text-5xl"
            >
              {title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-3 flex items-center gap-2 text-white/90"
            >
              <MapPin size={17} className="text-[#e7aa39]" />
              {location}
            </motion.div>
          </div>
        </motion.div>

        {/* Thumbnail strip */}
        {images.length > 1 && (
          <div className="mx-auto -mt-10 hidden max-w-7xl gap-3 overflow-x-auto px-5 pb-2 lg:flex lg:px-8">
            {images.slice(0, 5).map((image, index) => (
              <button
                key={`${image}-${index}`}
                onClick={() => openLightbox(index)}
                className="relative h-20 w-28 shrink-0 overflow-hidden rounded-2xl border-4 border-white shadow-lg transition hover:-translate-y-1"
              >
                <img src={image} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-5"
          >
            <button
              onClick={() => setLightboxOpen(false)}
              aria-label="close"
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            >
              <X size={20} />
            </button>

            {images.length > 1 && (
              <button
                onClick={prev}
                aria-label="previous"
                className="absolute left-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 rtl:left-auto rtl:right-5"
              >
                <ChevronLeft size={22} />
              </button>
            )}

            <motion.img
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              src={images[activeIndex]}
              alt=""
              className="max-h-[85vh] max-w-full rounded-2xl object-contain"
            />

            {images.length > 1 && (
              <button
                onClick={next}
                aria-label="next"
                className="absolute right-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 rtl:right-auto rtl:left-5"
              >
                <ChevronRight size={22} />
              </button>
            )}

            <div className="absolute bottom-6 text-sm font-medium text-white/70">
              {activeIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
