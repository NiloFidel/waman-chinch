// Perolniyoq.tsx
"use client";

import React from "react";
import { useParams } from "next/navigation";
import Imagenes from "@/components/Renders/imagenes/imagenes";
import Principal from "@/components/Renders/principal/principal";
import Informacion from "@/components/Renders/informacion/informacion";

import imgMain from "@/public/images/OneDayTour/Humantay/humantay-main.webp";
import img1 from "@/public/images/OneDayTour/Humantay/humantay1.jpg";
import img2 from "@/public/images/OneDayTour/Humantay/humantay2.jpg";
import img3 from "@/public/images/OneDayTour/Humantay/humantay3.jpg";
import img4 from "@/public/images/OneDayTour/Humantay/humantay4.webp";
import img5 from "@/public/images/OneDayTour/Humantay/humantay5.jpg";

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
    generalTitle: "Tour Perolniyoq (Full Day)",
    tripOverview: {
      title: "Resumen del Tour",
      paragraphs: [
        "Explora el misterioso sitio de Perolniyoq, centro ceremonial preincaico poco conocido.",
        "Recorrido por senderos arqueológicos y pinturas rupestres.",
        "Ideal para amantes de la historia y la antropología andina.",
      ],
      highlights: [
        "Camino arqueológico intacto",
        "Pinturas rupestres milenarias",
        "Guía arqueólogo bilingüe",
        "Snack ligero y bebidas calientes",
        "Transporte privado ida y vuelta",
      ],
    },
    itinerary: {
      title: "Itinerario Detallado",
      steps: [
        "06:30 AM – Pickup en Cusco",
        "08:00 AM – Llegada a Perolniyoq y charla introductoria",
        "08:30 AM – Recorrido guiado por el sitio",
        "10:00 AM – Tiempo libre para exploración",
        "10:30 AM – Snack y mate de coca",
        "11:00 AM – Retorno a Cusco",
        "01:00 PM – Drop‑off en hotel",
      ],
    },
    details: {
      title: "Detalles del Tour",
      rows: [
        { label: "Duración", value: "6 horas" },
        { label: "Altitud", value: "3,800 m.s.n.m." },
        { label: "Distancia", value: "3 km de caminata" },
        { label: "Dificultad", value: "Fácil" },
        { label: "Guía", value: "Arqueólogo bilingüe" },
        { label: "Comidas", value: "Snack y bebida caliente" },
      ],
    },
    incluye: {
      title: "¿Qué incluye?",
      blocks: [
        { subtitle: "Transporte", items: ["Vehículo privado A/C"] },
        { subtitle: "Guía", items: ["Arqueólogo profesional"] },
        { subtitle: "Snack", items: ["Snack ligero", "Mate de coca"] },
        { subtitle: "Entradas", items: ["Permiso de Perolniyoq"] },
      ],
      exclusions: ["Almuerzo", "Propinas", "Seguro de viaje"],
    },
    queLlevar: {
      title: "Qué llevar",
      blocks: [
        { subtitle: "Esenciales", items: ["ID", "Dinero en efectivo"] },
        { subtitle: "Ropa", items: ["Chaqueta", "Zapatillas cómodas"] },
      ],
    },
    fechasSalida: {
      title: "Fechas de salida",
      schedule: ["Martes y Jueves (mín. 2 personas)"],
      pickupTime: "06:30 AM – 07:00 AM",
    },
    precios: {
      title: "Precios",
      serviceNote: "Tour especializado",
      rates: [
        { group: "2–4 personas", price: "US$ 75" },
        { group: "5–8 personas", price: "US$ 65" },
      ],
      footnote: "Tarifas sujetas a cambios",
    },
    information: {
      price: "US$ 75",
      duration: "6 horas",
      difficulty: "Fácil",
      maxAltitude: "3,800 m.s.n.m.",
      lodging: "No incluido",
      food: "Snack incluido",
      whatsappMessage: "Quiero reservar Perolniyoq: ",
      bookNow: "Reserva Ahora",
    },
  },
  en: {
    generalTitle: "Perolniyoq Tour (Full Day)",
    tripOverview: {
      title: "Trip Overview",
      paragraphs: [
        "Explore the little‑known pre‑Inca ceremonial center of Perolniyoq.",
        "Walk archaeological trails and ancient rock art.",
        "Perfect for lovers of Andean history and anthropology.",
      ],
      highlights: [
        "Undisturbed archaeological path",
        "Milenary rock paintings",
        "Bilingual archaeologist guide",
        "Light snack & hot drink",
        "Round‑trip private transport",
      ],
    },
    itinerary: {
      title: "Detailed Itinerary",
      steps: [
        "06:30 AM – Cusco pickup",
        "08:00 AM – Arrival & intro at Perolniyoq",
        "08:30 AM – Guided site tour",
        "10:00 AM – Free exploration",
        "10:30 AM – Snack & coca tea",
        "11:00 AM – Return to Cusco",
        "01:00 PM – Hotel drop‑off",
      ],
    },
    details: {
      title: "Tour Details",
      rows: [
        { label: "Duration", value: "6 hours" },
        { label: "Altitude", value: "3,800 m.a.s.l." },
        { label: "Distance", value: "3 km hike" },
        { label: "Difficulty", value: "Easy" },
        { label: "Guide", value: "Professional archaeologist" },
        { label: "Meals", value: "Snack & hot drink" },
      ],
    },
    incluye: {
      title: "What's included?",
      blocks: [
        { subtitle: "Transport", items: ["Private A/C vehicle"] },
        { subtitle: "Guide", items: ["Professional archaeologist"] },
        { subtitle: "Snack", items: ["Light snack", "Coca tea"] },
        { subtitle: "Tickets", items: ["Perolniyoq permit"] },
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
      schedule: ["Tuesdays & Thursdays (min. 2 pax)"],
      pickupTime: "06:30 AM – 07:00 AM",
    },
    precios: {
      title: "Prices",
      serviceNote: "Specialized tour",
      rates: [
        { group: "2–4 pax", price: "US$ 75" },
        { group: "5–8 pax", price: "US$ 65" },
      ],
      footnote: "Rates subject to change",
    },
    information: {
      price: "US$ 75",
      duration: "6 hours",
      difficulty: "Easy",
      maxAltitude: "3,800 m.a.s.l.",
      lodging: "Not included",
      food: "Snack included",
      whatsappMessage: "I want to book Perolniyoq: ",
      bookNow: "Book Now",
    },
  },
};

export default function Perolniyoq() {
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
