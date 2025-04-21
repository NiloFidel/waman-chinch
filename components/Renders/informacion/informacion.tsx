"use client";
import React from "react";
import { FaDollarSign, FaRegClock, FaMountain, FaHotel, FaUtensils } from "react-icons/fa";
import { GiMountainClimbing } from "react-icons/gi";
import styles from "./informacion.module.css";
import { translations } from "@/lib/i19n";

export interface InformationProps {
  locale: string;
  price: string;
  duration: string;
  difficulty: string;
  maxAltitude: string;
  lodging: string;
  food: string;
  whatsappMessage: string;
  generalTitle: string;
  bookNow: string;
}

export default function Informacion({
  locale,
  price,
  duration,
  difficulty,
  maxAltitude,
  lodging,
  food,
  whatsappMessage,
  generalTitle,
  bookNow,
}: InformationProps) {
  // Selecciona las traducciones según el locale
  const t = translations[locale as keyof typeof translations] || translations.es;

  /** Función para abrir WhatsApp */
  const handleBookNow = () => {
    window.open(`https://wa.me/51958724654?text=${whatsappMessage}${generalTitle}`, "_blank");
  };

  return (
    <aside className={styles.informacionContainer}>
      <h2 className={styles.header}>{t.Information}</h2>
      <dl className={styles.infoList}>
        <div className={styles.infoItem}>
          <dt className={styles.label}>
            <FaDollarSign className={styles.icon} />
            {t.Price}:
          </dt>
          <dd className={styles.value}>{price}</dd>
        </div>
        <div className={styles.infoItem}>
          <dt className={styles.label}>
            <FaRegClock className={styles.icon} />
            {t.Duration}:
          </dt>
          <dd className={styles.value}>{duration}</dd>
        </div>
        <div className={styles.infoItem}>
          <dt className={styles.label}>
            <GiMountainClimbing className={styles.icon} />
            {t.Difficulty}:
          </dt>
          <dd className={styles.value}>{difficulty}</dd>
        </div>
        <div className={styles.infoItem}>
          <dt className={styles.label}>
            <FaMountain className={styles.icon} />
            {t.Height}:
          </dt>
          <dd className={styles.value}>{maxAltitude}</dd>
        </div>
        <div className={styles.infoItem}>
          <dt className={styles.label}>
            <FaHotel className={styles.icon} />
            {t.Accommodation}:
          </dt>
          <dd className={styles.value}>{lodging}</dd>
        </div>
        <div className={styles.infoItem}>
          <dt className={styles.label}>
            <FaUtensils className={styles.icon} />
            {t.Food}:
          </dt>
          <dd className={styles.value}>{food}</dd>
        </div>
        {/* Botón de Reserva */}
        <button className={styles.bookButton} onClick={handleBookNow}>
            {bookNow}
        </button>
      </dl>
    </aside>
  );
}
