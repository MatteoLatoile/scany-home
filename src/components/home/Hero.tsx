"use client";

import { Building2, MapPin, Search, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import ThreeBackground from "./ThreeBackground";
import AnimatedCounter from "./AnimatedCounter";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative overflow-hidden bg-white">

      <ThreeBackground />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white" />

      <motion.div
        className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#25c6e6]/10 blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute -right-40 top-0 h-[450px] w-[450px] rounded-full bg-[#e7aa39]/10 blur-3xl"
        animate={{ y: [0, -25, 0], x: [0, -15, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-24 pt-20 lg:px-8 lg:pb-32 lg:pt-28">

        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          className="mx-auto max-w-4xl text-center"
        >

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#148ad7]/15 bg-[#148ad7]/5 px-4 py-2 text-sm font-semibold text-[#148ad7]"
          >
            <Sparkles size={16} className="animate-pulse" />
            {t("badge")}
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="text-4xl font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-5xl lg:text-7xl"
          >
            {t("title")}

            <span className="block bg-[length:200%_auto] bg-gradient-to-r from-[#148ad7] via-[#25b9dc] to-[#e7aa39] bg-clip-text text-transparent [animation:gradient-move_5s_ease_infinite]">
              {t("highlight")}
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg"
          >
            {t("description")}
          </motion.p>

        </motion.div>

        {/* Search */}

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mx-auto mt-12 max-w-5xl rounded-[28px] border border-slate-100 bg-white/90 p-3 shadow-[0_25px_80px_rgba(15,23,42,0.12)] backdrop-blur-sm"
        >

          <div className="grid gap-2 md:grid-cols-[1.4fr_1fr_1fr_auto]">

            <div className="flex items-center gap-3 rounded-2xl bg-slate-50 px-5 py-4 transition focus-within:ring-2 focus-within:ring-[#148ad7]/40">

              <MapPin size={20} className="shrink-0 text-[#148ad7]" />

              <div className="w-full">
                <div className="text-xs font-medium text-slate-400">{t("location")}</div>
                <input
                  placeholder={t("locationPlaceholder")}
                  className="mt-1 w-full bg-transparent text-sm font-medium outline-none placeholder:text-slate-500"
                />
              </div>

            </div>

            <div className="rounded-2xl bg-slate-50 px-5 py-4 transition focus-within:ring-2 focus-within:ring-[#148ad7]/40">
              <div className="text-xs font-medium text-slate-400">{t("propertyType")}</div>
              <select className="mt-1 w-full bg-transparent text-sm font-medium outline-none">
                <option>{t("allProperties")}</option>
                <option>{t("apartment")}</option>
                <option>{t("villa")}</option>
              </select>
            </div>

            <div className="rounded-2xl bg-slate-50 px-5 py-4 transition focus-within:ring-2 focus-within:ring-[#148ad7]/40">
              <div className="text-xs font-medium text-slate-400">{t("rent")}</div>
              <select className="mt-1 w-full bg-transparent text-sm font-medium outline-none">
                <option>{t("monthly")}</option>
                <option>{t("yearly")}</option>
              </select>
            </div>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-2 rounded-2xl bg-[#148ad7] px-7 py-4 font-semibold text-white shadow-lg shadow-[#148ad7]/30 transition hover:bg-[#0874be]"
            >
              <Search size={19} />
              <span className="md:hidden xl:inline">{t("search")}</span>
            </motion.button>

          </div>
        </motion.div>

        {/* Stats */}

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
          className="mx-auto mt-12 grid max-w-2xl grid-cols-3 divide-x divide-slate-200 text-center rtl:divide-x-reverse"
        >

          <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
            <div className="text-xl font-bold text-slate-900 sm:text-2xl">
              <AnimatedCounter value={100} suffix="+" />
            </div>
            <div className="mt-1 text-xs text-slate-500 sm:text-sm">{t("properties")}</div>
          </motion.div>

          <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
            <div className="text-xl font-bold text-slate-900 sm:text-2xl">24/7</div>
            <div className="mt-1 text-xs text-slate-500 sm:text-sm">{t("support")}</div>
          </motion.div>

          <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
            <div className="text-xl font-bold text-slate-900 sm:text-2xl">
              <AnimatedCounter value={5} />
            </div>
            <div className="mt-1 text-xs text-slate-500 sm:text-sm">{t("languages")}</div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
