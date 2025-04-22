// CityTourCusco.tsx
"use client";

import React from "react";
import { useParams } from "next/navigation";
import Imagenes from "@/components/Renders/imagenes/imagenes";
import Principal from "@/components/Renders/principal/principal";
import Informacion from "@/components/Renders/informacion/informacion";

import imgMain from "@/public/images/OneDayTour/CityTour/Saqsayhuaman.webp";
import img1    from "@/public/images/OneDayTour/CityTour/city1.jpg";
import img2    from "@/public/images/OneDayTour/CityTour/city2.jpg";
import img3    from "@/public/images/OneDayTour/CityTour/city3.jpg";
import img4    from "@/public/images/OneDayTour/CityTour/city4.jpg";
import img5    from "@/public/images/OneDayTour/CityTour/city5.jpg";

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
    generalTitle: "City Tour Cusco (Medio Día)",
    tripOverview: {
      title: "Resumen del Tour",
      paragraphs: [
        "Recorre los principales atractivos coloniales e incas de Cusco en una mañana inolvidable.",
        "Visita la Catedral, Qorikancha, Sacsayhuamán y los barrios tradicionales.",
        "Ideal para orientarte en la ciudad y conocer su historia profunda.",
      ],
      highlights: [
        "Catedral de Cusco y Qorikancha",
        "Fortaleza de Sacsayhuamán",
        "Barrio de San Blas",
        "Plaza de Armas",
      ],
    },
    itinerary: {
      title: "Itinerario Detallado",
      steps: [
        "08:00 AM – Pickup en tu hotel en Cusco",
        "08:30 AM – Visita a la Catedral y Qorikancha",
        "10:00 AM – Traslado a Sacsayhuamán",
        "11:00 AM – Recorrido por el barrio de San Blas",
        "12:00 PM – Drop‑off en Plaza de Armas",
      ],
    },
    details: {
      title: "Detalles del Tour",
      rows: [
        { label: "Duración", value: "4 horas" },
        { label: "Guía", value: "Profesional bilingüe" },
        { label: "Comidas", value: "No incluidas" },
        { label: "Transporte", value: "Van compartida con A/C" },
      ],
    },
    incluye: {
      title: "¿Qué incluye?",
      blocks: [
        { subtitle: "Guía", items: ["Guía oficial bilingüe"] },
        { subtitle: "Entradas", items: ["Catedral", "Qorikancha", "Sacsayhuamán"] },
        { subtitle: "Transporte", items: ["Van compartida A/C"] },
      ],
      exclusions: ["Propinas", "Comidas", "Souvenirs"],
    },
    queLlevar: {
      title: "Qué llevar",
      blocks: [
        { subtitle: "Esenciales", items: ["Documento", "Dinero en efectivo"] },
        { subtitle: "Ropa", items: ["Chaqueta ligera", "Calzado cómodo"] },
      ],
    },
    fechasSalida: {
      title: "Fechas de salida",
      schedule: ["Lunes a Sábado"],
      pickupTime: "08:00 AM – 08:15 AM",
    },
    precios: {
      title: "Precios",
      serviceNote: "Tour regular compartido",
      rates: [
        { group: "Adultos", price: "US$ 35" },
        { group: "Estudiantes", price: "US$ 30" },
      ],
      footnote: "Tarifas por persona",
    },
    information: {
      price: "US$ 35",
      duration: "4 horas",
      difficulty: "Baja",
      maxAltitude: "3,700 m.s.n.m.",
      lodging: "No incluido",
      food: "No incluido",
      whatsappMessage: "Quiero reservar City Tour Cusco: ",
      bookNow: "Reserva Ahora",
    },
  },
  en: {
    generalTitle: "Cusco City Tour (Half Day)",
    tripOverview: {
      title: "Trip Overview",
      paragraphs: [
        "Explore Cusco’s main colonial and Inca sites in one unforgettable morning.",
        "Visit the Cathedral, Qoricancha, Sacsayhuamán and traditional neighborhoods.",
        "Perfect orientation to the city and its deep history.",
      ],
      highlights: [
        "Cusco Cathedral & Qoricancha",
        "Sacsayhuamán Fortress",
        "San Blas neighborhood",
        "Plaza de Armas",
      ],
    },
    itinerary: {
      title: "Detailed Itinerary",
      steps: [
        "08:00 AM – Hotel pickup in Cusco",
        "08:30 AM – Visit Cathedral & Qoricancha",
        "10:00 AM – Transfer to Sacsayhuamán",
        "11:00 AM – San Blas neighborhood tour",
        "12:00 PM – Drop‑off at Plaza de Armas",
      ],
    },
    details: {
      title: "Tour Details",
      rows: [
        { label: "Duration", value: "4 hours" },
        { label: "Guide", value: "Professional bilingual" },
        { label: "Meals", value: "Not included" },
        { label: "Transport", value: "Shared van w/ A/C" },
      ],
    },
    incluye: {
      title: "What's included?",
      blocks: [
        { subtitle: "Guide", items: ["Official bilingual guide"] },
        { subtitle: "Tickets", items: ["Cathedral", "Qoricancha", "Sacsayhuamán"] },
        { subtitle: "Transport", items: ["Shared van w/ A/C"] },
      ],
      exclusions: ["Tips", "Meals", "Souvenirs"],
    },
    queLlevar: {
      title: "What to bring?",
      blocks: [
        { subtitle: "Essentials", items: ["ID", "Cash"] },
        { subtitle: "Clothing", items: ["Light jacket", "Comfortable shoes"] },
      ],
    },
    fechasSalida: {
      title: "Departure Dates",
      schedule: ["Monday–Saturday"],
      pickupTime: "08:00 AM – 08:15 AM",
    },
    precios: {
      title: "Prices",
      serviceNote: "Shared regular tour",
      rates: [
        { group: "Adults", price: "US$ 35" },
        { group: "Students", price: "US$ 30" },
      ],
      footnote: "Per person rates",
    },
    information: {
      price: "US$ 35",
      duration: "4 hours",
      difficulty: "Low",
      maxAltitude: "3,700 m.a.s.l.",
      lodging: "Not included",
      food: "Not included",
      whatsappMessage: "I want to book Cusco City Tour: ",
      bookNow: "Book Now",
    },
  },
};

export default function CityTourCusco() {
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
