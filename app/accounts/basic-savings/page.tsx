import { PiggyBank, Users, Shield, Clock } from 'lucide-react';
import Link from 'next/link';
import styles from '../accounts.module.css';

export default function BasicSavingsAccount() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.iconContainer}>
            <Users size={60} />
          </div>
          <h1 className={styles.title}>Basic Savings Account</h1>
          <p className={styles.subtitle}>Simple banking for everyone</p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.section}>
          <h2>Account Overview</h2>
          <p className={styles.overview}>
            Basic Savings Account is designed for customers who need simple banking services 
            with minimal documentation and no frills. Perfect for first-time account holders 
            and those seeking basic banking facilities.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Key Highlights</h2>
          <div className={styles.featuresList}>
            <div className={styles.feature}>
              <Users className={styles.featureIcon} />
              <div>
                <h3>No Minimum Balance</h3>
                <p>Zero minimum balance requirement - perfect for everyone</p>
              </div>
            </div>
            <div className={styles.feature}>
              <Shield className={styles.featureIcon} />
              <div>
                <h3>Minimal Documentation</h3>
                <p>Simple account opening process with basic documents</p>
              </div>
            </div>
            <div className={styles.feature}>
              <Clock className={styles.featureIcon} />
              <div>
                <h3>Quick Processing</h3>
                <p>Account opened within 24 hours of document submission</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2>Account Benefits</h2>
          <div className={styles.benefitsList}>
            <div className={styles.benefit}>Zero minimum balance requirement</div>
            <div className={styles.benefit}>Free debit card</div>
            <div className={styles.benefit}>4 free ATM transactions per month</div>
            <div className={styles.benefit}>SMS alerts for transactions</div>
            <div className={styles.benefit}>Basic internet banking facility</div>
            <div className={styles.benefit}>Passbook facility available</div>
          </div>
        </div>

        <div className={styles.section}>
          <h2>Eligibility Criteria</h2>
          <div className={styles.requirements}>
            <div className={styles.reqSection}>
              <h3>Who Can Apply</h3>
              <ul>
                <li>Individual aged 18 years and above</li>
                <li>Indian residents only</li>
                <li>Students and first-time account holders</li>
                <li>Low-income group individuals</li>
              </ul>
            </div>
            <div className={styles.reqSection}>
              <h3>Income Requirements</h3>
              <ul>
                <li>Annual income up to ₹2 lakh</li>
                <li>No income proof required</li>
                <li>Self-declaration acceptable</li>
                <li>Students exempt from income criteria</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2>Documents Required</h2>
          <div className={styles.docCategories}>
            <div className={styles.docCategory}>
              <h3>Identity Proof (Any One)</h3>
              <ul>
                <li>Aadhaar Card</li>
                <li>PAN Card</li>
                <li>Voter ID Card</li>
                <li>Driving License</li>
              </ul>
            </div>
            <div className={styles.docCategory}>
              <h3>Address Proof (Any One)</h3>
              <ul>
                <li>Aadhaar Card</li>
                <li>Utility Bills (3 months old)</li>
                <li>Rent Agreement</li>
                <li>Bank Statement</li>
              </ul>
            </div>
            <div className={styles.docCategory}>
              <h3>Additional Requirements</h3>
              <ul>
                <li>2 passport size photographs</li>
                <li>Initial deposit ₹100</li>
                <li>Self-declaration form</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2>Other Account Options</h2>
          <div className={styles.relatedAccounts}>
            <Link href="/accounts/savings" className={styles.accountCard}>
              <img 
                src="https://images.pexels.com/photos/1602726/pexels-photo-1602726.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Savings Account"
                className={styles.accountImage}
              />
              <div className={styles.accountInfo}>
                <h3>Savings Account</h3>
                <p>Save money to invest in the future</p>
              </div>
            </Link>
            <Link href="/accounts/smart-kid" className={styles.accountCard}>
              <img 
                src="https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Smart Kid Account"
                className={styles.accountImage}
              />
              <div className={styles.accountInfo}>
                <h3>Smart Kid Account</h3>
                <p>Teaching kids the value of saving</p>
              </div>
            </Link>
            <Link href="/accounts/current" className={styles.accountCard}>
              <img 
                src="https://images.pexels.com/photos/4386173/pexels-photo-4386173.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Current Account"
                className={styles.accountImage}
              />
              <div className={styles.accountInfo}>
                <h3>Current Account</h3>
                <p>Smooth transactions for your business</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}