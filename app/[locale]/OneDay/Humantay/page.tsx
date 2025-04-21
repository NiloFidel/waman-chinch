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

const translations: { es: TranslationContent; en: TranslationContent } = {
  es: {
    generalTitle: "Tour a la Laguna Humantay (Full Day)",
    tripOverview: {
      title: "Resumen del Tour",
      paragraphs: [
        "Un día lleno de hermosos paisajes en la caminata a la Laguna Humantay es imperdible, atrévete a estar muy cerca del nevado Salkantay.",
        "Esta es la segunda montaña más alta de Cusco (6 271 m.s.n.m.) y el Nevado Humantay (5 473 m.s.n.m.) que protege a tan linda laguna.",
        "El ascenso hacia la Laguna Humantay nos hará entender por qué debemos cuidar la naturaleza. Vive esta realidad natural.",
      ],
      highlights: [
        "Admira el imponente Nevado Salkantay y maravíllate con Humantay.",
        "Contempla las aguas turquesas de la Laguna Humantay.",
        "Explora la flora y fauna de los Andes.",
        "Observa el reflejo de los nevados en las aguas cristalinas.",
        "Disfruta de un día en calma y armonía.",
        "Conecta con la energía de la Pachamama.",
      ],
    },
    itinerary: {
      title: "Itinerario Detallado",
      steps: [
        "05:00 AM – Pickup en hotel y viaje de 3 h a Mollepata (2 900 m.s.n.m.)",
        "Desayuno continental en Mollepata",
        "Traslado a Soraypampa (3 850 m.s.n.m.) e inicio de caminata (opción caballo)",
        "Trek de 3 km, observación de flora y fauna",
        "Almuerzo picnic junto a la laguna (4 200 m.s.n.m.) y ritual de hojas de coca",
        "Descenso a Soraypampa y traslado a Mollepata",
        "Almuerzo buffet en Mollepata y regreso a Cusco (aprox. 05:00 PM)",
      ],
    },
    details: {
      title: "Detalles del Tour",
      rows: [
        { label: "Comidas", value: "Desayuno continental, snacks y almuerzo fresco" },
        { label: "Distancia", value: "7 km" },
        { label: "Altitud mínima", value: "2 900 m.s.n.m." },
        { label: "Altitud máxima", value: "4 200 m.s.n.m." },
        { label: "Dificultad", value: "Moderada" },
        { label: "Duración", value: "12 horas" },
        { label: "Salida", value: "Cusco (05:00 AM)" },
        { label: "Retorno", value: "Cusco (05:00 PM)" },
      ],
    },
    incluye: {
      title: "¿Qué incluye?",
      blocks: [
        {
          subtitle: "Personal altamente calificado",
          items: ["Guía profesional", "Asistente de guía turístico para grupos > 9 personas"],
        },
        {
          subtitle: "Kit de emergencia",
          items: ["Botellas de oxígeno", "Botiquín de primeros auxilios"],
        },
        {
          subtitle: "Permisos e ingresos",
          items: ["Ticket de ingreso a la Laguna Humantay"],
        },
        {
          subtitle: "Comidas",
          items: ["1 desayuno & 1 almuerzo"],
        },
        {
          subtitle: "Transporte",
          items: ["Transporte ida y vuelta"],
        },
      ],
      exclusions: ["Agua", "Propinas", "Seguro de viaje (altamente recomendado)"],
    },
    queLlevar: {
      title: "Qué llevar",
      blocks: [
        {
          subtitle: "Esenciales",
          items: ["Dinero en efectivo (recuerdos, bebidas y propinas)", "Protector solar (SPF 50+)", "Desinfectante de manos", "Sombrero", "Snacks"],
        },
        {
          subtitle: "Ropa",
          items: ["Camisetas/T‑shirt", "Pantalón de senderismo", "Polar térmico", "Zapatillas cómodas", "Chaqueta impermeable/poncho", "Toalla de secado rápido"],
        },
        {
          subtitle: "Equipamiento",
          items: ["Bolsas de plástico (organizar)", "Mochila compacta y eficiente"],
        },
        {
          subtitle: "Recomendado",
          items: ["Humectante facial", "Medicación personal", "Cámara", "Equipo de lluvia"],
        },
      ],
    },
    fechasSalida: {
      title: "Fechas de salida",
      schedule: ["Salidas diarias (mínimo 2 viajeros), cualquier día de la semana"],
      pickupTime: "04:30 AM – 05:00 AM (según ubicación del hotel)",
    },
    precios: {
      title: "Precios",
      serviceNote: "Servicio privado, exclusivo y personalizado",
      rates: [
        { group: "02 personas", price: "US$ 119.00" },
        { group: "03 personas", price: "US$ 99.00" },
        { group: "04 personas", price: "US$ 81.00" },
        { group: "05 personas", price: "US$ 71.00" },
        { group: "06+ personas", price: "US$ 66.00" },
        { group: "9+ personas", price: "US$ 50.00" },
      ],
      footnote: "Precios varían según tamaño de grupo. Más info: wamanperutours@gmail.com | WhatsApp +51 958 724 654 (Miriam)",
    },
    information: {
      price: "USD $23",
      duration: "Excursión de un día",
      difficulty: "Moderada",
      maxAltitude: "4200 m.s.n.m.",
      lodging: "Incluye transporte y recogida en hotel",
      food: "Desayuno y almuerzo buffet",
      whatsappMessage: "Quiero reservar el paquete: ",
      bookNow: "Reserva Ahora"
    },
  },
  en: {
    generalTitle: "Humantay Lagoon Tour (Full Day)",
    tripOverview: {
      title: "Trip Overview",
      paragraphs: [
        "A full day of breathtaking landscapes on the trek to Humantay Lagoon is unmissable. Get close to Salkantay Mountain.",
        "Humantay Lagoon sits at 4 200 m above sea level, surrounded by Andean peaks.",
        "This ascent will remind you why we must protect nature. Experience this natural reality.",
      ],
      highlights: [
        "Admire Salkantay and Humantay peaks.",
        "Marvel at the turquoise waters.",
        "Explore Andean flora & fauna.",
        "Capture panoramic photos.",
        "Enjoy peace away from the city.",
        "Connect with Pachamama’s energy.",
      ],
    },
    itinerary: {
      title: "Itinerary",
      steps: [
        "05:00 AM – Hotel pickup & 3 h drive to Mollepata (2 900 m)",
        "Continental breakfast in Mollepata",
        "Transfer to Soraypampa (3 850 m) & start hike (horses optional)",
        "3 km trek with wildlife spotting",
        "Picnic lunch at lagoon (4 200 m) & coca leaf ritual",
        "Descent to Soraypampa & drive to Mollepata",
        "Buffet lunch in Mollepata & return to Cusco (~05:00 PM)",
      ],
    },
    details: {
      title: "Tour Details",
      rows: [
        { label: "Meals", value: "Continental breakfast, snacks & fresh lunch" },
        { label: "Distance", value: "7 km" },
        { label: "Min altitude", value: "2 900 m" },
        { label: "Max altitude", value: "4 200 m" },
        { label: "Difficulty", value: "Moderate" },
        { label: "Duration", value: "12 hours" },
        { label: "Departure", value: "Cusco (05:00 AM)" },
        { label: "Return", value: "Cusco (05:00 PM)" },
      ],
    },
    incluye: {
      title: "What’s included?",
      blocks: [
        {
          subtitle: "Highly trained staff",
          items: ["Professional guide", "Guide assistant for groups > 9 people"],
        },
        {
          subtitle: "Emergency kit",
          items: ["Oxygen bottles", "First aid kit"],
        },
        {
          subtitle: "Permits & entries",
          items: ["Entrance ticket to Humantay Lagoon"],
        },
        {
          subtitle: "Meals",
          items: ["1 breakfast & 1 lunch"],
        },
        {
          subtitle: "Transportation",
          items: ["Round-trip transport"],
        },
      ],
      exclusions: ["Water", "Tips", "Travel insurance (highly recommended)"],
    },
    queLlevar: {
      title: "What to bring?",
      blocks: [
        {
          subtitle: "Essentials",
          items: ["Cash (souvenirs, drinks, tips)", "Sunscreen (SPF 50+)", "Hand sanitizer", "Hat", "Snacks"],
        },
        {
          subtitle: "Clothing",
          items: ["T-shirts", "Hiking pants", "Thermal jacket", "Comfortable shoes", "Rain jacket/poncho", "Quick-dry towel"],
        },
        {
          subtitle: "Equipment",
          items: ["Plastic bags (organization)", "Compact backpack"],
        },
        {
          subtitle: "Recommended",
          items: ["Moisturizer", "Personal medication", "Camera", "Rain gear"],
        },
      ],
    },
    fechasSalida: {
      title: "Departure Dates",
      schedule: ["Daily departures (min. 2 travelers), any day of the week"],
      pickupTime: "04:30 AM – 05:00 AM (depending on hotel location)",
    },
    precios: {
      title: "Prices",
      serviceNote: "Private, personalized service",
      rates: [
        { group: "02 people", price: "US$ 119.00" },
        { group: "03 people", price: "US$ 99.00" },
        { group: "04 people", price: "US$ 81.00" },
        { group: "05 people", price: "US$ 71.00" },
        { group: "06+ people", price: "US$ 66.00" },
        { group: "9+ people", price: "US$ 50.00" },
      ],
      footnote: "Prices vary by group size. Info: wamanperutours@gmail.com | WhatsApp +51 958 724 654 (Miriam)",
    },
    information: {
      price: "USD $23",
      duration: "Full Day Tour",
      difficulty: "Moderate",
      maxAltitude: "4200 m above sea level",
      lodging: "Includes hotel pickup",
      food: "Buffet breakfast and lunch",
      whatsappMessage: "I want to book the package: ",
      bookNow: "Book Now"
    },
  },
};

export default function LagunaHumantay() {
  const params = useParams();
  const locale = params.locale === "en" ? "en" : "es";
  const content = translations[locale];

  return (
    <div style={{ display: "flex", gap: "50px" }}>
      {/* Izquierda: 70% */}
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

      {/* Derecha: 30% */}
      <div style={{ width: "30%" }}>
        <Informacion {...content.information} locale={locale} generalTitle={content.generalTitle}/>
      </div>
    </div>
  );
}
