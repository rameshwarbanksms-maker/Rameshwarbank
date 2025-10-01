"use client"; // ✅ required if using App Router with useState

import { useState } from "react";
import styles from './page.module.css';
import { Mail, Phone, MapPin } from "lucide-react";

export default function CustomerGrievancesPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/customer-grievance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok) {
        alert("Grievance submitted successfully!");
        e.currentTarget.reset();
      } else {
        alert("Error: " + result.error);
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Customer Grievances</h1>
        <p className={styles.subtitle}>
          We value your feedback. Please share your grievances or queries and we will get back to you promptly.
        </p>

        {/* Contact Info Section */}
        <div className={styles.infoGrid}>
          <div className={styles.infoItem}>
            <MapPin size={42} />
            <p>
              Prathamesh Horizon, New Link Rd, near Don Bosco School, Borivali West, Mumbai, Maharashtra 400091
            </p>
          </div>

          <div className={styles.infoItem}>
            <Phone size={22} />
            <p>+91 9920310335</p>
          </div>

          <div className={styles.infoItem}>
            <Mail size={22} />
            <p><a href="mailto:rcbborivali@gmail.com">rcbborivali@gmail.com</a></p>
          </div>
        </div>

        {/* Grievance Form */}
        <div className={styles.formSection}>
          <h2>Submit Your Grievance</h2>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <input type="tel" name="phone" placeholder="Your Phone" required />
            <input type="text" name="subject" placeholder="Subject" required />
            <textarea 
              name="message" 
              placeholder="Your Grievance" 
              rows={5} 
              required
            ></textarea>

            <button type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>

        {/* Map Section */}
        <div className={styles.mapSection}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230525.2895188611!2d72.8107340107263!3d19.19722355031597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b12e33cec11d%3A0xad1ba4d8a63fae50!2sRameshwar%20Co-Operative%20Bank%20Limited!5e0!3m2!1sen!2sin!4v1758716276898!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
