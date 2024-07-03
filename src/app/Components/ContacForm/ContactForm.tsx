"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import styles from "@/Components/ContacForm/ContactForm.module.css";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className={styles.contactForm}>
      <h2 className={styles.title}>Contacto</h2>
      {submitted ? (
        <p>¡Mensaje enviado con éxito!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Jose Arias"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email@example.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Mensaje:</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder=" escriba su consulta..."
              required
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
      )}
    </section>
  );
};

export default ContactForm;
