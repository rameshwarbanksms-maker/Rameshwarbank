'use client';

import { useEffect, useState } from 'react';
import styles from './AwardsSection.module.css';

const awards = [
  "Over 12 awards won in last 5 years",
  "As Financially Sound and Well Managed Bank",
  "Best Cooperative Bank Award 2023",
  "Excellence in Digital Banking"
];

export default function AwardsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % awards.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.awards}>
      <div className={styles.scrollingText}>
        <div className={styles.textContent}>
          {awards[currentIndex]}
        </div>
      </div>
    </section>
  );
}