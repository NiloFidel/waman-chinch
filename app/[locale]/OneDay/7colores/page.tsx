// montaña7colores.tsx
"use client";

import React from "react";
import { useParams } from "next/navigation";
import Imagenes from "@/components/Renders/imagenes/imagenes";
import Principal from "@/components/Renders/principal/principal";
import Informacion from "@/components/Renders/informacion/informacion";

import imgMain from "@/public/images/OneDayTour/Siete Colores/color main.jpg";
import img1 from "@/public/images/OneDayTour/Siete Colores/color1.jpg";
import img2 from "@/public/images/OneDayTour/Siete Colores/color2.jpg";
import img3 from "@/public/images/OneDayTour/Siete Colores/color3.jpg";
import img4 from "@/public/images/OneDayTour/Siete Colores/color4.jpg";
import img5 from "@/public/images/OneDayTour/Siete Colores/color5.jpg";

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
    generalTitle: "Tour Montaña 7 Colores (Full Day)",
    tripOverview: {
      title: "Resumen del Tour",
      paragraphs: [
        "Vive el impresionante paisaje multicolor de la Montaña 7 Colores, una formación geológica única en los Andes.",
        "Partimos de Cusco en transporte privado atravesando pintorescos pueblos altoandinos.",
        "Disfruta de un trek guiado a más de 5 000 m.s.n.m. con vistas de la cordillera Vilcanota.",
      ],
      highlights: [
        "Ascenso hasta 5 200 m.s.n.m.",
        "Paisajes de glaciar y cumbres nevadas",
        "Formaciones rocosas multicolor",
        "Guía profesional bilingüe",
        "Snack energético y bebidas calientes",
        "Transporte privado ida y vuelta",
      ],
    },
    itinerary: {
      title: "Itinerario Detallado",
      steps: [
        "04:00 AM – Pickup en hotel en Cusco y salida hacia Pitumarca",
        "06:00 AM – Llegada a Qeswachaca y parada breve",
        "07:00 AM – Desayuno en Pitumarca",
        "08:00 AM – Inicio de caminata de 6 km a la Montaña 7 Colores",
        "10:30 AM – Llegada a la cima, tiempo para fotos y snack",
        "12:00 PM – Descenso a Pitumarca",
        "01:00 PM – Almuerzo buffet en restaurante local",
        "02:30 PM – Regreso a Cusco",
        "05:00 PM – Drop-off en hotel en Cusco",
      ],
    },
    details: {
      title: "Detalles del Tour",
      rows: [
        { label: "Distancia total", value: "12 km (ida y vuelta)" },
        { label: "Altitud mínima", value: "3 800 m.s.n.m." },
        { label: "Altitud máxima", value: "5 200 m.s.n.m." },
        { label: "Duración del trek", value: "4 horas" },
        { label: "Duración total", value: "13 horas" },
        { label: "Dificultad", value: "Alta (mal de altura posible)" },
        { label: "Guía", value: "Profesional bilingüe" },
        { label: "Comidas", value: "Desayuno, snack y almuerzo buffet" },
      ],
    },
    incluye: {
      title: "¿Qué incluye?",
      blocks: [
        {
          subtitle: "Transporte",
          items: ["Vehículo privado A/C", "Combustible y conductor"],
        },
        {
          subtitle: "Guía",
          items: ["Guía profesional bilingüe", "Asistente de guía"],
        },
        {
          subtitle: "Snacks y Bebidas",
          items: ["Snack energético", "Choclo con queso", "Mate de coca"],
        },
        {
          subtitle: "Entradas",
          items: ["Permiso de ingreso a Montaña 7 Colores"],
        },
        {
          subtitle: "Comidas",
          items: ["Desayuno en ruta", "Almuerzo buffet en local"],
        },
      ],
      exclusions: ["Propinas", "Equipo personal de altitud", "Seguro de viaje"],
    },
    queLlevar: {
      title: "Qué llevar",
      blocks: [
        {
          subtitle: "Esenciales",
          items: ["Documento de identidad", "Dinero en efectivo", "Gafas de sol"],
        },
        {
          subtitle: "Ropa",
          items: ["Chaqueta térmica", "Guantes", "Gorro", "Calzado de trekking"],
        },
        {
          subtitle: "Equipo",
          items: ["Bastones de trekking", "Mochila ligera", "Botella de agua"],
        },
        {
          subtitle: "Recomendado",
          items: ["Protector solar", "Cámara fotográfica", "Snacks extra"],
        },
      ],
    },
    fechasSalida: {
      title: "Fechas de salida",
      schedule: ["Salidas diarias (mínimo 2 personas)"],
      pickupTime: "04:00 AM – 04:30 AM (según ubicación)",
    },
    precios: {
      title: "Precios",
      serviceNote: "Tour grupal regular, mínimo 2 personas",
      rates: [
        { group: "02–04 personas", price: "US$ 120" },
        { group: "05–8 personas", price: "US$ 110" },
        { group: "9+ personas", price: "US$ 100" },
      ],
      footnote: "Tarifas sujetas a temporada y disponibilidad",
    },
    information: {
      price: "US$ 120",
      duration: "Full Day",
      difficulty: "Alta",
      maxAltitude: "5200 m.s.n.m.",
      lodging: "No incluida",
      food: "Desayuno, snack y almuerzo",
      whatsappMessage: "Quiero reservar Montaña 7 Colores: ",
      bookNow: "Reserva Ahora",
    },
  },
  en: {
    generalTitle: "Rainbow Mountain Tour (Full Day)",
    tripOverview: {
      title: "Trip Overview",
      paragraphs: [
        "Experience the multicolored Rainbow Mountain, a unique geological phenomenon in the Andes.",
        "Depart Cusco in private transport through scenic highland villages.",
        "Enjoy a guided trek above 5 000 m.a.s.l. with breathtaking Vilcanota range views.",
      ],
      highlights: [
        "Ascent to 5 200 m.a.s.l.",
        "Glacier and snow‑capped vistas",
        "Multicolored rock formations",
        "Official bilingual guide",
        "Energy snack and hot drinks",
        "Round‑trip private transport",
      ],
    },
    itinerary: {
      title: "Detailed Itinerary",
      steps: [
        "04:00 AM – Hotel pickup in Cusco and drive to Pitumarca",
        "06:00 AM – Stop at Qeswachaca suspension bridge",
        "07:00 AM – Breakfast in Pitumarca",
        "08:00 AM – 6 km trek to Rainbow Mountain",
        "10:30 AM – Summit arrival, photo time & snack",
        "12:00 PM – Descend back to Pitumarca",
        "01:00 PM – Buffet lunch at local restaurant",
        "02:30 PM – Return drive to Cusco",
        "05:00 PM – Hotel drop‑off in Cusco",
      ],
    },
    details: {
      title: "Tour Details",
      rows: [
        { label: "Total Distance", value: "12 km round‑trip" },
        { label: "Min Altitude", value: "3 800 m.a.s.l." },
        { label: "Max Altitude", value: "5 200 m.a.s.l." },
        { label: "Trek Duration", value: "4 hours" },
        { label: "Total Duration", value: "13 hours" },
        { label: "Difficulty", value: "High (altitude risk)" },
        { label: "Guide", value: "Official bilingual guide" },
        { label: "Meals", value: "Breakfast, snack & buffet lunch" },
      ],
    },
    incluye: {
      title: "What’s included?",
      blocks: [
        {
          subtitle: "Transport",
          items: ["Private A/C vehicle", "Fuel & driver"],
        },
        {
          subtitle: "Guide",
          items: ["Professional bilingual guide", "Assistant guide"],
        },
        {
          subtitle: "Snacks & Drinks",
          items: ["Energy snack", "Corn with cheese", "Coca tea"],
        },
        {
          subtitle: "Tickets",
          items: ["Rainbow Mountain entrance fee"],
        },
        {
          subtitle: "Meals",
          items: ["Breakfast en route", "Buffet lunch"],
        },
      ],
      exclusions: ["Tips", "Personal altitude gear", "Travel insurance"],
    },
    queLlevar: {
      title: "What to bring?",
      blocks: [
        {
          subtitle: "Essentials",
          items: ["ID/passport", "Cash", "Sunglasses"],
        },
        {
          subtitle: "Clothing",
          items: ["Thermal jacket", "Gloves", "Hat", "Trekking boots"],
        },
        {
          subtitle: "Gear",
          items: ["Trekking poles", "Light backpack", "Water bottle"],
        },
        {
          subtitle: "Recommended",
          items: ["Sunscreen", "Camera", "Extra snacks"],
        },
      ],
    },
    fechasSalida: {
      title: "Departure Dates",
      schedule: ["Daily departures (min. 2 pax)"],
      pickupTime: "04:00 AM – 04:30 AM (hotel location)",
    },
    precios: {
      title: "Prices",
      serviceNote: "Regular group tour, min. 2 people",
      rates: [
        { group: "02–04 pax", price: "US$ 120" },
        { group: "05–8 pax", price: "US$ 110" },
        { group: "9+ pax", price: "US$ 100" },
      ],
      footnote: "Rates subject to season & availability",
    },
    information: {
      price: "US$ 120",
      duration: "Full Day",
      difficulty: "High",
      maxAltitude: "5200 m.a.s.l.",
      lodging: "Not included",
      food: "Breakfast, snack & lunch",
      whatsappMessage: "I want to book Rainbow Mountain: ",
      bookNow: "Book Now",
    },
  },
};

export default function Montana7Colores() {
  const params = useParams();
  const locale = params.locale === "en" ? "en" : "es";
  const content = translations[locale];

  return (
    <div style={{ display: "flex", gap: "50px" }}>
      {/* Left Column: 70% */}
      <div style={{ width: "70%" }}>
        <h1>{content.generalTitle}</h1>
        <Imagenes
          mapImage={globalImages.mapImage}
          smallImages={globalImages.smallImages}
        />
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

      {/* Right Column: 30% */}
      <div style={{ width: "30%" }}>
        <Informacion
          {...content.information}
          locale={locale}
          generalTitle={content.generalTitle}
        />
      </div>
    </div>
  );
}
