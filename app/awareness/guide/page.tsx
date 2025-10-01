"use client";
import { Home } from "lucide-react";
import styles from "./page.module.css";

export default function RbiGuidelines() {
  // Placeholder YouTube videos
  const videos = [
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "https://www.youtube.com/embed/3JZ_D3ELwOQ",
    "https://www.youtube.com/embed/L_jWHffIx5E",
    "https://www.youtube.com/embed/oHg5SJYRHA0",
    "https://www.youtube.com/embed/tVj0ZTS4WF4",
    "https://www.youtube.com/embed/eY52Zsg-KVI",
  ];

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <Home size={60} color="rgb(219,6,24)" />
        <div className={styles.heroContent}>
          <h1 className={styles.title}>RBI Guidelines</h1>
          <p className={styles.subtitle}>
            Do not fall prey to fictitious offers of funds transfer. RBI Advisory.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.content}>
        <section className={styles.section}>
          <h2>Important RBI Advisory</h2>
          <p>
            The Reserve Bank advised banks on Feb 06, 2012, to exercise due caution and to be extra vigilant concerning the fictitious offers whereby bank accounts are opened and/or transactions made in the accounts for receiving payments styled as transaction charges, prize money/award money, etc.
          </p>
          <p><strong>RBI Kehta Hai:</strong> Always verify sources before transferring money or sharing banking credentials.</p>
        </section>

        {/* Embedded YouTube Videos */}
        <section className={styles.section}>
          <h2>Watch Videos</h2>
          <div className={styles.videoGrid}>
            {videos.map((url, idx) => (
              <div key={idx} className={styles.videoContainer}>
                <iframe
                  src={url}
                  title={`RBI Guideline Video ${idx + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
