import "../globals.css";

import { NextIntlClientProvider, hasLocale } from "next-intl";
import {
  getMessages,
  setRequestLocale,
} from "next-intl/server";

import { notFound } from "next/navigation";

import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({
    locale,
  }));
}

type Props = {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export default async function LocaleLayout({
  children,
  params,
}: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  const isRTL =
    locale === "ar" ||
    locale === "ur";

  return (
    <html
      lang={locale}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <body>
        <NextIntlClientProvider
          locale={locale}
          messages={messages}
        >
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}