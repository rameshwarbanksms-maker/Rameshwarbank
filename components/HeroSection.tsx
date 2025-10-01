'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './HeroSection.module.css';

const slides = [
  {
    title: "Online Fees Collection",
    subtitle: "Model leads the way",
    description: "A boon to educational institutions, students can pay fees using net banking, debit card, credit card any digital mode of transaction or any UPI payment system.",
    image: "https://images.pexels.com/photos/5185/people-office-group-team.jpg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    title: "Digital Banking Solutions",
    subtitle: "Banking made simple",
    description: "Experience seamless banking with our comprehensive digital solutions designed for modern financial needs.",
    image: "https://images.pexels.com/photos/4792728/pexels-photo-4792728.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    title: "Secure & Reliable",
    subtitle: "Your trust, our priority",
    description: "Advanced security measures and reliable banking services that you can count on for all your financial requirements.",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.slideContainer}>
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className={styles.overlay}></div>
            <div className={styles.content}>
              <h1 className={styles.title}>
                <span className={styles.highlight}>{slide.title}</span>
                <br />
                {slide.subtitle}
              </h1>
              <p className={styles.description}>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button className={styles.navButton} onClick={prevSlide}>
        <ChevronLeft size={24} />
      </button>
      <button className={`${styles.navButton} ${styles.next}`} onClick={nextSlide}>
        <ChevronRight size={24} />
      </button>

      <div className={styles.indicators}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${index === currentSlide ? styles.activeIndicator : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}