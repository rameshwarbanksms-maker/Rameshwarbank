import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <div className={styles.logoSection}>
              
              <div className={styles.logoText}>
                <h2>Rameshwar Co-operative Bank Ltd.</h2>
                <p>Your Development Partner</p>
              </div>
            </div>
            <p className={styles.description}>
              Leading cooperative bank committed to providing comprehensive banking solutions 
              with personalized service and innovative financial products.
            </p>
            <div className={styles.contactItem}>
              <Phone size={16} />
              <span>99203 10335</span>
            </div>
            <div className={styles.contactItem}>
              <Mail size={16} />
              <span>rcbborivali@rameshwarbank.com</span>
            </div>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              <li><Link href="/about/overview">About Us</Link></li>
              <li><Link href="/branch-locator">Branch Locator</Link></li>
              <li><Link href="/customer-grievance">Customer Grievance</Link></li>
              <li><Link href="/downloads/annual-reports">Annual Reports</Link></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Banking Services</h4>
            <ul className={styles.linkList}>
              <li><Link href="/accounts/savings">Savings Account</Link></li>
              <li><Link href="/loans/housing">Housing Loan</Link></li>
              <li><Link href="/loans/education">Education Loan</Link></li>
              <li><Link href="/deposits/fixed">Fixed Deposits</Link></li>
              <li><Link href="/deposits/recurring">Recurring Deposits</Link></li>
              
             
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Contact Info</h4>
            <div className={styles.contactItem}>
              <MapPin size={70} />
              <span>RAMESHWAR CO-OP BANK LTD, GROUND FLOOR, BELOW SAILEE HOSPITAL, NEW MHB LINK ROAD, NEW LINK ROAD, BORIVALI WEST, MUMBAI - 400092</span>
            </div>
            <div className={styles.contactItem}>
              <Clock size={26} />
              <span>Morning : 10:00 AM - 1:30 PM<br />Afternoon: 3:00 pm - 6:00 PM <br/>Bank remain closed on the 2nd and 4th Saturday of every month</span>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.bottomContent}>
            <p>&copy; 2025 Rameshwar Co-op Bank Ltd. All rights reserved.</p>
            <div className={styles.bottomLinks}>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms-conditions">Terms & Conditions</Link>
              <Link href="/disclaimer">Disclaimer</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}