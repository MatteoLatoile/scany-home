"use client";

import {
  Headphones,
  Languages,
  SearchCheck,
  ShieldCheck,
} from "lucide-react";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const services = [
  { id: "choice", icon: SearchCheck },
  { id: "trusted", icon: ShieldCheck },
  { id: "languages", icon: Languages },
  { id: "support", icon: Headphones },
];

export default function Services() {
  const t = useTranslations("services");

  return (
    <section id="services" className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >

          <div className="text-sm font-bold uppercase tracking-widest text-[#e7aa39]">
            {t("eyebrow")}
          </div>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {t("title")}
          </h2>

          <p className="mt-5 leading-7 text-slate-500">
            {t("description")}
          </p>

        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {services.map(({ id, icon: Icon }, index) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="rounded-[26px] border border-slate-100 bg-[#f9fafc] p-7 transition-colors hover:border-[#148ad7]/20 hover:bg-white hover:shadow-xl"
            >

              <motion.div
                whileHover={{ rotate: 12, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#148ad7]/10 text-[#148ad7]"
              >
                <Icon size={23} />
              </motion.div>

              <h3 className="mt-6 text-lg font-bold text-slate-900">
                {t(`${id}.title`)}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                {t(`${id}.description`)}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
