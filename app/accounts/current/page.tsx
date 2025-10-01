import { CreditCard, TrendingUp, Shield, Zap } from 'lucide-react';
import Link from 'next/link';
import styles from '../accounts.module.css';

export default function CurrentAccount() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.iconContainer}>
            <CreditCard size={60} />
          </div>
          <h1 className={styles.title}>Current Account</h1>
          <p className={styles.subtitle}>Smooth transactions for your business</p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.section}>
          <h2>Account Overview</h2>
          <p className={styles.overview}>
            Current Account is designed for businesses, entrepreneurs, and professionals who 
            need frequent banking transactions. It offers unlimited transactions, overdraft 
            facilities, and comprehensive business banking solutions.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Key Highlights</h2>
          <div className={styles.featuresList}>
            <div className={styles.feature}>
              <TrendingUp className={styles.featureIcon} />
              <div>
                <h3>Unlimited Transactions</h3>
                <p>No limit on number of transactions - perfect for business operations</p>
              </div>
            </div>
            <div className={styles.feature}>
              <Shield className={styles.featureIcon} />
              <div>
                <h3>Overdraft Facility</h3>
                <p>Access to overdraft facility based on your business requirements</p>
              </div>
            </div>
            <div className={styles.feature}>
              <Zap className={styles.featureIcon} />
              <div>
                <h3>Business Solutions</h3>
                <p>Comprehensive business banking services and cash management solutions</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2>Account Benefits</h2>
          <div className={styles.benefitsList}>
            <div className={styles.benefit}>Unlimited deposit and withdrawal transactions</div>
            <div className={styles.benefit}>Free demand drafts and pay orders</div>
            <div className={styles.benefit}>Priority banking services</div>
            <div className={styles.benefit}>Dedicated relationship manager</div>
            <div className={styles.benefit}>Multi-city cheque collection facility</div>
            <div className={styles.benefit}>Trade finance and forex services</div>
          </div>
        </div>

        <div className={styles.section}>
          <h2>Eligibility Criteria</h2>
          <div className={styles.requirements}>
            <div className={styles.reqSection}>
              <h3>Business Types</h3>
              <ul>
                <li>Sole proprietorship firms</li>
                <li>Partnership firms</li>
                <li>Private limited companies</li>
                <li>Public limited companies</li>
                <li>LLP and other entities</li>
              </ul>
            </div>
            <div className={styles.reqSection}>
              <h3>Requirements</h3>
              <ul>
                <li>Valid business registration</li>
                <li>Minimum average balance ₹10,000</li>
                <li>Business vintage of 1 year</li>
                <li>Satisfactory credit history</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2>Documents Required</h2>
          <div className={styles.docCategories}>
            <div className={styles.docCategory}>
              <h3>Business Documents</h3>
              <ul>
                <li>Business registration certificate</li>
                <li>Partnership deed/MOA & AOA</li>
                <li>GST registration certificate</li>
                <li>Trade license</li>
                <li>PAN card of business</li>
              </ul>
            </div>
            <div className={styles.docCategory}>
              <h3>Authorized Signatory</h3>
              <ul>
                <li>Identity proof (Aadhaar/PAN)</li>
                <li>Address proof</li>
                <li>Board resolution</li>
                <li>Specimen signatures</li>
                <li>Photographs</li>
              </ul>
            </div>
            <div className={styles.docCategory}>
              <h3>Financial Documents</h3>
              <ul>
                <li>Bank statements (6 months)</li>
                <li>ITR for last 2 years</li>
                <li>Financial statements</li>
                <li>Turnover certificates</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2>Other Account Options</h2>
          <div className={styles.relatedAccounts}>
            <Link href="/accounts/corporate" className={styles.accountCard}>
              <img 
                src="https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Corporate Account"
                className={styles.accountImage}
              />
              <div className={styles.accountInfo}>
                <h3>Corporate Account</h3>
                <p>Advanced banking for large enterprises</p>
              </div>
            </Link>
            <Link href="/accounts/salary" className={styles.accountCard}>
              <img 
                src="https://images.pexels.com/photos/1602726/pexels-photo-1602726.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Salary Account"
                className={styles.accountImage}
              />
              <div className={styles.accountInfo}>
                <h3>Salary Account</h3>
                <p>Designed for salaried professionals</p>
              </div>
            </Link>
            <Link href="/accounts/savings" className={styles.accountCard}>
              <img 
                src="https://images.pexels.com/photos/4386173/pexels-photo-4386173.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Savings Account"
                className={styles.accountImage}
              />
              <div className={styles.accountInfo}>
                <h3>Savings Account</h3>
                <p>Save money to invest in the future</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}