import {
  Property,
  PropertyLocale,
} from "@/types/property";

export const WHATSAPP_NUMBER =
  "966500000000";

const messages: Record<
  PropertyLocale,
  (
    property: Property
  ) => string
> = {
  fr: (property) =>
    `Salam alaykoum, je suis intéressé par le logement "${property.title.fr}" (référence ${property.reference}). Est-il toujours disponible ?`,

  en: (property) =>
    `Hello, I'm interested in "${property.title.en}" (reference ${property.reference}). Is it still available?`,

  ar: (property) =>
    `السلام عليكم، أنا مهتم بالعقار "${property.title.ar}" رقم ${property.reference}. هل ما زال متاحاً؟`,

  ru: (property) =>
    `Здравствуйте, меня интересует объект "${property.title.ru}" (${property.reference}). Он ещё доступен?`,

  ur: (property) =>
    `السلام علیکم، میں "${property.title.ur}" (${property.reference}) میں دلچسپی رکھتا ہوں۔ کیا یہ ابھی دستیاب ہے؟`,
};

export function getWhatsAppUrl(
  property: Property,
  locale: PropertyLocale
) {
  const message =
    messages[locale](property);

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;
}