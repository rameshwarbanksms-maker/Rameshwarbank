import { Building2, Globe, Shield, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import styles from '../accounts.module.css';

export default function CorporateAccount() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.iconContainer}>
            <Building2 size={60} />
          </div>
          <h1 className={styles.title}>Corporate Account</h1>
          <p className={styles.subtitle}>Advanced banking for large enterprises</p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.section}>
          <h2>Account Overview</h2>
          <p className={styles.overview}>
            Corporate Account is tailored for large enterprises and multinational companies 
            requiring sophisticated banking solutions. It offers comprehensive cash management, 
            trade finance, and treasury services to meet complex business needs.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Key Highlights</h2>
          <div className={styles.featuresList}>
            <div className={styles.feature}>
              <Globe className={styles.featureIcon} />
              <div>
                <h3>Global Banking</h3>
                <p>International banking services with multi-currency support</p>
              </div>
            </div>
            <div className={styles.feature}>
              <Shield className={styles.featureIcon} />
              <div>
                <h3>Treasury Services</h3>
                <p>Advanced treasury management and investment solutions</p>
              </div>
            </div>
            <div className={styles.feature}>
              <TrendingUp className={styles.featureIcon} />
              <div>
                <h3>Cash Management</h3>
                <p>Sophisticated cash flow management and liquidity solutions</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2>Account Benefits</h2>
          <div className={styles.benefitsList}>
            <div className={styles.benefit}>Dedicated corporate banking team</div>
            <div className={styles.benefit}>Customized banking solutions</div>
            <div className={styles.benefit}>Priority trade finance services</div>
            <div className={styles.benefit}>Multi-location banking facilities</div>
            <div className={styles.benefit}>Advanced digital banking platform</div>
            <div className={styles.benefit}>Specialized advisory services</div>
          </div>
        </div>

        <div className={styles.section}>
          <h2>Eligibility Criteria</h2>
          <div className={styles.requirements}>
            <div className={styles.reqSection}>
              <h3>Company Types</h3>
              <ul>
                <li>Large corporations</li>
                <li>Multinational companies</li>
                <li>Government enterprises</li>
                <li>Financial institutions</li>
                <li>Listed companies</li>
              </ul>
            </div>
            <div className={styles.reqSection}>
              <h3>Requirements</h3>
              <ul>
                <li>Annual turnover ₹100 crores+</li>
                <li>Minimum balance ₹5 lakhs</li>
                <li>Established business track record</li>
                <li>Strong financial position</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2>Documents Required</h2>
          <div className={styles.docCategories}>
            <div className={styles.docCategory}>
              <h3>Corporate Documents</h3>
              <ul>
                <li>Certificate of incorporation</li>
                <li>Memorandum & Articles of Association</li>
                <li>Board resolutions</li>
                <li>Power of attorney</li>
                <li>Corporate PAN card</li>
              </ul>
            </div>
            <div className={styles.docCategory}>
              <h3>Financial Documents</h3>
              <ul>
                <li>Audited financial statements (3 years)</li>
                <li>Annual reports</li>
                <li>Tax returns</li>
                <li>Banking history</li>
                <li>Credit ratings</li>
              </ul>
            </div>
            <div className={styles.docCategory}>
              <h3>Compliance Documents</h3>
              <ul>
                <li>GST registration</li>
                <li>Import/Export license</li>
                <li>Regulatory approvals</li>
                <li>Compliance certificates</li>
                <li>KYC of directors</li>
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