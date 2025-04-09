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

/* Interfaz de traducciones para esta página */
interface TranslationContent {
  generalTitle: string;
  tripOverview: {
    title: string;
    content: string;
  };
  itinerarySummary: {
    title: string;
    days: {
      title: string;
      steps: { text: string }[];
    }[];
  };
  itinerary: {
    title: string;
    text: React.ReactNode;
    services: string[];
  }[];
  information: {
    price: string;
    duration: string;
    difficulty: string;
    maxAltitude: string;
    lodging: string;
    food: string;
  };

  incluye: string;
  queLlevar: string;
  fechasSalida: string;
  precios: string;
  
}

/* Imágenes globales */
const globalImages = {
  mapImage: imgMain.src,
  smallImages: [img1.src, img2.src, img3.src, img4.src, img5.src],
};

/* Objeto de traducciones en español e inglés */
const translations: { es: TranslationContent; en: TranslationContent } = {
  es: {
    generalTitle: "Tour a la Laguna Humantay (Full Day)",
    tripOverview: {
      title: "Resumen del Viaje",
      content:
        "Un día lleno de hermosos paisajes en la caminata a la Laguna Humantay es imperdible, atrévete a estar muy cerca del nevado Salkantay.\n\n" +
        "Esta es la segunda montaña más alta de Cusco (6271 m.s.n.m.) y el Nevado Humantay (5473 m.s.n.m.) que protege tan linda Laguna.\n\n" +
        "El ascenso hacia la Laguna Humantay nos hará entender por qué debemos cuidar la naturaleza. Vive esta Realidad Natural.",
    },
    itinerarySummary: {
      title: "Resumen del Itinerario",
      days: [
        {
          title: "Día Único: Cusco - Laguna Humantay - Cusco",
          steps: [
            { text: "Salida desde Cusco en bus" },
            { text: "Desayuno" },
            { text: "Caminata por senderos andinos" },
            { text: "Llegada a la Laguna Humantay" },
            { text: "Almuerzo" },
            { text: "Regreso a Cusco en bus" },
          ],
        },
      ],
    },
    itinerary: [
      {
        title: "Itinerario Completo",
        text: (
          <>
            <p>Recojo en su hotel en Cusco. Nuestro transporte privado y guía bilingüe lo recogerán temprano para aprovechar al máximo el día.</p>
            <p>Viaje en autobús hacia el pueblo de Mollepata. Disfrute de un desayuno andino tradicional en un restaurante local para recargar energías.</p>
            <p>Continuación del viaje en autobús hasta el campamento base de Soraypampa.</p>
            <p>Caminata escénica de ascenso a la Laguna Humantay (3 km aproximadamente). Admire las vistas panorámicas de las montañas nevadas, los valles verdes y la flora y fauna local.</p>
            <p>Tiempo libre en la Laguna Humantay. Maravíllese con el color turquesa intenso de la laguna, tome fotografías impresionantes y disfrute de la tranquilidad del entorno.</p>
            <p>Descenso de regreso al campamento base de Soraypampa.</p>
            <p>Almuerzo en Mollepata. Pruebe los sabores auténticos de la cocina peruana en un ambiente acogedor.</p>
            <p>Regreso a Cusco. Relájese y disfrute del paisaje mientras lo llevamos de vuelta a su hotel.</p>
          </>
        ),
        services: [
          "Recojo del hotel",
          "Transporte turístico de ida y vuelta.",
          "Guía profesional.",
          "Desayuno y almuerzo Buffet.",
          "Equipo de primeros auxilios.",
          "Bastones artesanales",
        ],
      },
    ],
    information: {
      price: "USD $23",
      duration: "Excursión de un día",
      difficulty: "Moderada",
      maxAltitude: "4200 m.s.n.m.",
      lodging: "Incluye transporte y recogida en hotel",
      food: "Desayuno y almuerzo Buffet",
    },
    incluye: 
      "¿Qué incluye?:\n\n" +
      "PERSONAL ALTAMENTE CALIFICADO\n" +
      "• Guía profesional.\n" +
      "• Asistente de Guía Turístico para grupos de más de 9 personas.\n\n" +
      "KIT DE EMERGENCIA\n" +
      "• Botellas de oxígeno.\n" +
      "• Botiquín de primeros auxilios.\n\n" +
      "PERMISOS E INGRESOS\n" +
      "• Ticket de ingreso a la Laguna Humantay.\n\n" +
      "COMIDAS\n" +
      "• 1 desayuno & 1 almuerzo.\n\n" +
      "TRANSPORTE\n" +
      "• Transporte ida y vuelta.\n\n" +
      "NO INCLUYE\n" +
      "• Agua\n" +
      "• Propinas\n" +
      "• Seguro de viaje. Se recomienda encarecidamente contratar un seguro de viaje durante la duración del tour.",
    queLlevar:
      "¿Qué llevar?:\n\n" +
      "ESCENCIALES\n" +
      "• Dinero en efectivo (recuerdos, bebidas y propinas).\n" +
      "• Protector solar (SPF 50+).\n" +
      "• Desinfectante de manos.\n" +
      "• Sombrero.\n" +
      "• Snacks.\n\n" +
      "ROPA\n" +
      "• Camisetas/T-shirt.\n" +
      "• Pantalón de senderismo.\n" +
      "• 1 Polar térmico.\n" +
      "• Zapatillas de senderismo cómodas.\n" +
      "• Chaqueta impermeable/poncho de lluvia.\n" +
      "• Toalla (de secado rápido).\n\n" +
      "EQUIPAMIENTO\n" +
      "• Bolsas de plástico (para organizar).\n" +
      "• Buena mochila (más pequeña es mejor).\n\n" +
      "RECOMENDADO\n" +
      "• Humectante facial.\n" +
      "• Medicación personal.\n" +
      "• Cámara.\n" +
      "• Equipo de lluvia.",
    fechasSalida:
      "Fechas de Salida:\n\n" +
      "Fecha de salida para la Laguna Humantay:\n" +
      "• T’INKAY PERU EXPEDITION ofrece SALIDAS DIARIAS, siempre y cuando contemos con un mínimo de 2 viajeros. Además, podemos salir cualquier día de la semana.\n\n" +
      "Hora de salida para la Laguna Humantay:\n" +
      "• Salimos de Cusco alrededor de las 04:30 am o 05:00 am, dependiendo de la ubicación de su hotel en Cusco.",
    precios:
      "PRECIOS TOUR LAGUNA HUMANTAY FULL DAY\n\n" +
      "Número de personas    Precio por persona     Acción\n" +
      "02 personas           US$ 119.00             Reservar\n" +
      "03 personas           US$ 99.00              Reservar\n" +
      "04 personas           US$ 81.00              Reservar\n" +
      "05 personas           US$ 71.00              Reservar\n" +
      "06 personas o más     US$ 66.00              Reservar\n\n" +
      "9 PERSONAS A MÁS: US$ 50 POR PERSONA\n" +
      "Tour en servicio privado.\n" +
      "Este servicio es exclusivo y personalizado. Los precios varían según el tamaño del grupo. Para más información, consulte a wamanperutours@gmail.com o WhatsApp +51 958724654 (Miriam)."
  },
  en: {
    generalTitle: "Laguna Humantay Tour (Full Day)",
    tripOverview: {
      title: "Trip Overview",
      content:
        "Embark on an unforgettable adventure to the stunning Humantay Lagoon, a natural paradise nestled in the heart of the Peruvian Andes. This full-day tour will take you through breathtaking mountain landscapes, picturesque villages, and allow you to experience the majesty of one of the most beautiful lagoons in the world.\n\n" +
        "The altitude of Humantay Lagoon is approximately 4,200 meters above sea level.",
    },
    itinerarySummary: {
      title: "Itinerary Overview",
      days: [
        {
          title: "Single Day: Cusco - Humantay Lagoon - Cusco",
          steps: [
            { text: "Departure from Cusco by bus" },
            { text: "Breakfast" },
            { text: "Trek through Andean trails" },
            { text: "Arrival at Humantay Lagoon" },
            { text: "Lunch" },
            { text: "Return to Cusco by bus" },
          ],
        },
      ],
    },
    itinerary: [
      {
        title: "Full Day Itinerary",
        text: (
          <>
            <p>Pickup from your hotel in Cusco. Our private transport and bilingual guide will pick you up early to make the most of the day.</p>
            <p>Bus trip to the town of Mollepata. Enjoy a traditional Andean breakfast at a local restaurant to recharge your energy.</p>
            <p>Continue the bus journey to the Soraypampa base camp.</p>
            <p>Scenic hike up to Humantay Lagoon (approximately 3 km). Admire panoramic views of snow-capped mountains, green valleys, and local flora and fauna.</p>
            <p>Free time at Humantay Lagoon. Marvel at its deep turquoise color, capture amazing photos, and enjoy the serenity of the surroundings.</p>
            <p>Descent back to the Soraypampa base camp.</p>
            <p>Lunch in Mollepata. Savor the authentic flavors of Peruvian cuisine in a cozy setting.</p>
            <p>Return to Cusco. Relax and enjoy the scenery as we take you back to your hotel.</p>
          </>
        ),
        services: [
          "Pickup at hotel",
          "Round-trip tourist transportation",
          "Professional guide",
          "Buffet breakfast and lunch",
          "First aid kit",
          "Handmade walking sticks",
        ],
      },
    ],
    information: {
      price: "USD $23",
      duration: "Full Day Tour",
      difficulty: "Moderate",
      maxAltitude: "4200 m above sea level",
      lodging: "Includes hotel pickup",
      food: "Buffet breakfast and lunch",
    },
    incluye:
      "What is included?:\n\n" +
      "HIGHLY TRAINED STAFF\n" +
      "• Professional guide\n" +
      "• Tourist guide assistant for groups over 9 people\n\n" +
      "EMERGENCY KIT\n" +
      "• Oxygen bottles\n" +
      "• First aid kit\n\n" +
      "PERMITS AND ENTRIES\n" +
      "• Entrance ticket to Humantay Lagoon\n\n" +
      "MEALS\n" +
      "• 1 breakfast & 1 lunch\n\n" +
      "TRANSPORTATION\n" +
      "• Round-trip transportation\n\n" +
      "NOT INCLUDED\n" +
      "• Water\n" +
      "• Tips\n" +
      "• Travel insurance (highly recommended during the tour)",
    queLlevar:
      "What to bring?:\n\n" +
      "ESSENTIALS\n" +
      "• Cash (for souvenirs, drinks, and tips)\n" +
      "• Sunscreen (SPF 50+)\n" +
      "• Hand sanitizer\n" +
      "• Hat\n" +
      "• Snacks\n\n" +
      "CLOTHING\n" +
      "• T-shirts\n" +
      "• Hiking pants\n" +
      "• 1 thermal jacket\n" +
      "• Comfortable hiking shoes\n" +
      "• Waterproof jacket/poncho\n" +
      "• Quick-dry towel\n\n" +
      "EQUIPMENT\n" +
      "• Plastic bags (for organization)\n" +
      "• A compact, efficient backpack\n\n" +
      "RECOMMENDED\n" +
      "• Facial moisturizer\n" +
      "• Personal medication\n" +
      "• Camera\n" +
      "• Rain gear",
    fechasSalida:
      "Departure Dates:\n\n" +
      "Departure for Humantay Lagoon:\n" +
      "• T’INKAY PERU EXPEDITION offers DAILY DEPARTURES as long as we have a minimum of 2 travelers. Departures may occur any day of the week.\n\n" +
      "Departure Time for Humantay Lagoon:\n" +
      "• We leave Cusco around 4:30 AM or 5:00 AM, depending on your hotel's location.",
    precios:
      "FULL DAY HUMANTAY LAGOON TOUR PRICES\n\n" +
      "Number of persons    Price per person     Action\n" +
      "02 persons           US$ 119.00           Book\n" +
      "03 persons           US$ 99.00            Book\n" +
      "04 persons           US$ 81.00            Book\n" +
      "05 persons           US$ 71.00            Book\n" +
      "06 persons or more   US$ 66.00            Book\n\n" +
      "More than 9 persons: US$ 50 per person\n" +
      "Private tour service.\n" +
      "This service is exclusive and personalized. Prices vary according to your group's size. Please contact wamanperutours@gmail.com or WhatsApp +51 958724654 (Miriam)."
  },
};

export default function LagunaHumantay() {
  // Obtener el idioma desde el parámetro de la URL (si es "en", se usa inglés; de lo contrario, español)
  const params = useParams();
  const locale = params.locale === "en" ? "en" : "es";
  const content = translations[locale];

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {/* Columna izquierda (70%): Contenido principal */}
      <div style={{ width: "70%" }}>
        <h1>{content.generalTitle}</h1>
        <Imagenes mapImage={globalImages.mapImage} smallImages={globalImages.smallImages} />
        {/* El componente Principal se encarga de renderizar el resumen, itinerario y los nuevos contenidos */}
        <Principal
          tripOverview={content.tripOverview}
          itinerarySummary={content.itinerarySummary}
          itinerary={content.itinerary}
          incluye={content.incluye}
          queLlevar={content.queLlevar}
          fechasSalida={content.fechasSalida}
          precios={content.precios}
        />
        
      </div>
      {/* Columna derecha (30%): Información adicional */}
      <div style={{ width: "30%" }}>
        <Informacion
          price={content.information.price}
          duration={content.information.duration}
          difficulty={content.information.difficulty}
          maxAltitude={content.information.maxAltitude}
          lodging={content.information.lodging}
          food={content.information.food}
        />
      </div>
    </div>
  );
}
