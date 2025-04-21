export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

export const translations = {
  en: {
    Information: "Information", 
    Price: "Price", 
    Duration: "Duration", 
    Difficulty: "Difficulty", 
    Height: "Height", 
    Accommodation: "Accommodation", 
    Food: "Food",
  },
  es: { 
    Information: "Información", 
    Price: "Precio", 
    Duration: "Duración", 
    Difficulty: "Dificultad", 
    Height: "Altura", 
    Accommodation: "Alojamiento", 
    Food: "Comida",
  },
};
