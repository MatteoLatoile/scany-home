import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-[#101827] text-white">

      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          <div>

            <div className="flex items-center gap-3">

              <img
                src="/logo.jpeg"
                alt="Scany Home"
                className="h-16 w-16 rounded-full bg-white object-cover"
              />

              <div>
                <div className="text-xl font-bold text-[#25c6e6]">
                  SCANY
                </div>

                <div className="text-sm font-semibold text-[#e7aa39]">
                  HOME
                </div>
              </div>

            </div>

            <p className="mt-6 max-w-xs text-sm leading-7 text-slate-400">
              {t("description")}
            </p>

          </div>

          <div>

            <h3 className="font-semibold">
              {t("quickLinks")}
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-slate-400">

              <Link
                href="/"
                className="hover:text-white"
              >
                {t("home")}
              </Link>

              <Link
                href="/properties"
                className="hover:text-white"
              >
                {t("properties")}
              </Link>

              <Link
                href="/#services"
                className="hover:text-white"
              >
                {t("services")}
              </Link>

            </div>

          </div>

          <div>

            <h3 className="font-semibold">
              {t("property")}
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-slate-400">

              <span>
                {t("apartments")}
              </span>

              <span>
                {t("villas")}
              </span>

              <span>
                {t("furnished")}
              </span>

            </div>

          </div>

          <div>

            <h3 className="font-semibold">
              {t("contact")}
            </h3>

            <div className="mt-5 flex flex-col gap-4 text-sm text-slate-400">

              <div className="flex items-center gap-3">
                <MapPin size={18} />
                Madinah, Saudi Arabia
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} />
                +966 XX XXX XXXX
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} />
                contact@scanyhome.com
              </div>

            </div>

          </div>

        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-7 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">

          <div>
            © {new Date().getFullYear()} Scany Home. {t("rights")}
          </div>

          <div>
            {t("made")}
          </div>

        </div>

      </div>

    </footer>
  );
}