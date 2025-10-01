import { PiggyBank, CreditCard, Clock, Home, TrendingUp, Car, GraduationCap } from 'lucide-react';
import styles from './ServicesGrid.module.css';

const services = [
  {
    icon: PiggyBank,
    title: "Saving Account",
    description: "Save money to invest in the future.",
    color: "#E3F2FD",
    link: "/accounts/savings"
  },
  {
    icon: CreditCard,
    title: "Current Account",
    description: "Smooth transactions for your business.",
    color: "#F3E5F5",
    link: "/accounts/current"
  },
  {
    icon: Clock,
    title: "Fixed Deposits",
    description: "Invest money to secure tomorrow.",
    color: "#FFF3E0",
    link: "/deposits/fixed"
  },
  {
    icon: Home,
    title: "Housing Loan",
    description: "Let us help you get your home today.",
    color: "#FFF3E0",
    link: "/loans/housing"
  },
  {
    icon: TrendingUp,
    title: "Business Loan",
    description: "For every business need & growth.",
    color: "#F3E5F5",
    highlighted: true,
    link: "/loans/business"
  },
  {
    icon: Car,
    title: "Vehicle Loan",
    description: "Helps to give wheels to your dream.",
    color: "#E3F2FD",
    link: "/loans/vehicle"
  },
  {
    icon: GraduationCap,
    title: "Educational Loan",
    description: "It is more about dreams than money.",
    color: "#E8F5E8",
    link: "/loans/education"
  }
];

export default function ServicesGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <a 
              key={index}
              href={service.link} 
              className={`${styles.serviceCard} ${service.highlighted ? styles.highlighted : ''}`}
              style={{ backgroundColor: service.color }}
            >
              <div className={styles.iconContainer}>
                <service.icon size={24} color="#8B4B6B" />
              </div>
              <h3 className={styles.title}>{service.title}</h3>
              <p className={styles.description}>{service.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
