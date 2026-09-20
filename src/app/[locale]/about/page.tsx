import {
  Building2,
  CheckCircle2,
  Globe2,
  HeartHandshake,
  MapPin,
  SearchCheck,
  ShieldCheck,
  Users,
} from "lucide-react";

import { getTranslations } from "next-intl/server";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import { Link } from "@/i18n/navigation";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function AboutPage({
  params,
}: Props) {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "aboutPage",
  });

  return (
    <>
      <Header />

      <main className="bg-[#f7f9fc]">

        {/* HERO */}

        <section className="relative overflow-hidden bg-white">
          <div className="absolute -start-32 top-0 h-80 w-80 rounded-full bg-[#148ad7]/10 blur-3xl" />

          <div className="absolute -end-32 bottom-0 h-80 w-80 rounded-full bg-[#e7aa39]/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">

            <div className="grid items-center gap-14 lg:grid-cols-2">

              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#148ad7]/10 px-4 py-2 text-sm font-bold text-[#148ad7]">
                  <Building2 size={17} />

                  {t("badge")}
                </div>

                <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
                  {t("title")}
                </h1>

                <p className="mt-6 max-w-xl text-base leading-8 text-slate-500 md:text-lg">
                  {t("description")}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">

                  <Link
                    href="/properties"
                    className="rounded-full bg-[#148ad7] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#148ad7]/20 transition hover:bg-[#0874be]"
                  >
                    {t("viewProperties")}
                  </Link>

                  <Link
                    href="/contact"
                    className="rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 transition hover:border-[#148ad7] hover:text-[#148ad7]"
                  >
                    {t("contact")}
                  </Link>

                </div>
              </div>

              {/* VISUAL */}

              <div className="relative">

                <div className="overflow-hidden rounded-[36px] shadow-2xl shadow-slate-300/60">
                  <img
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=85"
                    alt="Scany Home"
                    className="h-[500px] w-full object-cover"
                  />
                </div>

                <div className="absolute -bottom-6 start-6 rounded-[24px] border border-white/60 bg-white/95 p-5 shadow-xl backdrop-blur">
                  <div className="flex items-center gap-3">

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#148ad7]/10 text-[#148ad7]">
                      <MapPin size={22} />
                    </div>

                    <div>
                      <div className="font-bold text-slate-900">
                        Madinah
                      </div>

                      <div className="text-sm text-slate-500">
                        Saudi Arabia
                      </div>
                    </div>

                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* STATS */}

        <section className="border-y border-slate-100 bg-white">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-0 px-5 py-10 md:grid-cols-4 lg:px-8">

            <Stat
              number="100+"
              label={t("stats.properties")}
            />

            <Stat
              number="5"
              label={t("stats.languages")}
            />

            <Stat
              number="24/7"
              label={t("stats.support")}
            />

            <Stat
              number="100%"
              label={t("stats.local")}
            />

          </div>
        </section>

        {/* STORY */}

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">

            <div className="grid gap-14 lg:grid-cols-2">

              <div>
                <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#148ad7]">
                  {t("story.eyebrow")}
                </div>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                  {t("story.title")}
                </h2>

                <p className="mt-6 max-w-xl leading-8 text-slate-500">
                  {t("story.description1")}
                </p>

                <p className="mt-4 max-w-xl leading-8 text-slate-500">
                  {t("story.description2")}
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">

                <ValueCard
                  icon={SearchCheck}
                  title={t("values.simple.title")}
                  description={t(
                    "values.simple.description"
                  )}
                />

                <ValueCard
                  icon={ShieldCheck}
                  title={t("values.trusted.title")}
                  description={t(
                    "values.trusted.description"
                  )}
                />

                <ValueCard
                  icon={Globe2}
                  title={t("values.languages.title")}
                  description={t(
                    "values.languages.description"
                  )}
                />

                <ValueCard
                  icon={HeartHandshake}
                  title={t("values.support.title")}
                  description={t(
                    "values.support.description"
                  )}
                />

              </div>

            </div>
          </div>
        </section>

        {/* WHY */}

        <section className="bg-[#101827] py-24 text-white">

          <div className="mx-auto max-w-7xl px-5 lg:px-8">

            <div className="mx-auto max-w-2xl text-center">

              <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#e7aa39]">
                {t("why.eyebrow")}
              </div>

              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                {t("why.title")}
              </h2>

              <p className="mt-5 leading-8 text-slate-400">
                {t("why.description")}
              </p>

            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-3">

              <WhyCard
                number="01"
                icon={Users}
                title={t("why.items.local.title")}
                description={t(
                  "why.items.local.description"
                )}
              />

              <WhyCard
                number="02"
                icon={Globe2}
                title={t("why.items.accessible.title")}
                description={t(
                  "why.items.accessible.description"
                )}
              />

              <WhyCard
                number="03"
                icon={ShieldCheck}
                title={t("why.items.clear.title")}
                description={t(
                  "why.items.clear.description"
                )}
              />

            </div>

          </div>
        </section>

        {/* CTA */}

        <section className="py-24">
          <div className="mx-auto max-w-5xl px-5">

            <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-[#148ad7] to-[#25b9dc] px-6 py-14 text-center text-white shadow-xl md:px-14">

              <div className="absolute -start-20 -top-20 h-60 w-60 rounded-full bg-white/10" />

              <div className="absolute -bottom-28 -end-20 h-72 w-72 rounded-full bg-[#e7aa39]/20" />

              <div className="relative">

                <CheckCircle2
                  size={40}
                  className="mx-auto"
                />

                <h2 className="mt-6 text-3xl font-bold">
                  {t("cta.title")}
                </h2>

                <p className="mx-auto mt-4 max-w-xl leading-8 text-white/80">
                  {t("cta.description")}
                </p>

                <Link
                  href="/properties"
                  className="mt-8 inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#148ad7] transition hover:scale-105"
                >
                  {t("cta.button")}
                </Link>

              </div>

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

function Stat({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="border-slate-100 px-5 py-4 text-center md:border-e">
      <div className="text-3xl font-bold text-[#148ad7]">
        {number}
      </div>

      <div className="mt-2 text-sm text-slate-500">
        {label}
      </div>
    </div>
  );
}

function ValueCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-[28px] border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#148ad7]/10 text-[#148ad7]">
        <Icon size={23} />
      </div>

      <h3 className="mt-5 text-lg font-bold">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-slate-500">
        {description}
      </p>
    </div>
  );
}

function WhyCard({
  number,
  icon: Icon,
  title,
  description,
}: {
  number: string;
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-[30px] border border-white/10 bg-white/5 p-7">

      <div className="flex items-center justify-between">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[#25c6e6]">
          <Icon size={22} />
        </div>

        <span className="text-2xl font-bold text-white/10">
          {number}
        </span>

      </div>

      <h3 className="mt-7 text-xl font-bold">
        {title}
      </h3>

      <p className="mt-4 text-sm leading-7 text-slate-400">
        {description}
      </p>

    </div>
  );
}