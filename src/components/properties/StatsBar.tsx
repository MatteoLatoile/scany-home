"use client";

import { motion } from "framer-motion";
import {
  Bath,
  BedDouble,
  Layers3,
  Maximize2,
  Sofa,
  type LucideIcon,
} from "lucide-react";

type StatIcon =
  | "bed"
  | "bath"
  | "sofa"
  | "area"
  | "floor";

type Stat = {
  icon: StatIcon;
  label: string;
  value: string | number;
};

type Props = {
  stats: Stat[];
  price: number;
  priceLabel: string;
  rentLabel: string;
};

const iconMap: Record<StatIcon, LucideIcon> = {
  bed: BedDouble,
  bath: Bath,
  sofa: Sofa,
  area: Maximize2,
  floor: Layers3,
};

export default function StatsBar({
  stats,
  price,
  priceLabel,
  rentLabel,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="relative z-10 mx-auto -mt-8 max-w-7xl px-5 lg:-mt-6 lg:px-8"
    >
      <div className="flex flex-col gap-5 rounded-[28px] border border-slate-100 bg-white/90 p-6 shadow-[0_25px_60px_rgba(15,23,42,0.1)] backdrop-blur-md sm:flex-row sm:items-center sm:justify-between">

        <div className="flex gap-6 overflow-x-auto">
          {stats.map((stat, index) => {
            const Icon = iconMap[stat.icon];

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.6 + index * 0.08,
                }}
                className="flex shrink-0 items-center gap-3"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#148ad7]/10 text-[#148ad7]">
                  <Icon
                    size={19}
                    strokeWidth={1.8}
                  />
                </div>

                <div>
                  <div className="text-base font-bold text-slate-900">
                    {stat.value}
                  </div>

                  <div className="text-xs text-slate-400">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="shrink-0 border-t border-slate-100 pt-4 text-end sm:border-t-0 sm:border-s sm:pt-0 sm:ps-6">
          <div className="text-xs text-slate-400">
            {priceLabel}
          </div>

          <div className="mt-1 text-2xl font-bold text-[#148ad7]">
            {price.toLocaleString()}{" "}
            <span className="text-sm">
              SAR
            </span>
          </div>

          <div className="text-xs font-medium text-slate-500">
            {rentLabel}
          </div>
        </div>

      </div>
    </motion.div>
  );
}