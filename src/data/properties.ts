import { Property } from "@/types/property";

export const properties: Property[] = [
  {
    id: 1,

    slug: "modern-apartment-al-aridh",

    reference: "SC-001",

    title: {
      ar: "شقة حديثة في حي العريض",
      en: "Modern apartment in Al Aridh",
      fr: "Appartement moderne à Al Aridh",
      ru: "Современная квартира в Аль-Арид",
      ur: "العریض میں جدید اپارٹمنٹ",
    },

    district: {
      ar: "العريض",
      en: "Al Aridh",
      fr: "Al Aridh",
      ru: "Аль-Арид",
      ur: "العریض",
    },

    city: {
      ar: "المدينة المنورة",
      en: "Madinah",
      fr: "Médine",
      ru: "Медина",
      ur: "مدینہ منورہ",
    },

    description: {
      ar: "شقة حديثة ومضيئة بتصميم عصري، مناسبة للعائلات وقريبة من الخدمات.",
      en: "Bright modern apartment with a contemporary design, ideal for families and close to local services.",
      fr: "Appartement moderne et lumineux au design contemporain, idéal pour une famille et proche des commodités.",
      ru: "Светлая современная квартира, подходящая для семьи и расположенная рядом с необходимой инфраструктурой.",
      ur: "جدید اور روشن اپارٹمنٹ، خاندان کے لیے موزوں اور ضروری سہولیات کے قریب۔",
    },

    type: "apartment",

    rentType: "monthly",

    price: 2500,

    bedrooms: 3,

    bathrooms: 2,

    livingRooms: 1,

    area: 135,

    floor: 2,

    furnished: true,

    latitude: 24.5006,
    longitude: 39.6366,

    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85",
    ],

    features: [
      "elevator",
      "parking",
      "airConditioning",
      "equippedKitchen",
      "internet",
    ],

    featured: true,
  },

  {
    id: 2,

    slug: "family-villa-al-awali",

    reference: "SC-002",

    title: {
      ar: "فيلا عائلية في العوالي",
      en: "Family villa in Al Awali",
      fr: "Villa familiale à Al Awali",
      ru: "Семейная вилла в Аль-Авали",
      ur: "العوالی میں فیملی ولا",
    },

    district: {
      ar: "العوالي",
      en: "Al Awali",
      fr: "Al Awali",
      ru: "Аль-Авали",
      ur: "العوالی",
    },

    city: {
      ar: "المدينة المنورة",
      en: "Madinah",
      fr: "Médine",
      ru: "Медина",
      ur: "مدینہ منورہ",
    },

    description: {
      ar: "فيلا واسعة مناسبة للعائلات مع غرف متعددة وموقف سيارة.",
      en: "Spacious family villa with multiple bedrooms, generous living areas and private parking.",
      fr: "Grande villa familiale avec plusieurs chambres, de beaux espaces de vie et un parking privé.",
      ru: "Просторная семейная вилла с несколькими спальнями и парковкой.",
      ur: "کشادہ فیملی ولا، متعدد کمروں اور نجی پارکنگ کے ساتھ۔",
    },

    type: "villa",

    rentType: "yearly",

    price: 42000,

    bedrooms: 5,

    bathrooms: 4,

    livingRooms: 2,

    area: 310,

    floor: 1,

    furnished: false,

    latitude: 24.4408,
    longitude: 39.6172,

    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1400&q=85",
    ],

    features: [
      "parking",
      "airConditioning",
      "equippedKitchen",
      "balcony",
    ],

    featured: true,
  },

  {
    id: 3,

    slug: "furnished-apartment-qurban",

    reference: "SC-003",

    title: {
      ar: "شقة مفروشة في قباء",
      en: "Furnished apartment in Qurban",
      fr: "Appartement meublé à Qurban",
      ru: "Меблированная квартира в Кубе",
      ur: "قربان میں فرنشڈ اپارٹمنٹ",
    },

    district: {
      ar: "قربان",
      en: "Qurban",
      fr: "Qurban",
      ru: "Куба",
      ur: "قربان",
    },

    city: {
      ar: "المدينة المنورة",
      en: "Madinah",
      fr: "Médine",
      ru: "Медина",
      ur: "مدینہ منورہ",
    },

    description: {
      ar: "شقة مفروشة بالكامل بتصميم أنيق وموقع قريب من الخدمات.",
      en: "Fully furnished apartment with stylish interiors and a convenient location.",
      fr: "Appartement entièrement meublé avec un intérieur élégant et un emplacement pratique.",
      ru: "Полностью меблированная квартира с современным интерьером.",
      ur: "مکمل فرنشڈ اپارٹمنٹ، خوبصورت اندرونی ڈیزائن کے ساتھ۔",
    },

    type: "apartment",

    rentType: "monthly",

    price: 3200,

    bedrooms: 2,

    bathrooms: 2,

    livingRooms: 1,

    area: 105,

    floor: 3,

    furnished: true,

    latitude: 24.4536,
    longitude: 39.6268,

    images: [
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=85",
    ],

    features: [
      "elevator",
      "airConditioning",
      "internet",
      "waterIncluded",
      "electricityIncluded",
    ],
  },

  {
    id: 4,

    slug: "apartment-bani-muawiyah",

    reference: "SC-004",

    title: {
      ar: "شقة واسعة في بني معاوية",
      en: "Spacious apartment in Bani Muawiyah",
      fr: "Appartement spacieux à Bani Muawiyah",
      ru: "Просторная квартира в Бани Муавия",
      ur: "بنی معاویہ میں کشادہ اپارٹمنٹ",
    },

    district: {
      ar: "بني معاوية",
      en: "Bani Muawiyah",
      fr: "Bani Muawiyah",
      ru: "Бани Муавия",
      ur: "بنی معاویہ",
    },

    city: {
      ar: "المدينة المنورة",
      en: "Madinah",
      fr: "Médine",
      ru: "Медина",
      ur: "مدینہ منورہ",
    },

    description: {
      ar: "شقة مريحة بمساحة واسعة وموقع جيد.",
      en: "Comfortable apartment offering generous space and a convenient location.",
      fr: "Appartement confortable avec de beaux volumes et un emplacement pratique.",
      ru: "Комфортная просторная квартира.",
      ur: "آرام دہ اور کشادہ اپارٹمنٹ۔",
    },

    type: "apartment",

    rentType: "monthly",

    price: 2100,

    bedrooms: 3,

    bathrooms: 2,

    livingRooms: 1,

    area: 145,

    floor: 4,

    furnished: false,

    latitude: 24.4835,
    longitude: 39.6253,

    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1560185008-b033106af5c3?auto=format&fit=crop&w=1400&q=85",
    ],

    features: [
      "elevator",
      "airConditioning",
      "parking",
    ],
  },

  {
    id: 5,

    slug: "studio-al-anabis",

    reference: "SC-005",

    title: {
      ar: "استوديو مفروش في العنابس",
      en: "Furnished studio in Al Anabis",
      fr: "Studio meublé à Al Anabis",
      ru: "Меблированная студия в Аль-Анабис",
      ur: "العنابس میں فرنشڈ اسٹوڈیو",
    },

    district: {
      ar: "العنابس",
      en: "Al Anabis",
      fr: "Al Anabis",
      ru: "Аль-Анабис",
      ur: "العنابس",
    },

    city: {
      ar: "المدينة المنورة",
      en: "Madinah",
      fr: "Médine",
      ru: "Медина",
      ur: "مدینہ منورہ",
    },

    description: {
      ar: "استوديو عملي ومفروش بالكامل مناسب لشخص أو زوجين.",
      en: "Practical fully furnished studio ideal for one person or a couple.",
      fr: "Studio pratique entièrement meublé, idéal pour une personne ou un couple.",
      ru: "Практичная меблированная студия.",
      ur: "عملی اور مکمل فرنشڈ اسٹوڈیو۔",
    },

    type: "studio",

    rentType: "monthly",

    price: 1700,

    bedrooms: 1,

    bathrooms: 1,

    livingRooms: 1,

    area: 55,

    floor: 2,

    furnished: true,

    latitude: 24.473,
    longitude: 39.5985,

    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=1400&q=85",
    ],

    features: [
      "airConditioning",
      "internet",
      "waterIncluded",
    ],
  },

  {
    id: 6,

    slug: "family-apartment-al-mughaisilah",

    reference: "SC-006",

    title: {
      ar: "شقة عائلية في المغيسلة",
      en: "Family apartment in Al Mughaisilah",
      fr: "Appartement familial à Al Mughaisilah",
      ru: "Семейная квартира в Аль-Мугайсила",
      ur: "المغیسلہ میں فیملی اپارٹمنٹ",
    },

    district: {
      ar: "المغيسلة",
      en: "Al Mughaisilah",
      fr: "Al Mughaisilah",
      ru: "Аль-Мугайсила",
      ur: "المغیسلہ",
    },

    city: {
      ar: "المدينة المنورة",
      en: "Madinah",
      fr: "Médine",
      ru: "Медина",
      ur: "مدینہ منورہ",
    },

    description: {
      ar: "شقة عائلية اقتصادية قريبة من المتاجر والخدمات.",
      en: "Affordable family apartment close to shops and everyday services.",
      fr: "Appartement familial économique proche des commerces et services.",
      ru: "Доступная семейная квартира рядом с магазинами.",
      ur: "مناسب قیمت والا فیملی اپارٹمنٹ۔",
    },

    type: "apartment",

    rentType: "yearly",

    price: 22000,

    bedrooms: 3,

    bathrooms: 2,

    livingRooms: 1,

    area: 130,

    floor: 1,

    furnished: false,

    latitude: 24.4634,
    longitude: 39.5879,

    images: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=85",
    ],

    features: [
      "parking",
      "airConditioning",
      "equippedKitchen",
    ],
  },
];

export function getPropertyBySlug(
  slug: string
) {
  return properties.find(
    (property) =>
      property.slug === slug
  );
}