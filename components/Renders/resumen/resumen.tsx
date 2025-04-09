"use client";
import React from "react";
import styles from "./resumen.module.css";

interface TripOverview {
  title: string;
  content: string;
}

interface ResumenProps {
  tripOverview: TripOverview;
}

const Resumen: React.FC<ResumenProps> = ({ tripOverview }) => {
  return (
    <div className={styles.resumenContainer}>
      <h2 className={styles.title}>{tripOverview.title}</h2>
      <p className={styles.content}>{tripOverview.content}</p>
    </div>
  );
};

export default Resumen;
