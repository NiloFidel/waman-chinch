"use client";
import React from "react";
import styles from "./informacion.module.css";

interface InformationProps {
  price: string;
  duration: string;
  difficulty: string;
  maxAltitude: string;
  lodging: string;
  food: string;
}

const Informacion: React.FC<InformationProps> = ({
  price,
  duration,
  difficulty,
  maxAltitude,
  lodging,
  food,
}) => {
  return (
    <aside className={styles.informacionContainer}>
      <h2 className={styles.header}>Información</h2>
      <ul className={styles.infoList}>
        <li>
          <strong>{`Precio:`}</strong> {price}
        </li>
        <li>
          <strong>{`Duración:`}</strong> {duration}
        </li>
        <li>
          <strong>{`Dificultad:`}</strong> {difficulty}
        </li>
        <li>
          <strong>{`Altura Máxima:`}</strong> {maxAltitude}
        </li>
        <li>
          <strong>{`Alojamiento:`}</strong> {lodging}
        </li>
        <li>
          <strong>{`Comida:`}</strong> {food}
        </li>
      </ul>
    </aside>
  );
};

export default Informacion;
