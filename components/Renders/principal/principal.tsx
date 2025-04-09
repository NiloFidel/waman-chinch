"use client";
import React, { useState } from "react";
import Resumen from "@/components/Renders/resumen/resumen";
import Itinerario from "@/components/Renders/itinerario/itinerario";
import styles from "./principal.module.css";

interface TripOverview {
  title: string;
  content: string;
}

interface ItinerarySummaryDay {
  title: string;
  steps: { text: string }[];
}

interface ItinerarySummary {
  title: string;
  days: ItinerarySummaryDay[];
}

interface ItineraryItem {
  title: string;
  text: React.ReactNode;
  services: string[];
}

interface PrincipalProps {
  tripOverview: TripOverview;
  itinerarySummary: ItinerarySummary;
  itinerary: ItineraryItem[];
  incluye: string;
  queLlevar: string;
  fechasSalida: string;
  precios: string;
}

type Tab = "resumen" | "itinerario" | "incluye" | "queLlevar" | "fechasSalida" | "precios";

const Principal: React.FC<PrincipalProps> = ({
  tripOverview,
  itinerarySummary,
  itinerary,
  incluye,
  queLlevar,
  fechasSalida,
  precios,
}) => {
  // Estado para alternar entre las diferentes pestañas.
  const [activeTab, setActiveTab] = useState<Tab>("resumen");

  // Función para renderizar el contenido según la pestaña activa.
  const renderContent = () => {
    switch (activeTab) {
      case "resumen":
        return <Resumen tripOverview={tripOverview} />;
      case "itinerario":
        return <Itinerario itinerary={itinerary} itinerarySummary={itinerarySummary} />;
      case "incluye":
        return (
          <div className={styles.textContainer}>
            <pre className={styles.preformatted}>{incluye}</pre>
          </div>
        );
      case "queLlevar":
        return (
          <div className={styles.textContainer}>
            <pre className={styles.preformatted}>{queLlevar}</pre>
          </div>
        );
      case "fechasSalida":
        return (
          <div className={styles.textContainer}>
            <pre className={styles.preformatted}>{fechasSalida}</pre>
          </div>
        );
      case "precios":
        return (
          <div className={styles.textContainer}>
            <pre className={styles.preformatted}>{precios}</pre>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <button
          className={`${styles.tabButton} ${activeTab === "resumen" ? styles.active : ""}`}
          onClick={() => setActiveTab("resumen")}
        >
          RESUMEN
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === "itinerario" ? styles.active : ""}`}
          onClick={() => setActiveTab("itinerario")}
        >
          ITINERARIO
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === "incluye" ? styles.active : ""}`}
          onClick={() => setActiveTab("incluye")}
        >
          ¿Qué incluye?
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === "queLlevar" ? styles.active : ""}`}
          onClick={() => setActiveTab("queLlevar")}
        >
          ¿Qué llevar?
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === "fechasSalida" ? styles.active : ""}`}
          onClick={() => setActiveTab("fechasSalida")}
        >
          Fechas de Salida
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === "precios" ? styles.active : ""}`}
          onClick={() => setActiveTab("precios")}
        >
          Precios
        </button>
      </div>
      <div className={styles.contentContainer}>
        {renderContent()}
      </div>
    </div>
  );
};

export default Principal;
