"use client";

import { usePathname, useRouter } from "next/navigation";
import styles from "./switcher.module.css";
import PeruImg from "@/public/images/Landing/peru.png"
import UsaImg from "@/public/images/Landing/usa.png"
import Image from "next/image";

export default function LanguageSwitcher({ locale }: { locale: string }) {
  const pathname = usePathname();
  const router = useRouter();

  const switchLanguage = (newLocale: string) => {
    if (locale !== newLocale) {
      const segments = pathname.split("/").slice(2); // Quita el idioma actual
      const newPath = `/${newLocale}/${segments.join("/")}`;
      router.push(newPath);
    }
  };

  return (
    <div className={styles.languageSwitcher}>
      <button
        className={`${styles.languageButton} ${locale === "es" ? styles.active : ""}`}
        onClick={() => switchLanguage("es")}
        disabled={locale === "es"}
      >
        <Image 
          src={PeruImg}
          alt={`Imagen Peru`}
          width={30}
          height={30}
          quality={100}
          style={{ objectFit: "cover" }}
          className={styles.smallImage}
        ></Image>
      </button>
      <button
        className={`${styles.languageButton} ${locale === "en" ? styles.active : ""}`}
        onClick={() => switchLanguage("en")}
        disabled={locale === "en"}
      >
        <Image 
          src={UsaImg}
          alt={`Imagen Usa`}
          width={30}
          height={30}
          quality={100}
          style={{ objectFit: "cover" }}
          className={styles.smallImage}
        ></Image>
      </button>
    </div>
  );
}
