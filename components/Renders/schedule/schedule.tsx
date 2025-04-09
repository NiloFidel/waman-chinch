"use client";
import React from "react";
import { useRouter } from "next/navigation";
import styles from "./schedule.module.css";

// Lista de días (puedes ajustar o generar dinámicamente según tus necesidades)
const days = [
  { id: 1, label: "Día 1" },
  { id: 2, label: "Día 2" },
  { id: 3, label: "Día 3" },
  { id: 4, label: "Día 4" },
  { id: 5, label: "Día 5" },
];

const Schedule: React.FC = () => {
  const router = useRouter();

  const handleDayClick = (dayId: number) => {
    // Si deseas enviar el día seleccionado como query, puedes hacerlo:
    // router.push(`/pasarela/pagos?day=${dayId}`);
    // En este ejemplo redirigimos directamente:
    console.log(dayId);
    router.push("/pasarela/pagos");
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Selecciona un día</h2>
      <ul className={styles.dayList}>
        {days.map((day) => (
          <li
            key={day.id}
            className={styles.dayItem}
            onClick={() => handleDayClick(day.id)}
          >
            {day.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Schedule;
