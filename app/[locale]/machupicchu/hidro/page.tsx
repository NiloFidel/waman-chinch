// machupicchuByHidrolectrica.tsx
"use client";
import React from "react";
import { useParams } from "next/navigation";
import Imagenes from "@/components/Renders/imagenes/imagenes";
import Principal from "@/components/Renders/principal/principal";
import Informacion from "@/components/Renders/informacion/informacion";

import imgMain from "@/public/images/Macchu Picchu/MachuCar/Machu Picchu main.jpg";
import img1 from "@/public/images/Macchu Picchu/MachuCar/car1.jpg";
import img2 from "@/public/images/Macchu Picchu/MachuCar/car2.jpg";
import img3 from "@/public/images/Macchu Picchu/MachuCar/car3.jpg";
import img4 from "@/public/images/Macchu Picchu/MachuCar/car4.jpg";
import img5 from "@/public/images/Macchu Picchu/MachuCar/car5.jpg";

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
    generalTitle: "Machu Picchu por Hidroeléctrica (Full Day)",
    tripOverview: {
      title: "Resumen del Tour",
      paragraphs: [
        "Recorre en auto desde Cusco hasta la central hidroeléctrica de Santa Teresa.",
        "Realiza un trek de aproximadamente 3 horas por la vía férrea hasta Aguas Calientes.",
        "Visita la maravilla inca de Machu Picchu con guía profesional y regresa el mismo día.",
      ],
      highlights: [
        "Transporte privado Cusco–Hidroeléctrica",
        "Trek 12 km por vía férrea",
        "Guía oficial en Machu Picchu",
        "Visita al Santuario Inca",
        "Opción de bus Aguas Calientes–Machu Picchu",
        "Regreso en auto desde Hidroeléctrica",
      ],
    },
    itinerary: {
      title: "Itinerario Detallado",
      steps: [
        "04:00 AM – Pickup en hotel en Cusco y traslado en van a Hidroeléctrica",
        "08:00 AM – Llegada a Hidroeléctrica y comienzo de caminata por vías",
        "11:00 AM – Arribo a Aguas Calientes y snack de bienvenida",
        "11:30 AM – Bus opcional a Machu Picchu (25 min)",
        "12:00 PM – Tour guiado de 2 h en Machu Picchu",
        "02:30 PM – Tiempo libre para fotos y explorar la ciudadela",
        "03:30 PM – Descenso en bus a Aguas Calientes",
        "04:00 PM – Trek de retorno a Hidroeléctrica",
        "07:00 PM – Traslado en van de regreso a Cusco",
        "10:00 PM – Llegada estimada y drop-off en hotel",
      ],
    },
    details: {
      title: "Detalles del Tour",
      rows: [
        { label: "Distancia Trek", value: "~12 km" },
        { label: "Duración", value: "~18 horas" },
        { label: "Transporte", value: "Van privada A/C" },
        { label: "Guía", value: "Oficial bilingüe" },
        { label: "Altitud Máx.", value: "2 430 m.s.n.m." },
        { label: "Comidas", value: "Snack y agua incluidos" },
        { label: "Grupo", value: "Máx. 12 personas" },
        { label: "Dificultad", value: "Moderada a alta" },
      ],
    },
    incluye: {
      title: "¿Qué incluye?",
      blocks: [
        { subtitle: "Transporte", items: ["Van privada Cusco–Hidroeléctrica–Cusco", "Bus opcional Aguas Calientes–Machu Picchu"] },
        { subtitle: "Guía", items: ["Guía oficial bilingüe"] },
        { subtitle: "Entradas", items: ["Ticket Machu Picchu sector general"] },
        { subtitle: "Snack", items: ["Snack energético y botella de agua"] },
      ],
      exclusions: ["Almuerzo", "Cenas", "Propinas", "Seguro de viaje"],
    },
    queLlevar: {
      title: "Qué llevar",
      blocks: [
        { subtitle: "Esenciales", items: ["Pasaporte", "DINERO EFECTIVO", "Protector solar"] },
        { subtitle: "Ropa", items: ["Calzado de trekking", "Ropa cómoda", "Chaqueta ligera"] },
        { subtitle: "Equipo", items: ["LINTERNA", "Cámara", "Mochila ligera"] },
      ],
    },
    fechasSalida: {
      title: "Fechas de Salida",
      schedule: ["Salidas lunes, miércoles y viernes"] ,
      pickupTime: "04:00 AM",
    },
    precios: {
      title: "Precios",
      serviceNote: "Tour grupal regular, mínimo 4 personas",
      rates: [
        { group: "04 personas", price: "US$ 89" },
        { group: "05–6 personas", price: "US$ 79" },
        { group: "7+ personas", price: "US$ 69" },
      ],
      footnote: "No incluye almuerzo. Sujeto a cambios según temporada",
    },
    information: {
      price: "Desde US$ 89",
      duration: "Full Day (~18h)",
      difficulty: "Moderada–Alta",
      maxAltitude: "2430 m.s.n.m.",
      lodging: "No incluye",
      food: "Snack incluido",
      whatsappMessage: "Quiero reservar Machu Picchu por Hidroeléctrica: ",
      bookNow: "Reserva Ahora",
    },
  },
  en: {
    generalTitle: "Machu Picchu via Hydrolectric Power Plant (Full Day)",
    tripOverview: {
      title: "Trip Overview",
      paragraphs: [
        "Journey by van from Cusco to the Hidroelectric power plant in Santa Teresa.",
        "Trek approx. 12 km along train tracks to Aguas Calientes.",
        "Visit Machu Picchu with an official guide and return same day.",
      ],
      highlights: [
        "Private van transport Cusco–Hidroeléctrica",
        "12 km trek by railway",
        "Official guided tour in Machu Picchu",
        "Visit the Inca Sanctuary",
        "Optional bus Aguas Calientes–Machu Picchu",
        "Return van to Cusco",
      ],
    },
    itinerary: {
      title: "Detailed Itinerary",
      steps: [
        "04:00 AM – Hotel pickup in Cusco and van to Hidroelectric plant",
        "08:00 AM – Arrive and start trek to Aguas Calientes",
        "11:00 AM – Snack stop upon arrival",
        "11:30 AM – Optional bus to Machu Picchu (25 min)",
        "12:00 PM – 2h guided tour of Machu Picchu",
        "02:30 PM – Free time for photos",
        "03:30 PM – Trek back to Hidroeléctrica",
        "07:00 PM – Van return to Cusco",
        "10:00 PM – Hotel drop-off in Cusco",
      ],
    },
    details: {
      title: "Tour Details",
      rows: [
        { label: "Trek Distance", value: "~12 km" },
        { label: "Duration", value: "~18 hours" },
        { label: "Transport", value: "Private A/C van" },
        { label: "Guide", value: "Official bilingual guide" },
        { label: "Max Altitude", value: "2430 m.a.s.l." },
        { label: "Snacks", value: "Energizing snack & water" },
        { label: "Group Size", value: "Max 12 people" },
        { label: "Difficulty", value: "Moderate–High" },
      ],
    },
    incluye: {
      title: "What’s included?",
      blocks: [
        { subtitle: "Transport", items: ["Private van Cusco–Hidroeléctrica–Cusco", "Optional bus to Machu Picchu"] },
        { subtitle: "Guide", items: ["Official bilingual guide"] },
        { subtitle: "Tickets", items: ["Machu Picchu general entry"] },
        { subtitle: "Snack", items: ["Energy snack & water"] },
      ],
      exclusions: ["Lunch", "Dinners", "Tips", "Travel insurance"],
    },
    queLlevar: {
      title: "What to bring?",
      blocks: [
        { subtitle: "Essentials", items: ["Passport", "Cash/Card", "Sunscreen"] },
        { subtitle: "Clothing", items: ["Hiking shoes", "Comfortable clothes", "Light jacket"] },
        { subtitle: "Gear", items: ["Flashlight", "Camera", "Light backpack"] },
      ],
    },
    fechasSalida: {
      title: "Departure Dates",
      schedule: ["Mon, Wed & Fri departures"],
      pickupTime: "04:00 AM",
    },
    precios: {
      title: "Prices",
      serviceNote: "Group tour, min. 4 people",
      rates: [
        { group: "04 ppl", price: "US$ 89" },
        { group: "05–6 ppl", price: "US$ 79" },
        { group: "7+ ppl", price: "US$ 69" },
      ],
      footnote: "Excludes lunch. Subject to availability",
    },
    information: {
      price: "From US$ 89",
      duration: "Full Day (~18h)",
      difficulty: "Moderate–High",
      maxAltitude: "2430 m.a.s.l.",
      lodging: "Not included",
      food: "Snack included",
      whatsappMessage: "I want to book Machu Picchu via Hydro Plant: ",
      bookNow: "Book Now",
    },
  },
};

export default function MachuPicchuByHidrolectrica() {
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
