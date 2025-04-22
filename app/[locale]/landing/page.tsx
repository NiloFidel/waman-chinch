"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./landing.module.css";
import { FaStar } from "react-icons/fa";

// Imágenes Misión y Visión
import imgMission from "@/public/images/Landing/Mision.jpeg";
import imgVision  from "@/public/images/Landing/Vision.jpeg";

// Hero slider images
import hero1 from "@/public/images/Macchu Picchu/Machu Picchu - Full day/machupichu.jpg";
import hero2 from "@/public/images/Valle/ValleVIP/valle main.jpg";
import hero3 from "@/public/images/OneDayTour/CityTour/Qorikancha-Cusco.jpg";
import hero4 from "@/public/images/CaminoInca/camino2D/main.jpg";
import hero5 from "@/public/images/OneDayTour/Humantay/humantay-main.webp";

type Locale = "es" | "en";

const heroSlides = [
  {
    image: hero1,
    es: { title: "Machu Picchu Full Day", button: "Ver más", link: "/es/one-day/machupicchu-full-day" },
    en: { title: "Machu Picchu Full Day", button: "View more", link: "/en/one-day/machupicchu-full-day" },
  },
  {
    image: hero2,
    es: { title: "Valle Sagrado VIP", button: "Ver más", link: "/es/one-day/valle-sagrado-vip" },
    en: { title: "Sacred Valley VIP", button: "View more", link: "/en/one-day/valle-sagrado-vip" },
  },
  {
    image: hero3,
    es: { title: "City Tour", button: "Ver más", link: "/es/one-day/city-tour-cusco" },
    en: { title: "City Tour", button: "View more", link: "/en/one-day/city-tour-cusco" },
  },
  {
    image: hero4,
    es: { title: "Camino Inca 2D/1N", button: "Ver más", link: "/es/one-day/camino-inca-2d" },
    en: { title: "Inca Trail 2D/1N", button: "View more", link: "/en/one-day/inca-trail-2d" },
  },
  {
    image: hero5,
    es: { title: "Laguna Humantay", button: "Ver más", link: "/es/one-day/laguna-humantay" },
    en: { title: "Humantay Lagoon", button: "View more", link: "/en/one-day/humantay-lagoon" },
  },
];

interface Translations {
  welcome:   { title: string; lines: string[] };
  mission:   { title: string; content: string };
  vision:    { title: string; content: string };
  values:    { title: string; list: string[] };
  time:      { title: string; items: string[] };
  weather:   { title: string; paragraphs: string[] };
  why:       { title: string; bullets: string[] };
  contact:   { title: string; methods: string[] };
}

const translations: Record<Locale, Translations> = {
  es: {
    welcome: {
      title: "Bienvenida",
      lines: [
        "Waman Perú Tours somos una agencia de viajes y Tour Operador Local con base en Cusco – Perú, realizamos el sueño de miles de personas que llegaron como tú para una merecida vacaciones.",
        "Organizamos tours en grupo y viajes personalizados a medida, en servicio compartido o privado.",
        "Ofrecemos alternativas para personas mayores (en silla de ruedas) y niños pequeños, priorizando siempre su seguridad y calidad de servicio.",
        "Tenemos los mejores viajes de un día, excursiones o paquetes de trekking que se adapten a sus necesidades.",
      ],
    },
    mission: {
      title: "Misión",
      content:
        "Ofrecer un servicio personalizado de calidad y confiabilidad, diseñando experiencias únicas a precios competitivos, manteniendo los principios de sostenibilidad y turismo responsable en todos nuestros destinos.",
    },
    vision: {
      title: "Visión",
      content:
        "Ser reconocida como la agencia tour operadora líder en la región del Cusco, enriquecer cada experiencia vacacional y contribuir al desarrollo social, cultural y económico de las comunidades.",
    },
    values: {
      title: "Valores",
      list: [
        "Innovación","Humildad","Integridad","Compromiso","Superación",
        "Fuerza","Lealtad","Colaboración","Generosidad","Puntualidad",
        "Solidaridad","Respeto","Honestidad","Servicio","Disciplina","Excelencia"
      ],
    },
    time: {
      title: "Tiempo",
      items: [
        "Horario de atención: 08:00 AM – 08:00 PM",
        "Reservas 24/7 vía WhatsApp",
        "Respuesta a consultas en menos de 2 horas",
      ],
    },
    weather: {
      title: "¿Cómo está el tiempo en Perú?",
      paragraphs: [
        "Costa: clima desértico con niebla de invierno (may–oct) y veranos cálidos (dic–abr).",
        "Sierra: estación seca (abr–oct) con días soleados y noches frías; lluvias (nov–mar).",
        "Amazonas: clima tropical con temporada seca (abr–oct) y lluvias intensas (nov–mar).",
      ],
    },
    why: {
      title: "¿Por qué reservar con nosotros?",
      bullets: [
        "Operadores de turismo locales en Cusco.",
        "Vehículos 100% turísticos y guías oficiales bilingües.",
        "Compromiso con la seguridad y el medio ambiente.",
        "Grupos reducidos y servicios altamente personalizados.",
        "Sin precios ocultos y atención familiar.",
      ],
    },
    contact: {
      title: "Contacto",
      methods: [
        "Email: info@wamanperutours.com",
        "Teléfono: +51 958 724 654",
        "Web: www.wamanperutours.com",
      ],
    },
  },
  en: {
    welcome: {
      title: "Welcome",
      lines: [
        "Waman Peru Tours is a Cusco-based local tour operator, making the dream of thousands come true for well-deserved vacations.",
        "We organize group tours and tailor-made private or shared trips.",
        "We offer options for seniors (wheelchair accessible) and young children, always prioritizing safety and service quality.",
        "We have the best one-day trips, excursions, and trekking packages to suit your needs.",
      ],
    },
    mission: {
      title: "Mission",
      content:
        "Provide personalized, reliable service by crafting unique experiences at competitive prices, upholding sustainability and responsible tourism in all destinations.",
    },
    vision: {
      title: "Vision",
      content:
        "Be recognized as the leading tour operator in the Cusco region, enriching every vacation experience and contributing to social, cultural, and economic development.",
    },
    values: {
      title: "Values",
      list: [
        "Innovation","Humility","Integrity","Commitment","Growth",
        "Strength","Loyalty","Collaboration","Generosity","Punctuality",
        "Solidarity","Respect","Honesty","Service","Discipline","Excellence"
      ],
    },
    time: {
      title: "Hours",
      items: [
        "Service: 08:00 AM – 08:00 PM",
        "24/7 WhatsApp reservations",
        "Response time under 2 hours",
      ],
    },
    weather: {
      title: "Weather in Peru",
      paragraphs: [
        "Coast: desert climate with winter fog (May–Oct) and warm summers (Dec–Apr).",
        "Highlands: dry season (Apr–Oct) with sunny days and cold nights; rains (Nov–Mar).",
        "Amazon: tropical climate with dry season (Apr–Oct) and heavy rains (Nov–Mar).",
      ],
    },
    why: {
      title: "Why Book With Us?",
      bullets: [
        "Local tour operators in Cusco.",
        "100% tourist‑grade vehicles and official bilingual guides.",
        "Commitment to safety and sustainability.",
        "Small groups and highly personalized service.",
        "No hidden costs and family‑friendly care.",
      ],
    },
    contact: {
      title: "Contact Us",
      methods: [
        "Email: info@wamanperutours.com",
        "Phone: +51 958 724 654",
        "Web: www.wamanperutours.com",
      ],
    },
  },
};

export default function LandingPage() {
  const raw = usePathname().split("/")[1] as Locale;
  const locale: Locale = raw === "en" ? "en" : "es";
  const t = translations[locale];

  const [slide, setSlide] = useState(0);
  const next  = () => setSlide(s => (s + 1) % heroSlides.length);
  const prev  = () => setSlide(s => (s === 0 ? heroSlides.length - 1 : s - 1));

  useEffect(() => {
    const iv = setInterval(next, 5000);
    return () => clearInterval(iv);
  }, []);

  return (
    <div className={styles.container}>
      {/* Hero */}
      <div className={styles.heroSlider}>
        {heroSlides.map((s, i) => (
          <div key={i} className={`${styles.heroSlide} ${i === slide ? styles.active : ""}`}>
            <Image src={s.image} alt={s[locale].title} fill className={styles.heroImage} priority />
            <div className={styles.heroOverlay}>
              <h2 className={styles.heroTitle}>{s[locale].title}</h2>
              <Link href={s[locale].link}>
                <button className={styles.heroButton}>{s[locale].button}</button>
              </Link>
            </div>
          </div>
        ))}
        <button className={styles.prev} onClick={prev}>&#10094;</button>
        <button className={styles.next} onClick={next}>&#10095;</button>
      </div>

      {/* Main Grid */}
      <div className={styles.mainContent}>
        {/* Welcome */}
        <section className={styles.welcome}>
          <h2 className={styles.sectionTitle}>{t.welcome.title}</h2>
          {t.welcome.lines.map((l, idx) => (
            <p key={idx} className={styles.text}>{l}</p>
          ))}
        </section>

        {/* Misión + Visión */}
        <div className={styles.missionVision}>
          {[t.mission, t.vision].map((block, i) => (
            <div key={i} className={styles.card}>
              <Image
                src={i === 0 ? imgMission : imgVision}
                alt={block.title}
                fill
                className={styles.cardImg}
              />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{block.title}</h3>
                <p className={styles.text}>{block.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Valores */}
        <section className={styles.values}>
          <h2 className={styles.sectionTitle}>{t.values.title}</h2>
          <div className={styles.valuesList}>
            {t.values.list.map((val, i) => (
              <div key={i} className={styles.valueItem}>
                <FaStar className={styles.icon} />
                <span className={styles.text}>{val}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Tiempo y Contacto */}
        <section className={styles.sideInfo}>
          <div className={styles.time}>
            <h2 className={styles.sectionTitle}>{t.time.title}</h2>
            <ul className={styles.textList}>
              {t.time.items.map((it, i) => (
                <li key={i} className={styles.text}>{it}</li>
              ))}
            </ul>
          </div>
          <div className={styles.contact}>
            <h2 className={styles.sectionTitle}>{t.contact.title}</h2>
            <ul className={styles.textList}>
              {t.contact.methods.map((m, i) => (
                <li key={i} className={styles.text}>{m}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Weather */}
        <section className={styles.weather}>
          <h2 className={styles.sectionTitle}>{t.weather.title}</h2>
          {t.weather.paragraphs.map((p, i) => (
            <p key={i} className={styles.text}>{p}</p>
          ))}
        </section>

        {/* Why Book */}
        <section className={styles.whyBook}>
          <h2 className={styles.sectionTitle}>{t.why.title}</h2>
          <ul className={styles.bulletList}>
            {t.why.bullets.map((b, i) => (
              <li key={i} className={styles.text}>• {b}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
);
}
