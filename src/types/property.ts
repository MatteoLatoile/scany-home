export type PropertyLocale =
  | "ar"
  | "en"
  | "fr"
  | "ru"
  | "ur";

export type PropertyType =
  | "apartment"
  | "villa"
  | "studio"
  | "house";

export type RentType =
  | "daily"
  | "monthly"
  | "yearly";

export type PropertyFeature =
  | "elevator"
  | "parking"
  | "airConditioning"
  | "equippedKitchen"
  | "internet"
  | "waterIncluded"
  | "electricityIncluded"
  | "balcony";

export type Property = {
  id: number;

  slug: string;

  reference: string;

  title: Record<PropertyLocale, string>;

  description: Record<
    PropertyLocale,
    string
  >;

  district: Record<
    PropertyLocale,
    string
  >;

  city: Record<PropertyLocale, string>;

  type: PropertyType;

  rentType: RentType;

  price: number;

  bedrooms: number;

  bathrooms: number;

  livingRooms: number;

  area: number;

  floor: number;

  furnished: boolean;

  images: string[];

  latitude: number;

  longitude: number;

  features: PropertyFeature[];

  featured?: boolean;
};