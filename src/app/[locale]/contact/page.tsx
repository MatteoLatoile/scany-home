import {
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";

import { getTranslations } from "next-intl/server";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import {
  WHATSAPP_NUMBER,
} from "@/lib/whatsapp";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function ContactPage({
  params,
}: Props) {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "contactPage",
  });

  return (
    <>
      <Header />

      <main className="bg-[#f7f9fc]">

        {/* HERO */}

        <section className="relative overflow-hidden bg-white">
          <div className="absolute -start-32 top-0 h-72 w-72 rounded-full bg-[#148ad7]/10 blur-3xl" />

          <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">

            <div className="max-w-3xl">

              <div className="inline-flex items-center gap-2 rounded-full bg-[#148ad7]/10 px-4 py-2 text-sm font-bold text-[#148ad7]">
                <MessageCircle size={16} />
                {t("badge")}
              </div>

              <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                {t("title")}
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-500">
                {t("description")}
              </p>

            </div>
          </div>
        </section>

        {/* CONTENT */}

        <section className="py-16 lg:py-20">

          <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">

            {/* INFO */}

            <div className="space-y-5">

              <ContactCard
                icon={MessageCircle}
                title={t("whatsapp.title")}
                description={t(
                  "whatsapp.description"
                )}
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                action={t(
                  "whatsapp.action"
                )}
                accent
              />

              <ContactCard
                icon={Phone}
                title={t("phone.title")}
                description="+966 XX XXX XXXX"
                href="tel:+966000000000"
                action={t("phone.action")}
              />

              <ContactCard
                icon={Mail}
                title={t("email.title")}
                description="contact@scanyhome.com"
                href="mailto:contact@scanyhome.com"
                action={t("email.action")}
              />

              <ContactCard
                icon={MapPin}
                title={t("location.title")}
                description={t(
                  "location.description"
                )}
              />

              <ContactCard
                icon={Clock3}
                title={t("hours.title")}
                description={t(
                  "hours.description"
                )}
              />

            </div>

            {/* FORM */}

            <div className="rounded-[32px] border border-slate-100 bg-white p-6 shadow-xl shadow-slate-200/50 md:p-8">

              <div className="mb-8">

                <h2 className="text-2xl font-bold text-slate-900">
                  {t("form.title")}
                </h2>

                <p className="mt-2 text-sm leading-7 text-slate-500">
                  {t("form.description")}
                </p>

              </div>

              <form className="space-y-5">

                <div className="grid gap-5 sm:grid-cols-2">

                  <Field
                    label={t(
                      "form.name"
                    )}
                    placeholder={t(
                      "form.namePlaceholder"
                    )}
                  />

                  <Field
                    label={t(
                      "form.phone"
                    )}
                    placeholder="+966"
                    type="tel"
                  />

                </div>

                <Field
                  label={t("form.email")}
                  placeholder="name@email.com"
                  type="email"
                />

                <div>

                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    {t("form.subject")}
                  </label>

                  <select className="h-[54px] w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-[#148ad7] focus:ring-4 focus:ring-[#148ad7]/10">

                    <option>
                      {t(
                        "form.subjects.property"
                      )}
                    </option>

                    <option>
                      {t(
                        "form.subjects.visit"
                      )}
                    </option>

                    <option>
                      {t(
                        "form.subjects.owner"
                      )}
                    </option>

                    <option>
                      {t(
                        "form.subjects.other"
                      )}
                    </option>

                  </select>

                </div>

                <div>

                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    {t("form.message")}
                  </label>

                  <textarea
                    rows={6}
                    placeholder={t(
                      "form.messagePlaceholder"
                    )}
                    className="w-full resize-none rounded-2xl border border-slate-200 bg-white p-4 text-sm outline-none transition focus:border-[#148ad7] focus:ring-4 focus:ring-[#148ad7]/10"
                  />

                </div>

                <button
                  type="button"
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#148ad7] px-6 py-4 font-bold text-white shadow-lg shadow-[#148ad7]/20 transition hover:bg-[#0874be]"
                >
                  <Send size={18} />

                  {t("form.send")}
                </button>

              </form>

            </div>

          </div>

        </section>

        {/* MAP */}

        <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">

          <div className="relative h-[380px] overflow-hidden rounded-[32px] border border-slate-200 bg-[#e9eef4]">

            <img
              src="https://tile.openstreetmap.org/12/2498/1647.png"
              alt=""
              className="h-full w-full object-cover opacity-70"
            />

            <div className="absolute inset-0 flex items-center justify-center">

              <div className="rounded-[24px] bg-white p-5 text-center shadow-xl">

                <MapPin
                  size={28}
                  className="mx-auto text-[#148ad7]"
                />

                <div className="mt-3 font-bold">
                  Scany Home
                </div>

                <div className="mt-1 text-sm text-slate-500">
                  Madinah, Saudi Arabia
                </div>

              </div>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>

      <label className="mb-2 block text-sm font-semibold text-slate-700">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="h-[54px] w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-[#148ad7] focus:ring-4 focus:ring-[#148ad7]/10"
      />

    </div>
  );
}

function ContactCard({
  icon: Icon,
  title,
  description,
  href,
  action,
  accent = false,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  href?: string;
  action?: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-[26px] border p-6 shadow-sm ${
        accent
          ? "border-green-100 bg-green-50"
          : "border-slate-100 bg-white"
      }`}
    >

      <div className="flex gap-4">

        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${
            accent
              ? "bg-[#22c55e] text-white"
              : "bg-[#148ad7]/10 text-[#148ad7]"
          }`}
        >
          <Icon size={21} />
        </div>

        <div>

          <h3 className="font-bold text-slate-900">
            {title}
          </h3>

          <p className="mt-1 text-sm leading-6 text-slate-500">
            {description}
          </p>

          {href && action && (
            <a
              href={href}
              target={
                href.startsWith(
                  "http"
                )
                  ? "_blank"
                  : undefined
              }
              rel="noreferrer"
              className={`mt-3 inline-block text-sm font-bold ${
                accent
                  ? "text-[#16a34a]"
                  : "text-[#148ad7]"
              }`}
            >
              {action} →
            </a>
          )}

        </div>

      </div>

    </div>
  );
}