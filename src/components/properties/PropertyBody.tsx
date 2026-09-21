"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";

type Props = {
  descriptionTitle: string;
  description: string;
  featuresTitle: string;
  features: { key: string; label: string }[];
};

export default function PropertyBody({
  descriptionTitle,
  description,
  featuresTitle,
  features,
}: Props) {
  const [expanded, setExpanded] = useState(false);
  const isLong = description.length > 320;

  return (
    <div className="space-y-7">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-[28px] border border-slate-100 bg-white p-7 shadow-sm"
      >
        <h2 className="text-xl font-bold">{descriptionTitle}</h2>

        <p
          className={`mt-4 leading-8 text-slate-600 ${
            !expanded && isLong ? "line-clamp-4" : ""
          }`}
        >
          {description}
        </p>

        {isLong && (
          <button
            onClick={() => setExpanded(!expanded)}
            aria-label="toggle description"
            className="mt-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#148ad7]/10 text-[#148ad7] transition hover:bg-[#148ad7]/20"
          >
            <motion.span
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.25 }}
            >
              <ChevronDown size={16} />
            </motion.span>
          </button>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-[28px] border border-slate-100 bg-white p-7 shadow-sm"
      >
        <h2 className="text-xl font-bold">{featuresTitle}</h2>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {features.map((feature, index) => (
            <motion.div
              key={feature.key}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="flex items-center gap-3"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#148ad7]/10 text-[#148ad7]">
                <Check size={17} />
              </div>

              <span className="text-sm font-medium text-slate-700">
                {feature.label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </div>
  );
}
