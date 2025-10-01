import { TrendingUp, PiggyBank, Heart, Smartphone } from 'lucide-react';
import styles from './ProductsSection.module.css';

const products = [
  {
    icon: TrendingUp,
    image: "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Borrow",
    description: "Different loan schemes and EMI options."
  },
  {
    icon: PiggyBank,
    image: "https://images.pexels.com/photos/1602726/pexels-photo-1602726.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Invest",
    description: "Term deposit at attractive interest rates."
  },
  {
    icon: Heart,
    image: "https://images.pexels.com/photos/1602726/pexels-photo-1602726.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Save",
    description: "Save money with 3% interest rate."
  },
  {
    icon: Smartphone,
    image: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Receive & Pay",
    description: "Hassle-free payment using UPI, IMPS, ECOM, POS."
  }
];

export default function ProductsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Products that meet your goals</h2>
        <div className={styles.grid}>
          {products.map((product, index) => (
            <div key={index} className={styles.productCard}>
              <div className={styles.imageContainer}>
                <img src={product.image} alt={product.title} className={styles.image} />
                <div className={styles.iconOverlay}>
                  <product.icon size={24} />
                </div>
              </div>
              <div className={styles.content}>
                <h3 className={styles.productTitle}>{product.title}</h3>
                <p className={styles.description}>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}