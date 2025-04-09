"use client"

import React, { useState } from "react";
import styles from "./contact.module.css";

interface FormData {
  full_name: string;
  nacionality: string;
  email: string;
  cellphone: string;
  startDate: string;
  adults: string;
  childs: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    full_name: "",
    nacionality: "",
    email: "",
    cellphone: "",
    startDate: "",
    adults: "",
    childs: "",
    message: "",
  });

  const [status, setStatus] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Enviando...");
    try {
      const response = await fetch("https://8hhans2hac.execute-api.us-east-1.amazonaws.com/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        setStatus("¡Mensaje enviado correctamente!");
        setFormData({
          full_name: "",
          nacionality: "",
          email: "",
          cellphone: "",
          startDate: "",
          adults: "",
          childs: "",
          message: "",
        });
      } else {
        setStatus(`Error: ${data.error}`);
      }
    } catch (error) {
      console.log(error)
      setStatus("Error al enviar el mensaje. Por favor, inténtalo de nuevo.");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contáctanos</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="full_name">Nombre completo</label>
          <input
            type="text"
            id="full_name"
            name="full_name"
            value={formData.full_name}
            onChange={handleChange}
            placeholder="Ingresa tu nombre completo"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="nacionality">Nacionalidad</label>
          <input
            type="text"
            id="nacionality"
            name="nacionality"
            value={formData.nacionality}
            onChange={handleChange}
            placeholder="Ingresa tu nacionalidad"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Ingresa tu correo electrónico"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="cellphone">Teléfono</label>
          <input
            type="text"
            id="cellphone"
            name="cellphone"
            value={formData.cellphone}
            onChange={handleChange}
            placeholder="Ingresa tu teléfono"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="startDate">Fecha de inicio</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="adults">Adultos</label>
          <input
            type="number"
            id="adults"
            name="adults"
            value={formData.adults}
            onChange={handleChange}
            placeholder="Número de adultos"
            required
            min="1"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="childs">Niños</label>
          <input
            type="number"
            id="childs"
            name="childs"
            value={formData.childs}
            onChange={handleChange}
            placeholder="Número de niños"
            required
            min="0"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Escribe tu mensaje"
            required
            rows={5}
          ></textarea>
        </div>
        <button type="submit" className={styles.submitButton}>
          Enviar mensaje
        </button>
        {status && <p className={styles.status}>{status}</p>}
      </form>
    </div>
  );
};

export default Contact;
