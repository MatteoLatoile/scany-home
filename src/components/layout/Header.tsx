"use client";

import { useState } from "react";

import {
  ExternalLink,
  Globe2,
  Menu,
  X,
} from "lucide-react";

import { FaWhatsapp } from "react-icons/fa";

import {
  useLocale,
  useTranslations,
} from "next-intl";

import {
  Link,
  usePathname,
  useRouter,
} from "@/i18n/navigation";

import type { Locale } from "@/i18n/routing";

const languages: {
  code: Locale;
  label: string;
}[] = [
  {
    code: "ar",
    label: "العربية",
  },
  {
    code: "en",
    label: "English",
  },
  {
    code: "fr",
    label: "Français",
  },
  {
    code: "ru",
    label: "Русский",
  },
  {
    code: "ur",
    label: "اردو",
  },
];

/*
  IMPORTANT :
  Remplace ce numéro par le vrai numéro WhatsApp
  sans +, sans espace, sans tiret.
  
  Exemple :
  +966 50 123 4567
  devient :
  966501234567
*/

const WHATSAPP_NUMBER = "966500000000";

export default function Header() {
  const t = useTranslations("nav");

  const locale = useLocale() as Locale;

  const pathname = usePathname();
  const router = useRouter();

  const [open, setOpen] =
    useState(false);

  function changeLanguage(
    nextLocale: Locale
  ) {
    router.replace(pathname, {
      locale: nextLocale,
    });
  }

  const whatsappUrl =
    `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur-xl">

      <div className="mx-auto flex h-[78px] max-w-7xl items-center justify-between px-5 lg:px-8">

        {/* LOGO */}

        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <img
            src="/logo.jpeg"
            alt="Scany Home"
            className="h-14 w-14 rounded-full object-cover"
          />

          <div className="hidden sm:block">
            <div className="text-lg font-bold tracking-tight text-[#148ad7]">
              SCANY
            </div>

            <div className="-mt-1 text-sm font-semibold text-[#e7aa39]">
              HOME
            </div>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}

        <nav className="hidden items-center gap-8 lg:flex">

          <Link
            href="/"
            className="text-sm font-medium transition hover:text-[#148ad7]"
          >
            {t("home")}
          </Link>

          <Link
            href="/properties"
            className="text-sm font-medium transition hover:text-[#148ad7]"
          >
            {t("properties")}
          </Link>

          <Link
            href="/#services"
            className="text-sm font-medium transition hover:text-[#148ad7]"
          >
            {t("services")}
          </Link>

          <Link
            href="/about"
            className="text-sm font-medium transition hover:text-[#148ad7]"
          >
            {t("about")}
          </Link>

        </nav>

        {/* RIGHT */}

        <div className="flex items-center gap-3">

          {/* LANGUAGE */}

          <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 shadow-sm md:flex">

            <Globe2
              size={17}
              className="text-[#148ad7]"
            />

            <select
              value={locale}
              onChange={(e) =>
                changeLanguage(
                  e.target
                    .value as Locale
                )
              }
              className="cursor-pointer bg-transparent text-sm font-medium outline-none"
            >
              {languages.map(
                (language) => (
                  <option
                    key={
                      language.code
                    }
                    value={
                      language.code
                    }
                  >
                    {
                      language.label
                    }
                  </option>
                )
              )}
            </select>

          </div>

          {/* WHATSAPP CONTACT */}

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              hidden
              items-center
              gap-2.5
              rounded-full
              bg-[#22c55e]
              px-5
              py-2.5
              text-sm
              font-bold
              text-white
              shadow-sm
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:bg-[#16a34a]
              hover:shadow-lg
              hover:shadow-green-500/20
              md:flex
            "
          >
            <FaWhatsapp
              size={19}
            />

            <span>
              {t("contact")}
            </span>

            <ExternalLink
              size={14}
              className="opacity-75"
            />
          </a>

          {/* MOBILE MENU BUTTON */}

          <button
            onClick={() =>
              setOpen(!open)
            }
            className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 transition hover:bg-slate-200 lg:hidden"
            aria-label="Menu"
          >
            {open ? (
              <X size={21} />
            ) : (
              <Menu size={21} />
            )}
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}

      {open && (
        <div className="border-t border-slate-100 bg-white px-5 py-6 lg:hidden">

          <div className="flex flex-col gap-5">

            <Link
              href="/"
              onClick={() =>
                setOpen(false)
              }
              className="font-medium"
            >
              {t("home")}
            </Link>

            <Link
              href="/properties"
              onClick={() =>
                setOpen(false)
              }
              className="font-medium"
            >
              {t("properties")}
            </Link>

            <Link
              href="/#services"
              onClick={() =>
                setOpen(false)
              }
              className="font-medium"
            >
              {t("services")}
            </Link>

            <Link
              href="/about"
              onClick={() =>
                setOpen(false)
              }
              className="font-medium"
            >
              {t("about")}
            </Link>

            {/* MOBILE WHATSAPP */}

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                setOpen(false)
              }
              className="
                flex
                items-center
                justify-between
                rounded-2xl
                bg-[#22c55e]
                px-5
                py-4
                font-bold
                text-white
                shadow-sm
              "
            >
              <div className="flex items-center gap-3">
                <FaWhatsapp
                  size={22}
                />

                <span>
                  {t("contact")}
                </span>
              </div>

              <ExternalLink
                size={16}
                className="opacity-80"
              />
            </a>

            {/* LANGUAGES */}

            <div className="border-t border-slate-100 pt-5">

              <div className="mb-3 flex items-center gap-2 text-sm text-slate-500">
                <Globe2
                  size={17}
                />

                Language
              </div>

              <div className="flex flex-wrap gap-2">

                {languages.map(
                  (language) => (
                    <button
                      key={
                        language.code
                      }
                      onClick={() => {
                        changeLanguage(
                          language.code
                        );

                        setOpen(
                          false
                        );
                      }}
                      className={`rounded-full px-4 py-2 text-sm ${
                        locale ===
                        language.code
                          ? "bg-[#148ad7] text-white"
                          : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {
                        language.label
                      }
                    </button>
                  )
                )}

              </div>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}