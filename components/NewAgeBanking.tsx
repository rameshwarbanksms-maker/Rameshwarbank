import { CreditCard, Smartphone, Shield, Zap } from 'lucide-react';
import styles from './NewAgeBanking.module.css';

const features = [
  {
    icon: CreditCard,
    title: "1. IMPS & UPI",
    description: "Go digital with IMPS & UPI."
  },
  {
    icon: Smartphone,
    title: "2. Internet Banking",
    description: "Banking at your fingertips with secure online access."
  },
  {
    icon: Shield,
    title: "3. Debit Cards",
    description: "Secure transactions with EMV chip technology."
  },
  {
    icon: Zap,
    title: "4. ATM Service",
    description: "24/7 ATM services across multiple locations."
  }
];

export default function NewAgeBanking() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <img 
            src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=600" 
            alt="Happy customer with banking cards"
            className={styles.customerImage}
          />
        </div>

        <div className={styles.centerContent}>
          <h2 className={styles.title}>Comming soon...</h2>
          <p className={styles.subtitle}>Staying smarter, together.</p>
          
          <div className={styles.featuresList}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <feature.icon size={20} />
                </div>
                <div className={styles.featureContent}>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDesc}>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.rightContent}>
          <div className={styles.imageGrid}>
            <img 
              src="https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=400" 
              alt="Digital banking"
              className={styles.gridImage}
            />
            <img 
              src="https://images.pexels.com/photos/4386173/pexels-photo-4386173.jpeg?auto=compress&cs=tinysrgb&w=400" 
              alt="Mobile banking"
              className={styles.gridImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}