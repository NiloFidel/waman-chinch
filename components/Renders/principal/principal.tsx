"use client";
import React, { useState, useMemo } from "react";
import styles from "./principal.module.css";
import {translations} from "@/lib/i20n"

export interface Block {
  subtitle: string;
  items: string[];
}

export interface TripOverview {
  title: string;
  paragraphs: string[];
  highlights: string[];
}

export interface Itinerary {
  title: string;
  steps: string[];
}

export interface Details {
  title: string;
  rows: { label: string; value: string }[];
}

export interface SectionWithBlocks {
  title: string;
  blocks?: Block[];
  exclusions?: string[];
  schedule?: string[];
  pickupTime?: string;
  serviceNote?: string;
  rates?: { group: string; price: string }[];
  footnote?: string;
}

export interface PrincipalProps {
  tripOverview: TripOverview;
  itinerary: Itinerary;
  details: Details;
  incluye: SectionWithBlocks;
  queLlevar: SectionWithBlocks;
  fechasSalida: SectionWithBlocks;
  precios: SectionWithBlocks;
  locale: string;
}

export type TabKey =
  | "resumen"
  | "itinerario"
  | "detalles"
  | "incluye"
  | "queLlevar"
  | "fechasSalida"
  | "precios";

const TAB_ORDER: { key: TabKey; label: string }[] = [
  { key: "resumen", label: "Resumen" },
  { key: "itinerario", label: "Itinerario" },
  { key: "detalles", label: "Detalles" },
  { key: "incluye", label: "Incluye" },
  { key: "queLlevar", label: "Qué llevar" },
  { key: "fechasSalida", label: "Fechas de salida" },
  { key: "precios", label: "Precios" },
];

export default function Principal({
  tripOverview,
  itinerary,
  details,
  incluye,
  queLlevar,
  fechasSalida,
  precios,
  locale
}: PrincipalProps) {
  const [activeTab, setActiveTab] = useState<TabKey>("resumen");
  // Selecciona las traducciones según el locale
  const t = translations[locale as keyof typeof translations] || translations.es;
  const renderContent = useMemo(() => {
    switch (activeTab) {
      case "resumen":
        return (
          <div>
            {tripOverview.paragraphs.length ? (
              tripOverview.paragraphs.map((p, i) => (
                <p key={i} className={styles.paragraph}>
                  {p}
                </p>
              ))
            ) : (
              <p className={styles.placeholder}>No hay información disponible.</p>
            )}
            {tripOverview.highlights.length > 0 && (
              <ul className={styles.highlightList}>
                {tripOverview.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            )}
          </div>
        );
      case "itinerario":
        return (
          <ol className={styles.orderedList}>
            {itinerary.steps.length ? (
              itinerary.steps.map((step, i) => <li key={i}>{step}</li>)
            ) : (
              <li className={styles.placeholder}>No hay pasos definidos.</li>
            )}
          </ol>
        );
      case "detalles":
        return details.rows.length ? (
          <table className={styles.table}>
            <tbody>
              {details.rows.map((row, i) => (
                <tr key={i}>
                  <th className={styles.th}>{row.label}</th>
                  <td className={styles.td}>{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className={styles.placeholder}>No se encontraron detalles.</p>
        );
      case "incluye":
        return (
          <div>
            {incluye.blocks && incluye.blocks.length > 0 ? (
              incluye.blocks.map((block) => (
                <div key={block.subtitle} className={styles.block}>
                  <h3 className={styles.subtitle}>{block.subtitle}</h3>
                  <ul className={styles.list}>
                    {block.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))
            ) : (
              <p className={styles.placeholder}>No hay información de inclusión.</p>
            )}
            {incluye.exclusions && incluye.exclusions.length > 0 && (
              <div className={styles.block}>
                <h3 className={styles.subtitle}>No incluye</h3>
                <ul className={styles.list}>
                  {incluye.exclusions.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      case "queLlevar":
        return queLlevar.blocks && queLlevar.blocks.length ? (
          <div>
            {queLlevar.blocks.map((block) => (
              <div key={block.subtitle} className={styles.block}>
                <h3 className={styles.subtitle}>{block.subtitle}</h3>
                <ul className={styles.list}>
                  {block.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <p className={styles.placeholder}>No se especifica qué llevar.</p>
        );
      case "fechasSalida":
        return (
          <div>
            {fechasSalida.schedule && fechasSalida.schedule.length > 0 ? (
              <ul className={styles.list}>
                {fechasSalida.schedule.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            ) : (
              <p className={styles.placeholder}>No hay fechas de salida definidas.</p>
            )}
            {fechasSalida.pickupTime && (
              <p className={styles.paragraph}>
                <strong>Pickup:</strong> {fechasSalida.pickupTime}
              </p>
            )}
          </div>
        );
      case "precios":
        return (
          <div>
            {precios.serviceNote && (
              <p className={styles.paragraph}>{precios.serviceNote}</p>
            )}
            {precios.rates && precios.rates.length > 0 ? (
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th className={styles.th}>{t.grupo}</th>
                    <th className={styles.th}>{t.precio}</th>
                  </tr>
                </thead>
                <tbody>
                  {precios.rates.map((r, i) => (
                    <tr key={i}>
                      <td className={styles.td}>{r.group}</td>
                      <td className={styles.td}>{r.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className={styles.placeholder}>No se han definido tarifas.</p>
            )}
            {precios.footnote && (
              <p className={styles.paragraph}>{precios.footnote}</p>
            )}
          </div>
        );
      default:
        return null;
    }
  }, [activeTab, tripOverview, itinerary, details, incluye, queLlevar, fechasSalida, precios, t.grupo,t.precio,]);

  return (
    <div className={styles.container}>
      <nav className={styles.tabNav} role="tablist" aria-label="Navegación de Secciones">
        {TAB_ORDER.map(({ key }) => {
          const isActive = activeTab === key;
          return (
            <button
              key={key}
              id={`tab-${key}`}
              role="tab"
              aria-selected={isActive}
              aria-controls={`tabpanel-${key}`}
              tabIndex={isActive ? 0 : -1}
              className={`${styles.tabButton} ${isActive ? styles.activeTab : ""}`}
              onClick={() => setActiveTab(key)}
            >
              {t[key]}
            </button>
          );
        })}
      </nav>
      <div
        id={`tabpanel-${activeTab}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeTab}`}
        className={styles.tabContent}
      >
        <h2 className={styles.sectionTitle}>
          {t[activeTab]}
        </h2>
        {renderContent}
      </div>
    </div>
  );
}
