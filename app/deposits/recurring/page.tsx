"use client";

import Link from "next/link";
import styles from "./page.module.css";

export default function RecurringDeposit() {
  return (
    <div className={styles.rdPage}>
      <main className={styles.rdMain}>
        <div className={styles.rdContainer}>
          {/* Hero Image */}
          <div className={styles.rdHeroWrapper}>
            <img
              src="https://images.pexels.com/photos/1602726/pexels-photo-1602726.jpeg"
              alt="Recurring Deposit Investment"
              className={styles.rdHeroImage}
            />
          </div>

          <div className={styles.rdContent}>
            <h1 className={styles.rdTitle}>Recurring Deposit</h1>

            <div className={styles.rdIntroContainer}>
              <h2 className={styles.rdIntroTitle}>
                Open Recurring Account with us and Save a fixed amount regularly.
              </h2>
              <p className={styles.rdIntroText}>
                Recurring Deposit accounts are good for salaried account holders or for those having a fixed income every month.
                The depositor can select the monthly instalment as per his monthly surplus and opt for a tenure and maturity amount
                that matches an expected funds requirement in the future.
              </p>
            </div>

            {/* Interest Rates Table */}
            <div className={styles.rdRatesContainer}>
              <div className={styles.rdRatesHeader}>
                <h3 className={styles.rdRatesTitle}>Recurring Deposit Interest Rates</h3>
              </div>

              <div className={styles.rdTableWrapper}>
                <table className={styles.rdTable}>
                  <thead>
                    <tr>
                      <th>Term Deposits</th>
                      <th>General Public</th>
                      <th>Senior Citizen</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>RD 1 Year to 10 Years</td>
                      <td>As per applicable FD rate</td>
                      <td>As per applicable FD rate</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Model Millionaire Scheme */}
            <div className={styles.rdMillionaireContainer}>
              <h3 className={styles.rdMillionaireTitle}>
                MODEL MILLIONAIRE SCHEME (60 Months)
              </h3>
              <div className={styles.rdMillionaireGrid}>
                <div className={styles.rdMillionaireCard}>
                  <h4>General Public - 6.65%</h4>
                  <p>Instalment – Rs.14,032/-</p>
                  <p>Maturity Amount - Rs.10,00,089/-</p>
                </div>
                <div className={styles.rdMillionaireCard}>
                  <h4>Senior Citizens - 6.90%</h4>
                  <p>Instalment- Rs.13,940/-</p>
                  <p>Maturity Amount- Rs.10,00,111/-</p>
                </div>
              </div>
              <p className={styles.rdConditionsNote}>* Conditions Apply</p>
            </div>

            {/* Features */}
            <div className={styles.rdFeaturesGrid}>
              <div className={styles.rdFeatureCard}>
                <div className={styles.rdFeatureIcon}>💰</div>
                <h4>Regular Savings</h4>
                <p>Build a habit of regular savings with fixed monthly deposits</p>
              </div>

              <div className={styles.rdFeatureCard}>
                <div className={styles.rdFeatureIcon}>📈</div>
                <h4>Attractive Returns</h4>
                <p>Earn competitive interest rates on your regular deposits</p>
              </div>

              <div className={styles.rdFeatureCard}>
                <div className={styles.rdFeatureIcon}>⏰</div>
                <h4>Flexible Tenure</h4>
                <p>Choose tenure from 1 year to 10 years as per your needs</p>
              </div>
            </div>

            {/* Terms & Conditions */}
            <div className={styles.rdTermsContainer}>
              <h3>Important Information</h3>
              <p>
                <strong>*</strong> KYC Documents such as Address Proof, ID Proof,
                PAN Card is compulsory as per RBI Guidelines.
              </p>
            </div>

            {/* Navigation to Fixed Deposit */}
            <div className={styles.rdNavWrapper}>
              <Link href="/deposits/fixed" className={styles.rdNavCard}>
                <img
                  src="https://images.pexels.com/photos/3483098/pexels-photo-3483098.jpeg"
                  alt="Fixed Deposit"
                  className={styles.rdNavImage}
                />
                <h3>Explore Fixed Deposits</h3>
                <p>Invest lump sum amounts for guaranteed returns</p>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
