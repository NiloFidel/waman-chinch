export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

export const translations = {
  en: {
    resumen: "Summary",
    itinerario: "Itinerary",
    detalles: "Details",
    incluye: "Included",
    queLlevar: "What away",
    fechasSalida: "Go out dates",
    precios: "Prices",
    grupo: "Group",
    precio: "Price"
  },
  es: { 
    resumen: "Resumen",
    itinerario: "Itinerario",
    detalles: "Detalles",
    incluye: "Incluye",
    queLlevar: "Qué llevar",
    fechasSalida: "Fechas de salida",
    precios: "Precios",
    grupo: "Grupo",
    precio: "Precio"
  },
};
