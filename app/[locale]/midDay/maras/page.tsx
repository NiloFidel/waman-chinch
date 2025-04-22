// MarasMoraySalineras.tsx
"use client";

import React from "react";
import { useParams } from "next/navigation";
import Imagenes from "@/components/Renders/imagenes/imagenes";
import Principal from "@/components/Renders/principal/principal";
import Informacion from "@/components/Renders/informacion/informacion";

import imgMain from "@/public/images/Valle/ValleMaras/maras main.jpg";
import img1    from "@/public/images/Valle/ValleMaras/maras1.jpg";
import img2    from "@/public/images/Valle/ValleMaras/maras2.jpg";
import img3    from "@/public/images/Valle/ValleMaras/maras3.jpg";
import img4    from "@/public/images/Valle/ValleMaras/maras4.jpg";
import img5    from "@/public/images/Valle/ValleMaras/maras5.jpg";

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
    generalTitle: "Maras – Moray – Salineras (Full Day)",
    tripOverview: {
      title: "Resumen del Tour",
      paragraphs: [
        "Descubre las terrazas circulares de Moray y las salineras de Maras en un solo día.",
        "Un viaje cultural y geológico que muestra la ingeniería inca y las minas de sal ancestrales.",
        "Incluye guía experto y transporte privado desde Cusco.",
      ],
      highlights: [
        "Terrazas de Moray",
        "Salineras de Maras",
        "Paisajes únicos",
        "Guía bilingüe",
      ],
    },
    itinerary: {
      title: "Itinerario Detallado",
      steps: [
        "07:00 AM – Pickup en Cusco",
        "08:30 AM – Llegada a Moray y visita guiada",
        "10:00 AM – Traslado a Maras",
        "10:30 AM – Recorrido por las salineras",
        "12:00 PM – Almuerzo buffet en Urubamba",
        "02:00 PM – Regreso a Cusco",
        "03:30 PM – Drop‑off en hotel",
      ],
    },
    details: {
      title: "Detalles del Tour",
      rows: [
        { label: "Duración", value: "8.5 horas" },
        { label: "Guía", value: "Profesional bilingüe" },
        { label: "Comidas", value: "Almuerzo buffet" },
        { label: "Transporte", value: "Van privada" },
      ],
    },
    incluye: {
      title: "¿Qué incluye?",
      blocks: [
        { subtitle: "Transporte", items: ["Van privada A/C"] },
        { subtitle: "Guía", items: ["Guía oficial bilingüe"] },
        { subtitle: "Entradas", items: ["Moray y Maras"] },
        { subtitle: "Comidas", items: ["Almuerzo buffet"] },
      ],
      exclusions: ["Propinas", "Snacks extra", "Seguro"],
    },
    queLlevar: {
      title: "Qué llevar",
      blocks: [
        { subtitle: "Esenciales", items: ["ID", "Dinero en efectivo"] },
        { subtitle: "Ropa", items: ["Chaqueta", "Calzado cómodo"] },
      ],
    },
    fechasSalida: {
      title: "Fechas de salida",
      schedule: ["Lunes a Sábado"],
      pickupTime: "07:00 AM – 07:15 AM",
    },
    precios: {
      title: "Precios",
      serviceNote: "Tour regular compartido",
      rates: [
        { group: "2–6 personas", price: "US$ 70" },
        { group: "7+ personas", price: "US$ 60" },
      ],
      footnote: "Tarifa por persona",
    },
    information: {
      price: "US$ 70",
      duration: "8.5 horas",
      difficulty: "Baja",
      maxAltitude: "3,500 m.s.n.m.",
      lodging: "No incluido",
      food: "Almuerzo buffet",
      whatsappMessage: "Quiero reservar Maras‑Moray: ",
      bookNow: "Reserva Ahora",
    },
  },
  en: {
    generalTitle: "Maras – Moray – Salt Mines (Full Day)",
    tripOverview: {
      title: "Trip Overview",
      paragraphs: [
        "Explore Moray’s circular terraces and Maras salt mines in a single day.",
        "A cultural and geological journey showcasing Inca engineering and ancestral salt pits.",
        "Includes expert guide and private transport from Cusco.",
      ],
      highlights: [
        "Moray terraces",
        "Maras salt mines",
        "Unique landscapes",
        "Bilingual guide",
      ],
    },
    itinerary: {
      title: "Detailed Itinerary",
      steps: [
        "07:00 AM – Cusco pickup",
        "08:30 AM – Moray guided visit",
        "10:00 AM – Transfer to Maras",
        "10:30 AM – Salt mines tour",
        "12:00 PM – Buffet lunch in Urubamba",
        "02:00 PM – Return to Cusco",
        "03:30 PM – Hotel drop‑off",
      ],
    },
    details: {
      title: "Tour Details",
      rows: [
        { label: "Duration", value: "8.5 hours" },
        { label: "Guide", value: "Professional bilingual" },
        { label: "Meals", value: "Buffet lunch" },
        { label: "Transport", value: "Private van" },
      ],
    },
    incluye: {
      title: "What's included?",
      blocks: [
        { subtitle: "Transport", items: ["Private van w/ A/C"] },
        { subtitle: "Guide", items: ["Official bilingual guide"] },
        { subtitle: "Tickets", items: ["Moray & Maras"] },
        { subtitle: "Meals", items: ["Buffet lunch"] },
      ],
      exclusions: ["Tips", "Extra snacks", "Insurance"],
    },
    queLlevar: {
      title: "What to bring?",
      blocks: [
        { subtitle: "Essentials", items: ["ID", "Cash"] },
        { subtitle: "Clothing", items: ["Jacket", "Comfortable shoes"] },
      ],
    },
    fechasSalida: {
      title: "Departure Dates",
      schedule: ["Monday–Saturday"],
      pickupTime: "07:00 AM – 07:15 AM",
    },
    precios: {
      title: "Prices",
      serviceNote: "Shared regular tour",
      rates: [
        { group: "2–6 pax", price: "US$ 70" },
        { group: "7+ pax", price: "US$ 60" },
      ],
      footnote: "Rate per person",
    },
    information: {
      price: "US$ 70",
      duration: "8.5 hours",
      difficulty: "Low",
      maxAltitude: "3,500 m.a.s.l.",
      lodging: "Not included",
      food: "Buffet lunch",
      whatsappMessage: "I want to book Maras‑Moray: ",
      bookNow: "Book Now",
    },
  },
};

export default function MarasMoraySalineras() {
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
