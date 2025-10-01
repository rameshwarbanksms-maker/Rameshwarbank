import { Heart, Gift, Star, Smartphone } from 'lucide-react';
import Link from 'next/link';
import styles from '../accounts.module.css';

export default function SmartKidAccount() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.iconContainer}>
            <Heart size={60} />
          </div>
          <h1 className={styles.title}>Smart Kid Account</h1>
          <p className={styles.subtitle}>Teaching kids the value of saving</p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.section}>
          <h2>Account Overview</h2>
          <p className={styles.overview}>
            Smart Kid Account is specially designed for children to learn the importance of 
            saving money from an early age. This account helps parents teach their children 
            financial discipline while offering attractive benefits and rewards.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Key Highlights</h2>
          <div className={styles.featuresList}>
            <div className={styles.feature}>
              <Gift className={styles.featureIcon} />
              <div>
                <h3>Special Rewards</h3>
                <p>Birthday gifts, educational rewards, and surprise bonuses for regular savings</p>
              </div>
            </div>
            <div className={styles.feature}>
              <Star className={styles.featureIcon} />
              <div>
                <h3>Higher Interest Rate</h3>
                <p>Attractive interest rate of 4% per annum to encourage saving habits</p>
              </div>
            </div>
            <div className={styles.feature}>
              <Smartphone className={styles.featureIcon} />
              <div>
                <h3>Digital Learning</h3>
                <p>Kid-friendly mobile app to track savings and learn about money</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2>Account Benefits</h2>
          <div className={styles.benefitsList}>
            <div className={styles.benefit}>No minimum balance requirement</div>
            <div className={styles.benefit}>Free personalized debit card</div>
            <div className={styles.benefit}>Birthday and festival gifts</div>
            <div className={styles.benefit}>Educational scholarships opportunities</div>
            <div className={styles.benefit}>Parent-controlled spending limits</div>
            <div className={styles.benefit}>Financial literacy workshops</div>
          </div>
        </div>

        <div className={styles.section}>
          <h2>Eligibility Criteria</h2>
          <div className={styles.requirements}>
            <div className={styles.reqSection}>
              <h3>Age Requirements</h3>
              <ul>
                <li>Child age: 0 to 18 years</li>
                <li>Guardian must be 18+ years</li>
                <li>Single or joint guardianship allowed</li>
                <li>Account converts to regular savings at 18</li>
              </ul>
            </div>
            <div className={styles.reqSection}>
              <h3>Guardian Requirements</h3>
              <ul>
                <li>Parent or legal guardian</li>
                <li>Valid identity and address proof</li>
                <li>Existing account holder preferred</li>
                <li>Income proof not mandatory</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2>Documents Required</h2>
          <div className={styles.docCategories}>
            <div className={styles.docCategory}>
              <h3>Child's Documents</h3>
              <ul>
                <li>Birth Certificate</li>
                <li>School ID Card</li>
                <li>Aadhaar Card (if available)</li>
                <li>Passport size photographs</li>
              </ul>
            </div>
            <div className={styles.docCategory}>
              <h3>Guardian's Documents</h3>
              <ul>
                <li>Identity proof (Aadhaar/PAN)</li>
                <li>Address proof</li>
                <li>Relationship proof with child</li>
                <li>Guardian photographs</li>
              </ul>
            </div>
            <div className={styles.docCategory}>
              <h3>Additional Requirements</h3>
              <ul>
                <li>Account opening form</li>
                <li>Initial deposit ₹500</li>
                <li>Guardian consent form</li>
                <li>Nomination form</li>
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
            <Link href="/accounts/basic-savings" className={styles.accountCard}>
              <img 
                src="https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Basic Savings Account"
                className={styles.accountImage}
              />
              <div className={styles.accountInfo}>
                <h3>Basic Savings Account</h3>
                <p>Simple banking for everyone</p>
              </div>
            </Link>
            <Link href="/accounts/salary" className={styles.accountCard}>
              <img 
                src="https://images.pexels.com/photos/4386173/pexels-photo-4386173.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Salary Account"
                className={styles.accountImage}
              />
              <div className={styles.accountInfo}>
                <h3>Salary Account</h3>
                <p>Designed for salaried professionals</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}