import styles from './page.module.css';

export default function AboutOverview() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>About Rameshwar Co-operative Bank Ltd.</h1>
        
        <div className={styles.intro}>
          <p className={styles.highlight}>
            Rameshwar Co-operative Bank Ltd. has been serving the community for over two decades, 
            providing comprehensive banking solutions with a personal touch.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Our Vision</h2>
          <p>
            To be the leading cooperative bank in the region, known for our commitment to 
            customer service, financial innovation, and community development.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Our Mission</h2>
          <p>
            To provide accessible, reliable, and innovative banking services that empower 
            individuals and businesses to achieve their financial goals while contributing 
            to the socio-economic development of our communities.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Our Values</h2>
          <div className={styles.valuesList}>
            <div className={styles.valueItem}>
              <h3>Trust</h3>
              <p>Building lasting relationships through transparency and integrity.</p>
            </div>
            <div className={styles.valueItem}>
              <h3>Innovation</h3>
              <p>Embracing technology to provide cutting-edge banking solutions.</p>
            </div>
            <div className={styles.valueItem}>
              <h3>Excellence</h3>
              <p>Delivering superior service quality in all our endeavors.</p>
            </div>
            <div className={styles.valueItem}>
              <h3>Community</h3>
              <p>Contributing to the growth and development of our local communities.</p>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2>Our Journey</h2>
          <p>
            Established in 2000 with the vision of providing accessible banking services to all 
            segments of society, Rameshwar Co-operative Bank Ltd. has grown from a small community 
            bank to a respected financial institution, offering a wide range 
            of products and services.
          </p>
        </div>
      </div>
    </div>
  );
}