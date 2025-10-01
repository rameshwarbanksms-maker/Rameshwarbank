import { Briefcase, Star, Gift, Smartphone } from 'lucide-react';
import Link from 'next/link';
import styles from '../accounts.module.css';

export default function SalaryAccount() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.iconContainer}>
            <Briefcase size={60} />
          </div>
          <h1 className={styles.title}>Salary Account</h1>
          <p className={styles.subtitle}>Designed for salaried professionals</p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.section}>
          <h2>Account Overview</h2>
          <p className={styles.overview}>
            Salary Account is exclusively designed for salaried individuals to receive their 
            monthly salary and manage their finances efficiently. It offers special benefits 
            and privileges tailored for working professionals.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Key Highlights</h2>
          <div className={styles.featuresList}>
            <div className={styles.feature}>
              <Star className={styles.featureIcon} />
              <div>
                <h3>Zero Balance Account</h3>
                <p>No minimum balance requirement as long as salary is credited</p>
              </div>
            </div>
            <div className={styles.feature}>
              <Gift className={styles.featureIcon} />
              <div>
                <h3>Exclusive Benefits</h3>
                <p>Special offers on loans, credit cards, and investment products</p>
              </div>
            </div>
            <div className={styles.feature}>
              <Smartphone className={styles.featureIcon} />
              <div>
                <h3>Digital Banking</h3>
                <p>Complete digital banking suite with mobile and internet banking</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2>Account Benefits</h2>
          <div className={styles.benefitsList}>
            <div className={styles.benefit}>Zero minimum balance with regular salary credit</div>
            <div className={styles.benefit}>Free unlimited ATM transactions</div>
            <div className={styles.benefit}>Complimentary debit card with insurance</div>
            <div className={styles.benefit}>Pre-approved personal loan offers</div>
            <div className={styles.benefit}>Priority customer service</div>
            <div className={styles.benefit}>Special rates on fixed deposits</div>
          </div>
        </div>

        <div className={styles.section}>
          <h2>Eligibility Criteria</h2>
          <div className={styles.requirements}>
            <div className={styles.reqSection}>
              <h3>Employment Type</h3>
              <ul>
                <li>Salaried employees</li>
                <li>Government employees</li>
                <li>Corporate employees</li>
                <li>Pensioners</li>
              </ul>
            </div>
            <div className={styles.reqSection}>
              <h3>Requirements</h3>
              <ul>
                <li>Minimum monthly salary ₹15,000</li>
                <li>Salary account with employer tie-up</li>
                <li>Regular salary credit mandatory</li>
                <li>Age 18-60 years</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2>Documents Required</h2>
          <div className={styles.docCategories}>
            <div className={styles.docCategory}>
              <h3>Identity & Address</h3>
              <ul>
                <li>Aadhaar Card</li>
                <li>PAN Card</li>
                <li>Passport/Driving License</li>
                <li>Utility bills (address proof)</li>
              </ul>
            </div>
            <div className={styles.docCategory}>
              <h3>Employment Proof</h3>
              <ul>
                <li>Employment certificate</li>
                <li>Salary certificate</li>
                <li>Last 3 months salary slips</li>
                <li>Employee ID card</li>
              </ul>
            </div>
            <div className={styles.docCategory}>
              <h3>Additional Documents</h3>
              <ul>
                <li>Passport size photographs</li>
                <li>Form 16 (if available)</li>
                <li>Bank account statements</li>
                <li>Employer authorization letter</li>
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
            <Link href="/accounts/nro-nre" className={styles.accountCard}>
              <img 
                src="https://images.pexels.com/photos/4386173/pexels-photo-4386173.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="NRO/NRE Account"
                className={styles.accountImage}
              />
              <div className={styles.accountInfo}>
                <h3>NRO/NRE Account</h3>
                <p>Banking solutions for NRIs</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}