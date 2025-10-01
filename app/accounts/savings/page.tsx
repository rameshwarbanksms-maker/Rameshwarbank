import { PiggyBank, Star, Shield, Smartphone } from 'lucide-react';
import Link from 'next/link';
import styles from '../accounts.module.css';

export default function SavingsAccount() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.iconContainer}>
            <PiggyBank size={60} />
          </div>
          <h1 className={styles.title}>Savings Account</h1>
          <p className={styles.subtitle}>Save money to invest in the future</p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.section}>
          <h2>Account Overview</h2>
          <p className={styles.overview}>
            Our Savings Account is designed to help you build your financial future with attractive 
            interest rates and flexible banking options. Perfect for individuals looking to save 
            money while maintaining easy access to their funds.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Key Highlights</h2>
          <div className={styles.featuresList}>
            <div className={styles.feature}>
              <Star className={styles.featureIcon} />
              <div>
                <h3>Attractive Interest Rates</h3>
                <p>Earn up to 3.5% per annum on your savings with quarterly compounding</p>
              </div>
            </div>
            <div className={styles.feature}>
              <Shield className={styles.featureIcon} />
              <div>
                <h3>Secure Banking</h3>
                <p>Your deposits are insured and protected with advanced security measures</p>
              </div>
            </div>
            <div className={styles.feature}>
              <Smartphone className={styles.featureIcon} />
              <div>
                <h3>Digital Access</h3>
                <p>24/7 online banking, mobile app, and UPI services for convenient transactions</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2>Account Benefits</h2>
          <div className={styles.benefitsList}>
            <div className={styles.benefit}>No minimum balance requirement for first 6 months</div>
            <div className={styles.benefit}>Free debit card with international access</div>
            <div className={styles.benefit}>Unlimited ATM transactions at our network</div>
            <div className={styles.benefit}>SMS and email alerts for all transactions</div>
            <div className={styles.benefit}>Doorstep banking services available</div>
            <div className={styles.benefit}>Priority customer service support</div>
          </div>
        </div>

        <div className={styles.section}>
          <h2>Eligibility Criteria</h2>
          <div className={styles.requirements}>
            <div className={styles.reqSection}>
              <h3>Who Can Apply</h3>
              <ul>
                <li>Individual aged 18 years and above</li>
                <li>Valid Indian citizenship or NRI status</li>
                <li>Joint accounts allowed with family members</li>
                <li>Minor accounts with guardian</li>
              </ul>
            </div>
            <div className={styles.reqSection}>
              <h3>Income Requirements</h3>
              <ul>
                <li>No minimum income requirement</li>
                <li>Students and homemakers eligible</li>
                <li>Pensioners welcome</li>
                <li>Self-employed individuals eligible</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2>Documents Required</h2>
          <div className={styles.docCategories}>
            <div className={styles.docCategory}>
              <h3>Identity Proof</h3>
              <ul>
                <li>Aadhaar Card</li>
                <li>PAN Card</li>
                <li>Passport</li>
                <li>Driving License</li>
                <li>Voter ID Card</li>
              </ul>
            </div>
            <div className={styles.docCategory}>
              <h3>Address Proof</h3>
              <ul>
                <li>Utility Bills (not older than 3 months)</li>
                <li>Bank Statement</li>
                <li>Rent Agreement</li>
                <li>Property Documents</li>
                <li>Employer Certificate</li>
              </ul>
            </div>
            <div className={styles.docCategory}>
              <h3>Additional Documents</h3>
              <ul>
                <li>Recent passport size photographs</li>
                <li>Initial deposit amount</li>
                <li>Form 16 (if applicable)</li>
                <li>Salary Certificate (if employed)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2>Other Account Options</h2>
          <div className={styles.relatedAccounts}>
            <Link href="/accounts/current" className={styles.accountCard}>
              <img 
                src="https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Current Account"
                className={styles.accountImage}
              />
              <div className={styles.accountInfo}>
                <h3>Current Account</h3>
                <p>Smooth transactions for your business</p>
              </div>
            </Link>
            <Link href="/accounts/smart-kid" className={styles.accountCard}>
              <img 
                src="https://images.pexels.com/photos/1602726/pexels-photo-1602726.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Smart Kid Account"
                className={styles.accountImage}
              />
              <div className={styles.accountInfo}>
                <h3>Smart Kid Account</h3>
                <p>Teaching kids the value of saving</p>
              </div>
            </Link>
            <Link href="/accounts/basic-savings" className={styles.accountCard}>
              <img 
                src="https://images.pexels.com/photos/4386173/pexels-photo-4386173.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Basic Savings Account"
                className={styles.accountImage}
              />
              <div className={styles.accountInfo}>
                <h3>Basic Savings Account</h3>
                <p>Simple banking for everyone</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}