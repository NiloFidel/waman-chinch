// ValleSagradoTradicional.tsx
"use client";

import React from "react";
import { useParams } from "next/navigation";
import Imagenes from "@/components/Renders/imagenes/imagenes";
import Principal from "@/components/Renders/principal/principal";
import Informacion from "@/components/Renders/informacion/informacion";

import imgMain from "@/public/images/Valle/ValleTradicional/valle main.jpg";
import img1    from "@/public/images/Valle/ValleTradicional/vip1.jpg";
import img2    from "@/public/images/Valle/ValleTradicional/vip2.jpg";
import img3    from "@/public/images/Valle/ValleTradicional/vip3.jpg";
import img4    from "@/public/images/Valle/ValleTradicional/vip4.jpg";
import img5    from "@/public/images/Valle/ValleTradicional/vip5.jpg";

interface Block {
  subtitle: string;
  items: string[];
}

interface TranslationContent {
  generalTitle: string;
  tripOverview: {
    title: string;
    paragraphs: string[];
    highlights: string[];
  };
  itinerary: {
    title: string;
    steps: string[];
  };
  details: {
    title: string;
    rows: { label: string; value: string }[];
  };
  incluye: {
    title: string;
    blocks: Block[];
    exclusions: string[];
  };
  queLlevar: {
    title: string;
    blocks: Block[];
  };
  fechasSalida: {
    title: string;
    schedule: string[];
    pickupTime: string;
  };
  precios: {
    title: string;
    serviceNote: string;
    rates: { group: string; price: string }[];
    footnote: string;
  };
  information: {
    price: string;
    duration: string;
    difficulty: string;
    maxAltitude: string;
    lodging: string;
    food: string;
    whatsappMessage: string;
    bookNow: string;
  };
}

const globalImages = {
  mapImage: imgMain.src,
  smallImages: [img1.src, img2.src, img3.src, img4.src, img5.src],
};

const translations: Record<"es" | "en", TranslationContent> = {
  es: {
    generalTitle: "Valle Sagrado Tradicional (Full Day)",
    tripOverview: {
      title: "Resumen del Tour",
      paragraphs: [
        "Descubre lo esencial del Valle Sagrado en un recorrido clásico: Pisac y Ollantaytambo.",
        "Visita el mercado local de Pisac y admira sus terrazas agrícolas incas.",
        "Explora la fortaleza de Ollantaytambo y su arquitectura milenaria.",
      ],
      highlights: [
        "Pisac ruinas y mercado",
        "Almuerzo buffet en Urubamba",
        "Ollantaytambo citadel",
        "Guía oficial bilingüe",
        "Transporte compartido",
      ],
    },
    itinerary: {
      title: "Itinerario Detallado",
      steps: [
        "08:00 AM – Pickup en hotel en Cusco",
        "09:00 AM – Llegada a Pisac, visita a ruinas y mercado",
        "11:30 AM – Traslado a Urubamba y almuerzo buffet",
        "01:30 PM – Salida a Ollantaytambo",
        "02:00 PM – Tour guiado en Ollantaytambo",
        "04:00 PM – Tiempo libre para explorar pueblo",
        "05:00 PM – Regreso a Cusco",
        "06:30 PM – Drop‑off en hotel",
      ],
    },
    details: {
      title: "Detalles del Tour",
      rows: [
        { label: "Transporte", value: "Minivan compartida" },
        { label: "Guía", value: "Oficial bilingüe" },
        { label: "Duración", value: "10.5 horas" },
        { label: "Altitud máx.", value: "3,392 m.s.n.m. (Pisac)" },
        { label: "Comidas", value: "Almuerzo buffet" },
        { label: "Grupo", value: "4–12 personas" },
      ],
    },
    incluye: {
      title: "¿Qué incluye?",
      blocks: [
        { subtitle: "Transporte", items: ["Minivan compartida", "Conductor"] },
        { subtitle: "Guía", items: ["Guía oficial bilingüe"] },
        { subtitle: "Entradas", items: ["Ruinas de Pisac y Ollantaytambo"] },
        { subtitle: "Comidas", items: ["Almuerzo buffet"] },
      ],
      exclusions: ["Propinas", "Compras personales", "Seguro de viaje"],
    },
    queLlevar: {
      title: "Qué llevar",
      blocks: [
        { subtitle: "Esenciales", items: ["Pasaporte/Carnet", "Dinero en efectivo"] },
        { subtitle: "Ropa", items: ["Chaqueta ligera", "Zapatos cómodos"] },
        { subtitle: "Otros", items: ["Protector solar", "Cámara"] },
      ],
    },
    fechasSalida: {
      title: "Fechas de salida",
      schedule: ["Lunes a Sábado (mín. 4 personas)"],
      pickupTime: "08:00 AM – 08:30 AM",
    },
    precios: {
      title: "Precios",
      serviceNote: "Tour grupal compartido",
      rates: [
        { group: "4–6 personas", price: "US$ 65" },
        { group: "7–12 personas", price: "US$ 55" },
      ],
      footnote: "Precios por persona, según disponibilidad",
    },
    information: {
      price: "US$ 65",
      duration: "Full Day",
      difficulty: "Fácil",
      maxAltitude: "3392 m.s.n.m.",
      lodging: "No incluido",
      food: "Almuerzo buffet",
      whatsappMessage: "Quiero reservar Valle Sagrado Tradicional: ",
      bookNow: "Reserva Ahora",
    },
  },
  en: {
    generalTitle: "Traditional Sacred Valley (Full Day)",
    tripOverview: {
      title: "Trip Overview",
      paragraphs: [
        "Explore the essentials of the Sacred Valley: Pisac and Ollantaytambo.",
        "Visit the Pisac market and Inca terraces.",
        "Discover Ollantaytambo fortress and its ancient architecture.",
      ],
      highlights: [
        "Pisac ruins & market",
        "Buffet lunch in Urubamba",
        "Ollantaytambo citadel",
        "Official bilingual guide",
        "Shared transport",
      ],
    },
    itinerary: {
      title: "Detailed Itinerary",
      steps: [
        "08:00 AM – Hotel pickup in Cusco",
        "09:00 AM – Pisac ruins & market tour",
        "11:30 AM – Transfer to Urubamba for buffet lunch",
        "01:30 PM – Depart to Ollantaytambo",
        "02:00 PM – Guided tour of Ollantaytambo",
        "04:00 PM – Free time in town",
        "05:00 PM – Return to Cusco",
        "06:30 PM – Hotel drop‑off",
      ],
    },
    details: {
      title: "Tour Details",
      rows: [
        { label: "Transport", value: "Shared minivan" },
        { label: "Guide", value: "Official bilingual guide" },
        { label: "Duration", value: "10.5 hours" },
        { label: "Max Altitude", value: "3,392 m.a.s.l. (Pisac)" },
        { label: "Meals", value: "Buffet lunch" },
        { label: "Group Size", value: "4–12 pax" },
      ],
    },
    incluye: {
      title: "What's included?",
      blocks: [
        { subtitle: "Transport", items: ["Shared minivan", "Driver"] },
        { subtitle: "Guide", items: ["Official bilingual guide"] },
        { subtitle: "Tickets", items: ["Pisac & Ollantaytambo"] },
        { subtitle: "Meals", items: ["Buffet lunch"] },
      ],
      exclusions: ["Tips", "Personal purchases", "Travel insurance"],
    },
    queLlevar: {
      title: "What to bring?",
      blocks: [
        { subtitle: "Essentials", items: ["Passport/ID", "Cash"] },
        { subtitle: "Clothing", items: ["Light jacket", "Comfortable shoes"] },
        { subtitle: "Others", items: ["Sunscreen", "Camera"] },
      ],
    },
    fechasSalida: {
      title: "Departure Dates",
      schedule: ["Monday–Saturday (min. 4 pax)"],
      pickupTime: "08:00 AM – 08:30 AM",
    },
    precios: {
      title: "Prices",
      serviceNote: "Shared group tour",
      rates: [
        { group: "4–6 pax", price: "US$ 65" },
        { group: "7–12 pax", price: "US$ 55" },
      ],
      footnote: "Per person rates, subject to availability",
    },
    information: {
      price: "US$ 65",
      duration: "Full Day",
      difficulty: "Easy",
      maxAltitude: "3392 m.a.s.l.",
      lodging: "Not included",
      food: "Buffet lunch",
      whatsappMessage: "I want to book Traditional Sacred Valley: ",
      bookNow: "Book Now",
    },
  },
};

export default function ValleSagradoTradicional() {
  const params = useParams();
  const locale = params.locale === "en" ? "en" : "es";
  const content = translations[locale];

  return (
    <div style={{ display: "flex", gap: "50px" }}>
      {/* Left column (70%) */}
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
      {/* Right column (30%) */}
      <div style={{ width: "30%" }}>
        <Informacion {...content.information} locale={locale} generalTitle={content.generalTitle} />
      </div>
    </div>
  );
}
