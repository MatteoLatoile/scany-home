"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

type Props = {
  price: number;
  rentLabel: string;
  whatsappUrl: string;
  whatsappLabel: string;
};

export default function MobileStickyBar({
  price,
  rentLabel,
  whatsappUrl,
  whatsappLabel,
}: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 420);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-between gap-4 border-t border-slate-100 bg-white/95 p-4 shadow-[0_-10px_30px_rgba(15,23,42,0.08)] backdrop-blur-md lg:hidden"
        >
          <div>
            <div className="text-lg font-bold text-[#148ad7]">
              {price.toLocaleString()}{" "}
              <span className="text-xs font-medium text-slate-400">SAR</span>
            </div>
            <div className="text-xs text-slate-400">{rentLabel}</div>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full bg-[#22c55e] px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#16a34a]"
          >
            <MessageCircle size={18} />
            {whatsappLabel}
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
