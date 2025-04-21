// MachuPicchuOneDay.tsx
"use client";
import React from "react";
import { useParams } from "next/navigation";
import Imagenes from "@/components/Renders/imagenes/imagenes";
import Principal from "@/components/Renders/principal/principal";
import Informacion from "@/components/Renders/informacion/informacion";

import imgMain from "@/public/images/Macchu Picchu/Machu Picchu - Full day/Machu Picchu main.jpg";
import img1 from "@/public/images/Macchu Picchu/Machu Picchu - Full day/Machu Picchu 1.jpg";
import img2 from "@/public/images/Macchu Picchu/Machu Picchu - Full day/Machu Picchu 2.jpg";
import img3 from "@/public/images/Macchu Picchu/Machu Picchu - Full day/Machu Picchu 3.jpg";
import img4 from "@/public/images/Macchu Picchu/Machu Picchu - Full day/Machu Picchu 4.jpg";
import img5 from "@/public/images/Macchu Picchu/Machu Picchu - Full day/Machu Picchu 5.jpg";

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
    generalTitle: "Tour Machu Picchu Full Day",
    tripOverview: {
      title: "Resumen del Tour",
      paragraphs: [
        "Vive una experiencia inolvidable descubriendo Machu Picchu en un tour de un día completo desde Cusco.",
        "Disfruta del viaje en tren panorámico por el Valle Sagrado y conoce la historia de los Incas.",
        "Admira la Ciudadela en la cima, rodeada de montañas y nubes, considerada Patrimonio de la Humanidad.",
      ],
      highlights: [
        "Tren panorámico Ollantaytambo → Aguas Calientes",
        "Guía profesional en Machu Picchu",
        "Visita a la Plaza Principal y el Templo del Sol",
        "Tiempo libre para explorar y fotografías",
        "Regreso en tren a Ollantaytambo",
        "Transporte privado Cusco ↔ estación",
      ],
    },
    itinerary: {
      title: "Itinerario Detallado",
      steps: [
        "04:30 AM – Pickup en hotel en Cusco y traslado a la estación de Poroy u Ollantaytambo",
        "06:00 AM – Tren Expedition hacia Aguas Calientes, vistas al río Urubamba",
        "08:30 AM – Llegada a Aguas Calientes y bus subida a Machu Picchu",
        "09:00 AM – Tour guiado de 2 h por la Ciudadela Inca",
        "11:30 AM – Tiempo libre para fotos y visita al Templo del Sol",
        "12:30 PM – Descenso en bus a Aguas Calientes y almuerzo buffet",
        "02:30 PM – Tren de regreso a Ollantaytambo",
        "05:30 PM – Transporte privado de Ollantaytambo a Cusco",
        "07:00 PM – Llegada estimada a Cusco y drop-off en hotel",
      ],
    },
    details: {
      title: "Detalles del Tour",
      rows: [
        { label: "Transporte", value: "Privado Cusco–estación–Cusco" },
        { label: "Tren", value: "Categoría Expedition ida y vuelta" },
        { label: "Altitud Máx.", value: "2 430 m.s.n.m. (Machu Picchu)" },
        { label: "Duración", value: "~14 horas" },
        { label: "Guía", value: "Guía oficial bilingüe" },
        { label: "Comidas", value: "Almuerzo buffet en Aguas Calientes" },
        { label: "Tamaño Grupo", value: "Máx. 16 personas" },
        { label: "Salida", value: "Diaria, sujeto a disponibilidad de tren" },
      ],
    },
    incluye: {
      title: "¿Qué incluye?",
      blocks: [
        { subtitle: "Transporte", items: ["Vehículo privado A/C", "Bus subida/bajada Machu Picchu"] },
        { subtitle: "Tren", items: ["Billete ida y vuelta Categoría Expedition"] },
        { subtitle: "Entradas", items: ["Ticket Machu Picchu sector general"] },
        { subtitle: "Guía", items: ["Guía oficial bilingüe"] },
        { subtitle: "Comidas", items: ["Almuerzo buffet"] },
      ],
      exclusions: ["Desayuno", "Bebidas adicionales", "Propinas", "Seguro de viaje"],
    },
    queLlevar: {
      title: "Qué llevar",
      blocks: [
        { subtitle: "Esenciales", items: ["Pasaporte original", "Dinero efectivo/tarjeta", "Protector solar"] },
        { subtitle: "Ropa", items: ["Calzado cómodo", "Chaqueta ligera", "Gorra/sombrero"] },
        { subtitle: "Otros", items: ["Cámara", "1L de agua", "Repelente de insectos"] },
      ],
    },
    fechasSalida: {
      title: "Fechas de Salida",
      schedule: ["Salidas diarias (sujeto a trenes)"] ,
      pickupTime: "04:30 AM – 05:00 AM",
    },
    precios: {
      title: "Precios",
      serviceNote: "Tour grupal regular, mínimo 2 personas",
      rates: [
        { group: "02–04 personas", price: "US$ 199" },
        { group: "05–8 personas", price: "US$ 179" },
        { group: "9+ personas", price: "US$ 169" },
      ],
      footnote: "Precios sujetos a cambio según disponibilidad de trenes y temporada",
    },
    information: {
      price: "US$ 199",
      duration: "Full Day",
      difficulty: "Moderada",
      maxAltitude: "2430 m.s.n.m.",
      lodging: "No incluida",
      food: "Almuerzo buffet",
      whatsappMessage: "Quiero reservar Machu Picchu Full Day: ",
      bookNow: "Reserva Ahora",
    },
  },
  en: {
    generalTitle: "Machu Picchu Full Day Tour",
    tripOverview: {
      title: "Trip Overview",
      paragraphs: [
        "Experience Machu Picchu in a full-day excursion from Cusco.",
        "Enjoy a scenic train ride through the Sacred Valley to Aguas Calientes.",
        "Explore the iconic Inca citadel with panoramic Andean views.",
      ],
      highlights: [
        "Round-trip Expedition train", 
        "Official bilingual guide",
        "Guided walk through Main Plaza and Temple of the Sun",
        "Free time for photos",
        "Private transport Cusco–station–Cusco",
        "Buffet lunch in Aguas Calientes",
      ],
    },
    itinerary: {
      title: "Detailed Itinerary",
      steps: [
        "04:30 AM – Hotel pickup in Cusco and transfer to Poroy/Ollantaytambo station",
        "06:00 AM – Expedition train to Aguas Calientes",
        "08:30 AM – Arrival and bus to Machu Picchu",
        "09:00 AM – 2h guided tour of the citadel",
        "11:30 AM – Free time for photos",
        "12:30 PM – Bus down to Aguas Calientes and buffet lunch",
        "02:30 PM – Return train to Ollantaytambo",
        "05:30 PM – Private transfer back to Cusco",
        "07:00 PM – Arrival at hotel in Cusco",
      ],
    },
    details: {
      title: "Tour Details",
      rows: [
        { label: "Transport", value: "Private vehicle with A/C" },
        { label: "Train", value: "Expedition class round-trip" },
        { label: "Max Altitude", value: "2 430 m.a.s.l." },
        { label: "Duration", value: "~14 hours" },
        { label: "Guide", value: "Official bilingual guide" },
        { label: "Meals", value: "Buffet lunch" },
        { label: "Group Size", value: "Max 16 passengers" },
        { label: "Departure", value: "Daily, depends on train schedule" },
      ],
    },
    incluye: {
      title: "What’s included?",
      blocks: [
        { subtitle: "Transport", items: ["Private vehicle", "Round-trip buses"] },
        { subtitle: "Train", items: ["Round-trip Expedition train"] },
        { subtitle: "Tickets", items: ["Machu Picchu entrance"] },
        { subtitle: "Guide", items: ["Official bilingual guide"] },
        { subtitle: "Meals", items: ["Buffet lunch in Aguas Calientes"] },
      ],
      exclusions: ["Breakfast", "Drinks", "Tips", "Travel insurance"],
    },
    queLlevar: {
      title: "What to bring?",
      blocks: [
        { subtitle: "Essentials", items: ["Original passport", "Cash/Credit card", "Sunscreen"] },
        { subtitle: "Clothing", items: ["Comfortable shoes", "Light jacket", "Hat"] },
        { subtitle: "Others", items: ["Camera", "1L water bottle", "Insect repellent"] },
      ],
    },
    fechasSalida: {
      title: "Departure Dates",
      schedule: ["Daily, subject to train availability"],
      pickupTime: "04:30 AM – 05:00 AM",
    },
    precios: {
      title: "Prices",
      serviceNote: "Regular group tour, min. 2 people",
      rates: [
        { group: "02–04 people", price: "US$ 199" },
        { group: "05–8 people", price: "US$ 179" },
        { group: "9+ people", price: "US$ 169" },
      ],
      footnote: "Prices subject to change by train availability and season",
    },
    information: {
      price: "US$ 199",
      duration: "Full Day",
      difficulty: "Moderate",
      maxAltitude: "2430 m.a.s.l.",
      lodging: "Not included",
      food: "Buffet lunch",
      whatsappMessage: "I want to book Machu Picchu Full Day: ",
      bookNow: "Book Now",
    },
  },
};

export default function MachuPicchuOneDay() {
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
