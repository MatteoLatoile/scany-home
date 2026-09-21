"use client";

import { motion } from "framer-motion";
import { Building2, MessageCircle } from "lucide-react";

type Props = {
  title: string;
  description: string;
  whatsappUrl: string;
  whatsappLabel: string;
  reference: string;
  referenceLabel: string;
};

export default function ContactCard({
  title,
  description,
  whatsappUrl,
  whatsappLabel,
  reference,
  referenceLabel,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="sticky top-28 rounded-[30px] border border-slate-100 bg-white p-6 shadow-xl shadow-slate-200/60"
    >
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#148ad7]/10 text-[#148ad7]"
      >
        <Building2 size={23} />
      </motion.div>

      <h2 className="mt-5 text-xl font-bold">{title}</h2>

      <p className="mt-3 text-sm leading-7 text-slate-500">{description}</p>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="relative mt-6 flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-[#22c55e] px-5 py-4 font-bold text-white shadow-sm transition hover:bg-[#16a34a] hover:shadow-lg"
      >
        <motion.span
          className="absolute inset-0 rounded-2xl bg-white/20"
          animate={{ scale: [1, 1.6], opacity: [0.5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />

        <MessageCircle size={21} />
        {whatsappLabel}
      </a>

      <div className="mt-5 border-t border-slate-100 pt-5 text-center text-xs text-slate-400">
        {referenceLabel} {reference}
      </div>
    </motion.div>
  );
}
