// Waqrapucara.tsx
"use client";

import React from "react";
import { useParams } from "next/navigation";
import Imagenes from "@/components/Renders/imagenes/imagenes";
import Principal from "@/components/Renders/principal/principal";
import Informacion from "@/components/Renders/informacion/informacion";

import imgMain from "@/public/images/OneDayTour/Waqrapukara/waqra main.webp";
import img1    from "@/public/images/OneDayTour/Waqrapukara/waqra1.jpg";
import img2    from "@/public/images/OneDayTour/Waqrapukara/waqra2.jpg";
import img3    from "@/public/images/OneDayTour/Waqrapukara/waqra3.jpg";
import img4    from "@/public/images/OneDayTour/Waqrapukara/waqra4.jpg";
import img5    from "@/public/images/OneDayTour/Waqrapukara/waqra5.jpg";

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
    generalTitle: "Tour Waqra Pucara (Full Day)",
    tripOverview: {
      title: "Resumen del Tour",
      paragraphs: [
        "Explora el sitio arqueológico Waqra Pucara, centro administrativo inca, poco concurrido por turistas.",
        "Recorrido desde Cusco atravesando valles y comunidades andinas auténticas.",
        "Guía especializado explica la historia y funcionamiento del antaiguo tambos.",
      ],
      highlights: [
        "Ruinas incas intactas",
        "Puestos de control y tambos",
        "Guía bilingüe profesional",
        "Snack y bebidas calientes",
        "Transporte privado ida/vuelta",
      ],
    },
    itinerary: {
      title: "Itinerario Detallado",
      steps: [
        "06:00 AM – Pickup en Cusco",
        "07:30 AM – Llegada a Waqra Pucara y charla introductoria",
        "08:00 AM – Recorrido guiado por las ruinas",
        "09:30 AM – Panorámicas y tiempo para fotos",
        "10:00 AM – Snack en sitio arqueológico",
        "10:30 AM – Interpretación de tambos y caminos",
        "11:30 AM – Retorno a Cusco",
        "01:00 PM – Drop‑off en hotel",
      ],
    },
    details: {
      title: "Detalles del Tour",
      rows: [
        { label: "Duración", value: "7 horas" },
        { label: "Altitud", value: "3,900 m.s.n.m." },
        { label: "Distancia caminata", value: "2 km" },
        { label: "Dificultad", value: "Fácil" },
        { label: "Guía", value: "Profesional bilingüe" },
        { label: "Comidas", value: "Snack y bebidas calientes" },
      ],
    },
    incluye: {
      title: "¿Qué incluye?",
      blocks: [
        { subtitle: "Transporte", items: ["Vehículo privado A/C"] },
        { subtitle: "Guía", items: ["Guía bilingüe profesional"] },
        { subtitle: "Snacks", items: ["Snack energético", "Mate de coca"] },
        { subtitle: "Entradas", items: ["Permiso Waqra Pucara"] },
      ],
      exclusions: ["Almuerzo", "Propinas", "Seguro de viaje"],
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
      schedule: ["Diarias, sujeto a min. 2 personas"],
      pickupTime: "06:00 AM – 06:30 AM",
    },
    precios: {
      title: "Precios",
      serviceNote: "Tour privado o grupal",
      rates: [
        { group: "1–2 pax", price: "US$ 70" },
        { group: "3–6 pax", price: "US$ 60" },
      ],
      footnote: "Tarifas por persona",
    },
    information: {
      price: "US$ 70",
      duration: "7 horas",
      difficulty: "Fácil",
      maxAltitude: "3,900 m.s.n.m.",
      lodging: "No incluido",
      food: "Snack incluido",
      whatsappMessage: "Quiero reservar Waqra Pucara: ",
      bookNow: "Reserva Ahora",
    },
  },
  en: {
    generalTitle: "Waqra Pucara Tour (Full Day)",
    tripOverview: {
      title: "Trip Overview",
      paragraphs: [
        "Discover the Waqra Pucara Inca administrative center away from crowds.",
        "Drive through authentic Andean valleys and communities.",
        "Expert guide explains ancient tambos and control posts.",
      ],
      highlights: [
        "Well‑preserved Inca ruins",
        "Control posts & tambos",
        "Bilingual professional guide",
        "Snack & hot drinks",
        "Round‑trip private transport",
      ],
    },
    itinerary: {
      title: "Detailed Itinerary",
      steps: [
        "06:00 AM – Cusco pickup",
        "07:30 AM – Arrival & intro at Waqra Pucara",
        "08:00 AM – Guided ruins tour",
        "09:30 AM – Photo stops",
        "10:00 AM – Snack on site",
        "10:30 AM – Tambos interpretation",
        "11:30 AM – Return to Cusco",
        "01:00 PM – Hotel drop‑off",
      ],
    },
    details: {
      title: "Tour Details",
      rows: [
        { label: "Duration", value: "7 hours" },
        { label: "Altitude", value: "3,900 m.a.s.l." },
        { label: "Hike Distance", value: "2 km" },
        { label: "Difficulty", value: "Easy" },
        { label: "Guide", value: "Bilingual professional" },
        { label: "Meals", value: "Snack & hot drinks" },
      ],
    },
    incluye: {
      title: "What's included?",
      blocks: [
        { subtitle: "Transport", items: ["Private A/C vehicle"] },
        { subtitle: "Guide", items: ["Bilingual professional guide"] },
        { subtitle: "Snacks", items: ["Energy snack", "Coca tea"] },
        { subtitle: "Tickets", items: ["Waqra Pucara permit"] },
      ],
      exclusions: ["Lunch", "Tips", "Travel insurance"],
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
      schedule: ["Daily, min. 2 pax"],
      pickupTime: "06:00 AM – 06:30 AM",
    },
    precios: {
      title: "Prices",
      serviceNote: "Private or shared tour",
      rates: [
        { group: "1–2 pax", price: "US$ 70" },
        { group: "3–6 pax", price: "US$ 60" },
      ],
      footnote: "Per person rates",
    },
    information: {
      price: "US$ 70",
      duration: "7 hours",
      difficulty: "Easy",
      maxAltitude: "3,900 m.a.s.l.",
      lodging: "Not included",
      food: "Snack included",
      whatsappMessage: "I want to book Waqra Pucara: ",
      bookNow: "Book Now",
    },
  },
};

export default function Waqrapucara() {
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
