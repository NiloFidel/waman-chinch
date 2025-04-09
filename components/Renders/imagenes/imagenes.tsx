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
    <div className={styles.imageContainer}>
      <div className={styles.mapImageWrapper}>
        <Image
          src={mapImage}
          alt="Mapa del tour"
          fill
          style={{ objectFit: "cover" }}
          className={styles.mapImage}
        />
      </div>
      <div className={styles.smallImagesGrid}>
        {smallImages.map((src, index) => (
          <div key={index} className={styles.smallImageWrapper}>
            <Image
              src={src}
              alt={`Imagen ${index + 1}`}
              fill
              style={{ objectFit: "cover" }}
              className={styles.smallImage}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Imagenes;
