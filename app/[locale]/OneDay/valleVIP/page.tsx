// ValleSagradoVIP.tsx
"use client";

import React from "react";
import { useParams } from "next/navigation";
import Imagenes from "@/components/Renders/imagenes/imagenes";
import Principal from "@/components/Renders/principal/principal";
import Informacion from "@/components/Renders/informacion/informacion";

import imgMain from "@/public/images/Valle/ValleVIP/valle main.jpg";
import img1    from "@/public/images/Valle/ValleVIP/vip1.jpg";
import img2    from "@/public/images/Valle/ValleVIP/vip2.jpg";
import img3    from "@/public/images/Valle/ValleVIP/vip3.jpeg";
import img4    from "@/public/images/Valle/ValleVIP/vip4.jpg";
import img5    from "@/public/images/Valle/ValleVIP/vip5.jpg";

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
    generalTitle: "Valle Sagrado VIP (Full Day)",
    tripOverview: {
      title: "Resumen del Tour",
      paragraphs: [
        "Disfruta de un recorrido exclusivo por el Valle Sagrado con transporte privado y accesos prioritarios.",
        "Visita las ruinas de Pisac, el mercado artesanal y la fortaleza de Ollantaytambo sin multitudes.",
        "Explora las salineras de Maras y las terrazas circulares de Moray con guías especializados.",
      ],
      highlights: [
        "Transporte privado de lujo",
        "Acceso preferencial a monumentos",
        "Guía oficial bilingüe",
        "Visita a mercado artesanal",
        "Salineras de Maras y Moray",
        "Snack y agua incluidos",
      ],
    },
    itinerary: {
      title: "Itinerario Detallado",
      steps: [
        "07:30 AM – Pickup en hotel en Cusco",
        "08:30 AM – Llegada a Pisac y visita a la ciudadela Inca",
        "10:00 AM – Mercado artesanal de Pisac",
        "11:30 AM – Traslado a Maras y breve recorrido",
        "12:30 PM – Almuerzo buffet en restaurante VIP",
        "02:00 PM – Salineras de Maras y terrazas de Moray",
        "04:00 PM – Visita a Ollantaytambo",
        "05:30 PM – Regreso a Cusco",
        "06:30 PM – Drop‑off en hotel",
      ],
    },
    details: {
      title: "Detalles del Tour",
      rows: [
        { label: "Transporte", value: "Vehículo privado A/C" },
        { label: "Guía", value: "Oficial bilingüe" },
        { label: "Duración", value: "11 horas" },
        { label: "Altitud máxima", value: "3,300 m.s.n.m. (Moray)" },
        { label: "Comidas", value: "Almuerzo buffet y snack" },
        { label: "Grupo", value: "Máx. 8 personas" },
        { label: "Salida", value: "Diaria, sujeto a disponibilidad" },
      ],
    },
    incluye: {
      title: "¿Qué incluye?",
      blocks: [
        { subtitle: "Transporte", items: ["Vehículo privado con A/C", "Combustible y peajes"] },
        { subtitle: "Guía", items: ["Guía oficial bilingüe", "Asistente"] },
        { subtitle: "Entradas", items: ["Ruinas de Pisac y Ollantaytambo", "Moray y Salineras"] },
        { subtitle: "Comidas", items: ["Almuerzo buffet", "Snack energético"] },
        { subtitle: "Bebidas", items: ["Agua mineral"] },
      ],
      exclusions: ["Propinas", "Compras personales", "Seguro de viaje"],
    },
    queLlevar: {
      title: "Qué llevar",
      blocks: [
        { subtitle: "Esenciales", items: ["Pasaporte/Carnet", "Dinero en efectivo", "Protector solar"] },
        { subtitle: "Ropa", items: ["Chaqueta ligera", "Calzado cómodo", "Sombrero"] },
        { subtitle: "Otros", items: ["Cámara", "Gafas de sol", "Botella de agua reutilizable"] },
      ],
    },
    fechasSalida: {
      title: "Fechas de salida",
      schedule: ["Salidas diarias (mín. 2 personas)"],
      pickupTime: "07:30 AM – 08:00 AM",
    },
    precios: {
      title: "Precios",
      serviceNote: "Tour VIP, grupo reducido",
      rates: [
        { group: "1–2 personas", price: "US$ 199" },
        { group: "3–4 personas", price: "US$ 179" },
        { group: "5–8 personas", price: "US$ 159" },
      ],
      footnote: "Precios por persona, sujetos a cambios",
    },
    information: {
      price: "US$ 199",
      duration: "Full Day",
      difficulty: "Moderada",
      maxAltitude: "3300 m.s.n.m.",
      lodging: "No incluye",
      food: "Buffet y snack",
      whatsappMessage: "Quiero reservar Valle Sagrado VIP: ",
      bookNow: "Reserva Ahora",
    },
  },
  en: {
    generalTitle: "Sacred Valley VIP (Full Day)",
    tripOverview: {
      title: "Trip Overview",
      paragraphs: [
        "Enjoy an exclusive Sacred Valley tour with private transport and skip‑the‑line access.",
        "Visit Pisac ruins, artisan market and Ollantaytambo fortress away from crowds.",
        "Explore Maras salt mines and circular terraces of Moray with expert guides.",
      ],
      highlights: [
        "Luxury private transport",
        "Priority monument access",
        "Official bilingual guide",
        "Artisan market visit",
        "Maras & Moray",
        "Snack and water included",
      ],
    },
    itinerary: {
      title: "Detailed Itinerary",
      steps: [
        "07:30 AM – Hotel pickup in Cusco",
        "08:30 AM – Pisac Inca citadel visit",
        "10:00 AM – Pisac artisan market",
        "11:30 AM – Transfer to Maras salt mines",
        "12:30 PM – VIP buffet lunch",
        "02:00 PM – Maras & Moray terraces",
        "04:00 PM – Ollantaytambo tour",
        "05:30 PM – Return to Cusco",
        "06:30 PM – Hotel drop‑off",
      ],
    },
    details: {
      title: "Tour Details",
      rows: [
        { label: "Transport", value: "Private A/C vehicle" },
        { label: "Guide", value: "Official bilingual guide" },
        { label: "Duration", value: "11 hours" },
        { label: "Max Altitude", value: "3,300 m.a.s.l. (Moray)" },
        { label: "Meals", value: "Buffet lunch & snack" },
        { label: "Group Size", value: "Max 8 pax" },
        { label: "Departure", value: "Daily, subject to availability" },
      ],
    },
    incluye: {
      title: "What's included?",
      blocks: [
        { subtitle: "Transport", items: ["Private A/C vehicle", "Fuel & tolls"] },
        { subtitle: "Guide", items: ["Professional bilingual guide", "Assistant"] },
        { subtitle: "Tickets", items: ["Pisac & Ollantaytambo", "Moray & Maras"] },
        { subtitle: "Meals", items: ["Buffet lunch", "Energy snack"] },
        { subtitle: "Drinks", items: ["Mineral water"] },
      ],
      exclusions: ["Tips", "Personal purchases", "Travel insurance"],
    },
    queLlevar: {
      title: "What to bring?",
      blocks: [
        { subtitle: "Essentials", items: ["Passport/ID", "Cash", "Sunscreen"] },
        { subtitle: "Clothing", items: ["Light jacket", "Comfortable shoes", "Hat"] },
        { subtitle: "Others", items: ["Camera", "Sunglasses", "Reusable water bottle"] },
      ],
    },
    fechasSalida: {
      title: "Departure Dates",
      schedule: ["Daily departures (min. 2 pax)"],
      pickupTime: "07:30 AM – 08:00 AM",
    },
    precios: {
      title: "Prices",
      serviceNote: "VIP small‑group tour",
      rates: [
        { group: "1–2 pax", price: "US$ 199" },
        { group: "3–4 pax", price: "US$ 179" },
        { group: "5–8 pax", price: "US$ 159" },
      ],
      footnote: "Per person rates, subject to change",
    },
    information: {
      price: "US$ 199",
      duration: "Full Day",
      difficulty: "Moderate",
      maxAltitude: "3300 m.a.s.l.",
      lodging: "Not included",
      food: "Buffet & snack",
      whatsappMessage: "I want to book Sacred Valley VIP: ",
      bookNow: "Book Now",
    },
  },
};

export default function ValleSagradoVIP() {
  const params = useParams();
  const locale = params.locale === "en" ? "en" : "es";
  const content = translations[locale];

  return (
    <div style={{ display: "flex", gap: "50px" }}>
      {/* Left: 70% */}
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

      {/* Right: 30% */}
      <div style={{ width: "30%" }}>
        <Informacion {...content.information} locale={locale} generalTitle={content.generalTitle} />
      </div>
    </div>
);
}
