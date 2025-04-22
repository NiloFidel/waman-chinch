// TourMistico4en1.tsx
"use client";

import React from "react";
import { useParams } from "next/navigation";
import Imagenes from "@/components/Renders/imagenes/imagenes";
import Principal from "@/components/Renders/principal/principal";
import Informacion from "@/components/Renders/informacion/informacion";

import imgMain from "@/public/images/OneDayTour/Tour Mistico/mistico main.jpg";
import img1    from "@/public/images/OneDayTour/Tour Mistico/mistico1.jpg";
import img2    from "@/public/images/OneDayTour/Tour Mistico/mistico2.jpg";
import img3    from "@/public/images/OneDayTour/Tour Mistico/mistico3.jpg";
import img4    from "@/public/images/OneDayTour/Tour Mistico/mistico4.jpg";
import img5    from "@/public/images/OneDayTour/Tour Mistico/mistico5.jpg";

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
    generalTitle: "Tour Místico 4 en 1 (Full Day)",
    tripOverview: {
      title: "Resumen del Tour",
      paragraphs: [
        "Combina 4 experiencias espirituales: templo Andino, spa en aguas termales, ceremonia de hojas de coca y meditación en ruinas.",
        "Ideal para quienes buscan conexión con la Pachamama y sanación energética.",
        "Salida desde Cusco con guía especializado en cosmología andina.",
      ],
      highlights: [
        "Templo ceremonial Andino",
        "Aguas termales privadas",
        "Ceremonia de hojas de coca",
        "Meditación en sitio arqueológico",
      ],
    },
    itinerary: {
      title: "Itinerario Detallado",
      steps: [
        "08:00 AM – Pickup en Cusco",
        "09:00 AM – Visita al templo ceremonial",
        "10:30 AM – Sesión de meditación en ruinas",
        "12:00 PM – Almuerzo ligero con productos locales",
        "01:00 PM – Ceremonia de hojas de coca",
        "02:30 PM – Spa en aguas termales",
        "04:00 PM – Retorno a Cusco",
        "05:30 PM – Drop‑off en hotel",
      ],
    },
    details: {
      title: "Detalles del Tour",
      rows: [
        { label: "Duración", value: "9.5 horas" },
        { label: "Actividad", value: "Ceremonial y wellness" },
        { label: "Guía", value: "Espiritual Andino" },
        { label: "Comidas", value: "Almuerzo ligero" },
        { label: "Transporte", value: "Van privada" },
      ],
    },
    incluye: {
      title: "¿Qué incluye?",
      blocks: [
        { subtitle: "Templo y Ceremonia", items: ["Acceso y guía ritual"] },
        { subtitle: "Meditación", items: ["Espacio sagrado y guía"] },
        { subtitle: "Almuerzo", items: ["Plato vegetariano"] },
        { subtitle: "Spa", items: ["Aguas termales privadas"] },
      ],
      exclusions: ["Propinas", "Souvenirs", "Seguro"],
    },
    queLlevar: {
      title: "Qué llevar",
      blocks: [
        { subtitle: "Esenciales", items: ["Ropa cómoda", "Agua"] },
        { subtitle: "Otros", items: ["Diario y bolígrafo", "Meditación mat"] },
      ],
    },
    fechasSalida: {
      title: "Fechas de salida",
      schedule: ["Miércoles y Sábados"],
      pickupTime: "08:00 AM – 08:15 AM",
    },
    precios: {
      title: "Precios",
      serviceNote: "Tour especializado místico",
      rates: [
        { group: "1–2 personas", price: "US$ 150" },
        { group: "3–4 personas", price: "US$ 130" },
      ],
      footnote: "Tarifa por persona",
    },
    information: {
      price: "US$ 150",
      duration: "9.5 horas",
      difficulty: "Baja",
      maxAltitude: "3,700 m.s.n.m.",
      lodging: "No incluido",
      food: "Almuerzo ligero",
      whatsappMessage: "Quiero reservar Tour Místico 4 en 1: ",
      bookNow: "Reserva Ahora",
    },
  },
  en: {
    generalTitle: "Mystic 4‑in‑1 Tour (Full Day)",
    tripOverview: {
      title: "Trip Overview",
      paragraphs: [
        "Combine 4 spiritual experiences: Andean temple, hot‑spring spa, coca leaf ceremony & ruins meditation.",
        "Perfect for Pachamama connection & energetic healing.",
        "Depart from Cusco with an Andean cosmology guide.",
      ],
      highlights: [
        "Andean ceremonial temple",
        "Private hot springs spa",
        "Coca leaf ceremony",
        "Ruins meditation",
      ],
    },
    itinerary: {
      title: "Detailed Itinerary",
      steps: [
        "08:00 AM – Cusco pickup",
        "09:00 AM – Ceremonial temple visit",
        "10:30 AM – Ruins meditation session",
        "12:00 PM – Light lunch w/ local produce",
        "01:00 PM – Coca leaf ceremony",
        "02:30 PM – Private hot springs spa",
        "04:00 PM – Return to Cusco",
        "05:30 PM – Hotel drop‑off",
      ],
    },
    details: {
      title: "Tour Details",
      rows: [
        { label: "Duration", value: "9.5 hours" },
        { label: "Activity", value: "Ceremony & wellness" },
        { label: "Guide", value: "Andean spiritual guide" },
        { label: "Meals", value: "Light lunch" },
        { label: "Transport", value: "Private van" },
      ],
    },
    incluye: {
      title: "What's included?",
      blocks: [
        { subtitle: "Ceremony", items: ["Temple access & ritual guide"] },
        { subtitle: "Meditation", items: ["Sacred space & guide"] },
        { subtitle: "Lunch", items: ["Vegetarian meal"] },
        { subtitle: "Spa", items: ["Private hot spring access"] },
      ],
      exclusions: ["Tips", "Souvenirs", "Insurance"],
    },
    queLlevar: {
      title: "What to bring?",
      blocks: [
        { subtitle: "Essentials", items: ["Comfortable clothes", "Water"] },
        { subtitle: "Others", items: ["Journal & pen", "Meditation mat"] },
      ],
    },
    fechasSalida: {
      title: "Departure Dates",
      schedule: ["Wednesdays & Saturdays"],
      pickupTime: "08:00 AM – 08:15 AM",
    },
    precios: {
      title: "Prices",
      serviceNote: "Specialized mystic tour",
      rates: [
        { group: "1–2 pax", price: "US$ 150" },
        { group: "3–4 pax", price: "US$ 130" },
      ],
      footnote: "Rate per person",
    },
    information: {
      price: "US$ 150",
      duration: "9.5 hours",
      difficulty: "Low",
      maxAltitude: "3,700 m.a.s.l.",
      lodging: "Not included",
      food: "Light lunch",
      whatsappMessage: "I want to book Mystic 4‑in‑1 Tour: ",
      bookNow: "Book Now",
    },
  },
};

export default function TourMistico4en1() {
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
