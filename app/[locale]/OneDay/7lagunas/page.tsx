// SieteLagunas.tsx
"use client";

import React from "react";
import { useParams } from "next/navigation";
import Imagenes from "@/components/Renders/imagenes/imagenes";
import Principal from "@/components/Renders/principal/principal";
import Informacion from "@/components/Renders/informacion/informacion";

import imgMain from "@/public/images/OneDayTour/Siete Lagunas/lake main.webp";
import img1    from "@/public/images/OneDayTour/Siete Lagunas/lake1.jpg";
import img2    from "@/public/images/OneDayTour/Siete Lagunas/lake2.jpg";
import img3    from "@/public/images/OneDayTour/Siete Lagunas/lake3.jpg";
import img4    from "@/public/images/OneDayTour/Siete Lagunas/lake4.jpg";
import img5    from "@/public/images/OneDayTour/Siete Lagunas/lake5.jpg";

interface Block { subtitle: string; items: string[]; }

interface TranslationContent {
  generalTitle: string;
  tripOverview: { title: string; paragraphs: string[]; highlights: string[] };
  itinerary:     { title: string; steps: string[] };
  details:       { title: string; rows: { label: string; value: string }[] };
  incluye:       { title: string; blocks: Block[]; exclusions: string[] };
  queLlevar:     { title: string; blocks: Block[] };
  fechasSalida:  { title: string; schedule: string[]; pickupTime: string };
  precios:       { title: string; serviceNote: string; rates: { group: string; price: string }[]; footnote: string };
  information:   { price: string; duration: string; difficulty: string; maxAltitude: string; lodging: string; food: string; whatsappMessage: string; bookNow: string };
}

const globalImages = {
  mapImage: imgMain.src,
  smallImages: [img1.src, img2.src, img3.src, img4.src, img5.src],
};

const translations: Record<"es"|"en", TranslationContent> = {
  es: {
    generalTitle: "Tour Siete Lagunas (Full Day)",
    tripOverview: {
      title: "Resumen del Tour",
      paragraphs: [
        "Admira siete hermosas lagunas de alta montaña en un espectacular circuito andino.",
        "Salida desde Cusco pasando por paisajes de puna y comunidades tradicionales.",
        "Caminata moderada con vistas increíbles de nevados y lagunas turquesa.",
      ],
      highlights: [
        "Visita a las 7 lagunas",
        "Paisajes de puna y nevados",
        "Guía bilingüe profesional",
        "Snack energético y bebidas calientes",
        "Transporte privado ida y vuelta",
      ],
    },
    itinerary: {
      title: "Itinerario Detallado",
      steps: [
        "05:00 AM – Pickup en hotel y salida hacia el punto de inicio",
        "07:00 AM – Llegada y breve charla de orientación",
        "07:30 AM – Inicio de la caminata hacia la primera laguna",
        "10:00 AM – Visita a todas las lagunas con paradas para fotos",
        "12:30 PM – Snack y tiempo libre en la última laguna",
        "01:00 PM – Retorno al punto de inicio",
        "03:00 PM – Regreso a Cusco",
        "05:00 PM – Llegada estimada y drop‑off en hotel",
      ],
    },
    details: {
      title: "Detalles del Tour",
      rows: [
        { label: "Distancia", value: "14 km (ida y vuelta)" },
        { label: "Altitud mínima", value: "4,200 m.s.n.m." },
        { label: "Altitud máxima", value: "4,600 m.s.n.m." },
        { label: "Duración", value: "10 horas" },
        { label: "Dificultad", value: "Moderada" },
        { label: "Grupo", value: "Máx. 12 personas" },
        { label: "Idioma", value: "Español/Inglés" },
      ],
    },
    incluye: {
      title: "¿Qué incluye?",
      blocks: [
        { subtitle: "Transporte", items: ["Vehículo privado A/C"] },
        { subtitle: "Guía", items: ["Guía profesional bilingüe"] },
        { subtitle: "Snacks", items: ["Snack energético y frutas"] },
        { subtitle: "Entradas", items: ["Permiso de acceso al circuito"] },
      ],
      exclusions: ["Almuerzo", "Equipo personal", "Propinas"],
    },
    queLlevar: {
      title: "Qué llevar",
      blocks: [
        { subtitle: "Esenciales", items: ["Documento de identidad", "Dinero en efectivo"] },
        { subtitle: "Ropa", items: ["Chaqueta térmica", "Calzado de trekking"] },
        { subtitle: "Equipo", items: ["Mochila ligera", "Botella de agua"] },
      ],
    },
    fechasSalida: {
      title: "Fechas de salida",
      schedule: ["Salidas diarias (mín. 2 personas)"],
      pickupTime: "05:00 AM – 05:30 AM",
    },
    precios: {
      title: "Precios",
      serviceNote: "Tour grupal regular",
      rates: [
        { group: "2–4 personas", price: "US$ 80" },
        { group: "5–8 personas", price: "US$ 70" },
        { group: "9+ personas", price: "US$ 60" },
      ],
      footnote: "Tarifas por persona, sujetas a cambios",
    },
    information: {
      price: "US$ 80",
      duration: "10 horas",
      difficulty: "Moderada",
      maxAltitude: "4,600 m.s.n.m.",
      lodging: "No incluido",
      food: "Snack incluido",
      whatsappMessage: "Quiero reservar Siete Lagunas: ",
      bookNow: "Reserva Ahora",
    },
  },
  en: {
    generalTitle: "Seven Lagoons Tour (Full Day)",
    tripOverview: {
      title: "Trip Overview",
      paragraphs: [
        "Discover seven stunning high‑altitude lagoons in an amazing Andean circuit.",
        "Depart from Cusco through puna landscapes and traditional communities.",
        "Moderate hike with breathtaking turquoise lagoon views.",
      ],
      highlights: [
        "Visit all 7 lagoons",
        "Puna and glacier scenery",
        "Professional bilingual guide",
        "Energy snack & hot drinks",
        "Round‑trip private transport",
      ],
    },
    itinerary: {
      title: "Detailed Itinerary",
      steps: [
        "05:00 AM – Hotel pickup and departure",
        "07:00 AM – Arrival & orientation briefing",
        "07:30 AM – Hike to the first lagoon",
        "10:00 AM – Lagoon visits & photo stops",
        "12:30 PM – Snack & free time",
        "01:00 PM – Return hike",
        "03:00 PM – Drive back to Cusco",
        "05:00 PM – Hotel drop‑off",
      ],
    },
    details: {
      title: "Tour Details",
      rows: [
        { label: "Distance", value: "14 km round‑trip" },
        { label: "Min Altitude", value: "4,200 m.a.s.l." },
        { label: "Max Altitude", value: "4,600 m.a.s.l." },
        { label: "Duration", value: "10 hours" },
        { label: "Difficulty", value: "Moderate" },
        { label: "Group Size", value: "Max 12 pax" },
        { label: "Language", value: "Español/English" },
      ],
    },
    incluye: {
      title: "What's included?",
      blocks: [
        { subtitle: "Transport", items: ["Private A/C vehicle"] },
        { subtitle: "Guide", items: ["Professional bilingual guide"] },
        { subtitle: "Snacks", items: ["Energy snack & fruit"] },
        { subtitle: "Tickets", items: ["Circuit access permit"] },
      ],
      exclusions: ["Lunch", "Personal gear", "Tips"],
    },
    queLlevar: {
      title: "What to bring?",
      blocks: [
        { subtitle: "Essentials", items: ["ID/passport", "Cash"] },
        { subtitle: "Clothing", items: ["Thermal jacket", "Trekking boots"] },
        { subtitle: "Gear", items: ["Light backpack", "Water bottle"] },
      ],
    },
    fechasSalida: {
      title: "Departure Dates",
      schedule: ["Daily departures (min. 2 pax)"],
      pickupTime: "05:00 AM – 05:30 AM",
    },
    precios: {
      title: "Prices",
      serviceNote: "Shared group tour",
      rates: [
        { group: "2–4 pax", price: "US$ 80" },
        { group: "5–8 pax", price: "US$ 70" },
        { group: "9+ pax", price: "US$ 60" },
      ],
      footnote: "Rates per person, subject to change",
    },
    information: {
      price: "US$ 80",
      duration: "10 hours",
      difficulty: "Moderate",
      maxAltitude: "4,600 m.a.s.l.",
      lodging: "Not included",
      food: "Snack included",
      whatsappMessage: "I want to book Seven Lagoons: ",
      bookNow: "Book Now",
    },
  },
};

export default function SieteLagunas() {
  const params = useParams();
  const locale = params.locale === "en" ? "en" : "es";
  const content = translations[locale];

  return (
    <div style={{ display: "flex", gap: "50px" }}>
      <div style={{ width: "70%" }}>
        <h1>{content.generalTitle}</h1>
        <Imagenes mapImage={globalImages.mapImage} smallImages={globalImages.smallImages} />
        <Principal
          tripOverview={content.tripOverview}
          itinerary={content.itinerary}
          details={content.details}
          incluye={content.incluye}
          queLlevar={content.queLlevar}
          fechasSalida={content.fechasSalida}
          precios={content.precios}
          locale={locale}
        />
      </div>
      <div style={{ width: "30%" }}>
        <Informacion {...content.information} locale={locale} generalTitle={content.generalTitle} />
      </div>
    </div>
);
}
