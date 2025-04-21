// MachuPicchuTwoDays.tsx
"use client";
import React from "react";
import { useParams } from "next/navigation";
import Imagenes from "@/components/Renders/imagenes/imagenes";
import Principal from "@/components/Renders/principal/principal";
import Informacion from "@/components/Renders/informacion/informacion";

import imgMain from "@/public/images/Macchu Picchu/MachuTrain/main.jpg";
import img1 from "@/public/images/Macchu Picchu/MachuTrain/tren1.jpg";
import img2 from "@/public/images/Macchu Picchu/MachuTrain/tren2.jpg";
import img3 from "@/public/images/Macchu Picchu/MachuTrain/tren3.webp";
import img4 from "@/public/images/Macchu Picchu/MachuTrain/tren4.jpg";
import img5 from "@/public/images/Macchu Picchu/MachuTrain/tren5.jpg";

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

const translations: Record<string, TranslationContent> = {
  es: {
    generalTitle: "Machu Picchu Tour 2 Días",
    tripOverview: {
      title: "Resumen del Tour",
      paragraphs: [
        "Descubre Machu Picchu en un viaje de dos días con pernocte en Aguas Calientes.",
        "Viaja en tren panorámico, explora la ciudadela y asciende a Huayna Picchu.",
        "Disfruta de la magia del amanecer sobre las ruinas incas con tranquilidad.",
      ],
      highlights: [
        "Tren Expedition ida/vuelta",
        "Pernocte en Aguas Calientes",
        "Tour guiado sector principal y Huayna Picchu",
        "Amanecer en Machu Picchu",
        "Visita al Museo de Sitio",
        "Transporte privado Cusco–estación",
      ],
    },
    itinerary: {
      title: "Itinerario Detallado",
      steps: [
        "Día 1 - 04:00 AM: Pickup en hotel y traslado a estación Ollantaytambo",
        "06:00 AM: Tren Expedition a Aguas Calientes",
        "08:30 AM: Bus a Machu Picchu y tour guiado de 2 h",
        "11:00 AM: Tiempo libre y almuerzo en Aguas Calientes",
        "02:00 PM: Visita al Museo de Sitio Manuel Chávez Ballón",
        "04:00 PM: Check-in en hotel y cena opcional",
        "Día 2 - 05:30 AM: Ascenso a Huayna Picchu",
        "08:00 AM: Retorno a ciudadela y tiempo para fotos",
        "10:00 AM: Descenso en bus y tren de regreso",
        "02:30 PM: Llegada a Ollantaytambo y traslado a Cusco",
        "05:00 PM: Drop-off en hotel en Cusco",
      ],
    },
    details: {
      title: "Detalles del Tour",
      rows: [
        { label: "Duración", value: "2 días / 1 noche" },
        { label: "Transporte", value: "Privado Cusco–estación–Cusco" },
        { label: "Tren", value: "Categoría Expedition" },
        { label: "Guía", value: "Oficial bilingüe" },
        { label: "Alojamiento", value: "Hotel 3★ en Aguas Calientes" },
        { label: "Comidas", value: "1 desayuno, 1 almuerzo, opciones cena" },
        { label: "Máx. Altitud", value: "2 430 m.s.n.m." },
        { label: "Grupo", value: "Máx. 16 personas" },
      ],
    },
    incluye: {
      title: "¿Qué incluye?",
      blocks: [
        { subtitle: "Transporte", items: ["Vehículo privado A/C", "Bus subida/bajada"] },
        { subtitle: "Tren", items: ["Billete expedition ida/vuelta"] },
        { subtitle: "Entradas", items: ["Machu Picchu y Huayna Picchu"] },
        { subtitle: "Alojamiento", items: ["1 noche en hotel 3★"] },
        { subtitle: "Comidas", items: ["1 desayuno continental", "1 almuerzo buffet"] },
        { subtitle: "Guía", items: ["Guía oficial bilingüe"] },
      ],
      exclusions: ["Cenas", "Extras personales", "Propinas", "Seguro de viaje"],
    },
    queLlevar: {
      title: "Qué llevar",
      blocks: [
        { subtitle: "Esenciales", items: ["Pasaporte", "Dinero efectivo/tarjeta", "Protector solar"] },
        { subtitle: "Ropa", items: ["Calzado de trekking", "Rompevientos", "Sombrero"] },
        { subtitle: "Otros", items: ["LINTERNA", "Cámara", "Botella de agua"] },
      ],
    },
    fechasSalida: {
      title: "Fechas de Salida",
      schedule: ["Salidas diarias (sujeto a horarios de trenes)"] ,
      pickupTime: "04:00 AM – 04:30 AM",
    },
    precios: {
      title: "Precios",
      serviceNote: "Tour grupal regular, min. 2 personas",
      rates: [
        { group: "02 personas", price: "US$ 349" },
        { group: "03–4 personas", price: "US$ 329" },
        { group: "5+ personas", price: "US$ 309" },
      ],
      footnote: "Sujeto a cambio según temporada y disponibilidad",
    },
    information: {
      price: "US$ 349",
      duration: "2 días / 1 noche",
      difficulty: "Moderada",
      maxAltitude: "2430 m.s.n.m.",
      lodging: "Hotel 3★ Aguas Calientes",
      food: "Desayuno y almuerzo incluidos",
      whatsappMessage: "Quiero reservar Machu Picchu 2 días: ",
      bookNow: "Reserva Ahora",
    },
  },
  en: {
    generalTitle: "Machu Picchu 2-Day Tour",
    tripOverview: {
      title: "Trip Overview",
      paragraphs: [
        "Discover Machu Picchu over two days with an overnight stay in Aguas Calientes.",
        "Enjoy the panoramic train ride and explore Huayna Picchu at sunrise.",
        "Experience the tranquility of the site after the day-trippers leave.",
      ],
      highlights: [
        "Expedition train round-trip",
        "Overnight in Aguas Calientes",
        "Guided tour of Machu Picchu and Huayna Picchu",
        "Sunrise view from the citadel",
        "Site Museum entrance",
        "Private transport Cusco–station–Cusco",
      ],
    },
    itinerary: {
      title: "Detailed Itinerary",
      steps: [
        "Day 1 - 04:00 AM: Hotel pickup in Cusco and transfer to Ollantaytambo",
        "06:00 AM: Expedition train to Aguas Calientes",
        "08:30 AM: Bus to Machu Picchu and 2h guided tour",
        "11:00 AM: Free time and lunch in town",
        "02:00 PM: Visit to Site Museum Manuel Chávez Ballón",
        "04:00 PM: Hotel check-in and leisure time",
        "Day 2 - 05:30 AM: Ascend Huayna Picchu",
        "08:00 AM: Return and explore ruins",
        "10:00 AM: Bus down and train back",
        "02:30 PM: Arrive Ollantaytambo and transfer to Cusco",
        "05:00 PM: Hotel drop-off in Cusco",
      ],
    },
    details: {
      title: "Tour Details",
      rows: [
        { label: "Duration", value: "2 days / 1 night" },
        { label: "Transport", value: "Private A/C vehicle" },
        { label: "Train", value: "Expedition class" },
        { label: "Guide", value: "Official bilingual guide" },
        { label: "Accommodation", value: "3★ hotel in Aguas Calientes" },
        { label: "Meals", value: "1 breakfast, 1 lunch" },
        { label: "Max Altitude", value: "2430 m.a.s.l." },
        { label: "Group Size", value: "Max 16 guests" },
      ],
    },
    incluye: {
      title: "What’s included?",
      blocks: [
        { subtitle: "Transport", items: ["Private vehicle", "Round-trip bus"] },
        { subtitle: "Train", items: ["Round-trip Expedition train"] },
        { subtitle: "Tickets", items: ["Machu Picchu & Huayna Picchu"] },
        { subtitle: "Accommodation", items: ["1-night 3★ hotel"] },
        { subtitle: "Meals", items: ["Breakfast & lunch"] },
        { subtitle: "Guide", items: ["Official bilingual guide"] },
      ],
      exclusions: ["Dinners", "Personal extras", "Tips", "Travel insurance"],
    },
    queLlevar: {
      title: "What to bring?",
      blocks: [
        { subtitle: "Essentials", items: ["Passport", "Cash/Credit card", "Sunscreen"] },
        { subtitle: "Clothing", items: ["Hiking shoes", "Windbreaker", "Hat"] },
        { subtitle: "Others", items: ["Flashlight", "Camera", "Water bottle 1L"] },
      ],
    },
    fechasSalida: {
      title: "Departure Dates",
      schedule: ["Daily, subject to train schedules"],
      pickupTime: "04:00 AM – 04:30 AM",
    },
    precios: {
      title: "Prices",
      serviceNote: "Regular group tour, min. 2 guests",
      rates: [
        { group: "02 guests", price: "US$ 349" },
        { group: "03–4 guests", price: "US$ 329" },
        { group: "5+ guests", price: "US$ 309" },
      ],
      footnote: "Subject to season and availability",
    },
    information: {
      price: "US$ 349",
      duration: "2 days / 1 night",
      difficulty: "Moderate",
      maxAltitude: "2430 m.a.s.l.",
      lodging: "3★ hotel included",
      food: "Breakfast & lunch",
      whatsappMessage: "I want to book Machu Picchu 2-Day Tour: ",
      bookNow: "Book Now",
    },
  },
};

export default function MachuPicchuTwoDays() {
  const params = useParams();
  const locale = params.locale === "en" ? "en" : "es";
  const content = translations[locale];

  return (
    <div style={{ display: "flex", gap: "50px" }}>
      <div style={{width:"70%"}}>
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
      <div style={{width:"30%"}}>
        <Informacion {...content.information} locale={locale} generalTitle={content.generalTitle} />
      </div>
    </div>
  );
}
