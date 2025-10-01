import styles from './page.module.css';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"; // ✅ import icons

export default function ContactUs() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Contact Us</h1>

        {/* Contact Info Section */}
        <div className={styles.infoGrid}>
          <div className={styles.infoItem}>
            <h3>Address</h3>
            <p>
              Prathamesh Horizon, Bus Stop, New Link Rd, near Don Bosco School, opp. Rameshwar Bank, New MHB Colony, Ashtavinayak Nagar, Borivali West, Mumbai, Maharashtra 400091
            </p>
          </div>

          <div className={styles.infoItem}>
            <h3>Phone</h3>
            <p>9920310335</p>
          </div>

          <div className={styles.infoItem}>
            <h3>Email</h3>
            <p><a href="mailto:info@rameshwarbank.com">rcbborivali@gmail.com</a></p>
          </div>

          <div className={styles.infoItem}>
            <h3>Bank Timings</h3>
            <p>
              Morning: 10:00 AM - 1:30 PM<br />
              Afternoon: 3:00 PM - 6:00 PM<br />
              Bank remains closed on 2nd & 4th Saturday
            </p>
          </div>

          <div className={styles.infoItem}>
            <h3>Follow Us</h3>
            <div className={styles.socialLinks}>
              <Link href="https://facebook.com" target="_blank">
                <Facebook size={24} />
              </Link>
              <Link href="https://twitter.com" target="_blank">
                <Twitter size={24} />
              </Link>
              <Link href="https://instagram.com" target="_blank">
                <Instagram size={24} />
              </Link>
              <Link href="https://linkedin.com" target="_blank">
                <Linkedin size={24} />
              </Link>
            </div>
          </div>
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
