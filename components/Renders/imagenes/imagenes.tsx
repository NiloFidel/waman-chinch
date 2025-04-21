"use client";
import React from "react";
import Image from "next/image";
import styles from "./imagenes.module.css";

interface ImagenesProps {
  mapImage: string;
  smallImages: string[];
}

const Imagenes: React.FC<ImagenesProps> = ({ mapImage, smallImages }) => {
  return (
    <div className={styles.gridContainer}>
      {/* Small images */}
      {smallImages.slice(0, 3).map((src, idx) => (
        <div
          key={idx}
          className={`${styles.smallWrapper} ${styles[`small${idx + 1}`]}`}
        >
          <Image
            src={src}
            alt={`Imagen ${idx + 1}`}
            fill
            style={{ objectFit: "cover" }}
            className={styles.smallImage}
          />
        </div>
      ))}

      {/* Map main image */}
      <div className={styles.mapWrapper}>
        <Image
          src={mapImage}
          alt="Mapa del tour"
          fill
          style={{ objectFit: "cover" }}
          className={styles.mapImage}
        />
      </div>

      {/* Remaining small images */}
      {smallImages.slice(3).map((src, idx) => (
        <div
          key={idx + 3}
          className={`${styles.smallWrapper} ${styles[`small${idx + 4}`]}`}
        >
          <Image
            src={src}
            alt={`Imagen ${idx + 4}`}
            fill
            style={{ objectFit: "cover" }}
            className={styles.smallImage}
          />
        </div>
      ))}
    </div>
  );
};

export default Imagenes;
