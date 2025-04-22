// TourValleSur.tsx
"use client";

import React from "react";
import { useParams } from "next/navigation";
import Imagenes from "@/components/Renders/imagenes/imagenes";
import Principal from "@/components/Renders/principal/principal";
import Informacion from "@/components/Renders/informacion/informacion";

import imgMain from "@/public/images/Valle/ValleStantar/valle main.jpg";
import img1    from "@/public/images/Valle/ValleStantar/valle1.jpg";
import img2    from "@/public/images/Valle/ValleStantar/valle2.jpg";
import img3    from "@/public/images/Valle/ValleStantar/valle3.jpg";
import img4    from "@/public/images/Valle/ValleStantar/valle4.jpg";
import img5    from "@/public/images/Valle/ValleStantar/valle5.jpg";

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
    generalTitle: "Tour Valle Sur (Full Day)",
    tripOverview: {
      title: "Resumen del Tour",
      paragraphs: [
        "Explora los tesoros del sur de Cusco: Tipón, Pikillacta y Andahuaylillas.",
        "Conoce riego agrícola incaico y ciudad preinca de Pikillacta.",
        "Visita la ‘Capilla Sixtina de América’ en Andahuaylillas.",
      ],
      highlights: [
        "Terrazas de Tipón",
        "Ruinas de Pikillacta",
        "Iglesia de Andahuaylillas",
        "Transporte privado",
      ],
    },
    itinerary: {
      title: "Itinerario Detallado",
      steps: [
        "08:00 AM – Pickup en Cusco",
        "09:00 AM – Visita a Tipón",
        "10:30 AM – Traslado a Pikillacta",
        "12:00 PM – Almuerzo en restaurant local",
        "01:30 PM – Recorrido por Andahuaylillas",
        "03:00 PM – Regreso a Cusco",
        "04:30 PM – Drop‑off en hotel",
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
        { subtitle: "Transporte", items: ["Van privada con A/C"] },
        { subtitle: "Guía", items: ["Guía oficial bilingüe"] },
        { subtitle: "Entradas", items: ["Tipón, Pikillacta, Andahuaylillas"] },
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
      schedule: ["Martes a Sábado"],
      pickupTime: "08:00 AM – 08:15 AM",
    },
    precios: {
      title: "Precios",
      serviceNote: "Tour grupal compartido",
      rates: [
        { group: "2–6 personas", price: "US$ 75" },
        { group: "7+ personas", price: "US$ 65" },
      ],
      footnote: "Tarifas por persona",
    },
    information: {
      price: "US$ 75",
      duration: "8.5 horas",
      difficulty: "Baja",
      maxAltitude: "3,500 m.s.n.m.",
      lodging: "No incluido",
      food: "Almuerzo buffet",
      whatsappMessage: "Quiero reservar Valle Sur: ",
      bookNow: "Reserva Ahora",
    },
  },
  en: {
    generalTitle: "Southern Valley Tour (Full Day)",
    tripOverview: {
      title: "Trip Overview",
      paragraphs: [
        "Explore southern Cusco’s gems: Tipón, Pikillacta & Andahuaylillas.",
        "See Inca agricultural terraces and a pre‑Inca city.",
        "Visit the ‘Sistine Chapel of the Americas’ in Andahuaylillas.",
      ],
      highlights: [
        "Tipón terraces",
        "Pikillacta ruins",
        "Andahuaylillas church",
        "Private transport",
      ],
    },
    itinerary: {
      title: "Detailed Itinerary",
      steps: [
        "08:00 AM – Cusco pickup",
        "09:00 AM – Tipón terraces visit",
        "10:30 AM – Transfer to Pikillacta",
        "12:00 PM – Buffet lunch",
        "01:30 PM – Andahuaylillas tour",
        "03:00 PM – Return to Cusco",
        "04:30 PM – Hotel drop‑off",
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
        { subtitle: "Tickets", items: ["Tipón, Pikillacta, Andahuaylillas"] },
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
      schedule: ["Tuesday–Saturday"],
      pickupTime: "08:00 AM – 08:15 AM",
    },
    precios: {
      title: "Prices",
      serviceNote: "Shared group tour",
      rates: [
        { group: "2–6 pax", price: "US$ 75" },
        { group: "7+ pax", price: "US$ 65" },
      ],
      footnote: "Per person rates",
    },
    information: {
      price: "US$ 75",
      duration: "8.5 hours",
      difficulty: "Low",
      maxAltitude: "3,500 m.a.s.l.",
      lodging: "Not included",
      food: "Buffet lunch",
      whatsappMessage: "I want to book Southern Valley: ",
      bookNow: "Book Now",
    },
  },
};

export default function TourValleSur() {
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
