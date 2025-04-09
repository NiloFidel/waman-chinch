"use client";
import React, { useState } from "react";
import styles from "./itinerario.module.css";
import { FaChevronDown, FaHandPointRight } from "react-icons/fa";

interface Step {
  /*iconType: string;*/
  text: string;
}

interface ItinerarySummaryDay {
  title: string;
  steps: Step[];
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

interface ItinerarioProps {
  itinerary: ItineraryItem[];
  itinerarySummary: ItinerarySummary;
}

const Itinerario: React.FC<ItinerarioProps> = ({ itinerary, itinerarySummary }) => {
  const [openAccordions, setOpenAccordions] = useState<number[]>([]);

  const toggleAccordion = (index: number) => {
    setOpenAccordions(prev =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className={styles.itinerarioContainer}>
      <h2 className={styles.summaryTitle}>{itinerarySummary.title}</h2>
      <div className={styles.timeline}>
        {itinerarySummary.days.map((day, idx) => (
          <div key={idx} className={styles.timelineDay}>
            <h3 className={styles.dayTitle}>{day.title}</h3>
            {day.steps.map((step, sIdx) => (
              <div key={sIdx} className={styles.step}>
                <FaHandPointRight className={styles.icon} />
                <span>{step.text}</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className={styles.accordion}>
        {itinerary.map((item, index) => (
          <div key={index} className={styles.accordionItem}>
            <button
              className={styles.accordionHeader}
              onClick={() => toggleAccordion(index)}
              aria-expanded={openAccordions.includes(index)}
            >
              <span>{item.title}</span>
              <FaChevronDown
                className={
                  openAccordions.includes(index)
                    ? `${styles.arrow} ${styles.open}`
                    : styles.arrow
                }
              />
            </button>
            <div
              className={styles.accordionContent}
              style={{
                maxHeight: openAccordions.includes(index) ? "500px" : "0px",
              }}
            >
              <div className={styles.itemText}>{item.text}</div>
              {item.services && item.services.length > 0 && (
                <ul className={styles.servicesList}>
                  {item.services.map((service, i) => (
                    <li key={i}>{service}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Itinerario;
