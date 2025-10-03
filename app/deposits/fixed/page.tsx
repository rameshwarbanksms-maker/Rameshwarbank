"use client";
import styles from "./page.module.css";

import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function FixedDeposit() {
  const [expandedPlan, setExpandedPlan] = useState<string | null>(null);

  const plans = [
    {
      id: "quarterly-income",
      title: "QUARTERLY INCOME PLAN",
      description:
        "Receive regular quarterly income from your fixed deposit investment with competitive interest rates.",
    },
    {
      id: "quarterly-reinvestment",
      title: "QUARTERLY RE-INVESTMENT PLAN",
      description:
        "Reinvest your quarterly returns automatically to maximize your investment growth over time.",
    },
    {
      id: "monthly-income",
      title: "MONTHLY INCOME PLAN",
      description:
        "Get steady monthly income from your fixed deposit to meet your regular financial needs.",
    },
    {
      id: "short-term",
      title: "SHORT TERM DEPOSITS",
      description:
        "Flexible short-term deposit options for quick returns with minimum lock-in periods.",
    },
  ];

  const togglePlan = (planId: string) => {
    setExpandedPlan(expandedPlan === planId ? null : planId);
  };

  return (
    <div className={styles.pageWrapper}>
      <main className={styles.main}>
        <div className={styles.container}>
          {/* Hero */}
          <div className={styles.heroWrapper}>
            <img
              src="https://images.pexels.com/photos/3483098/pexels-photo-3483098.jpeg"
              alt="Fixed Deposit Investment"
              className={styles.heroImage}
            />
          </div>

          <h1 className={styles.title}>Fixed Deposits</h1>

          {/* Plans */}
          <div className={styles.plansGrid}>
            {plans.map((plan) => (
              <div key={plan.id} className={styles.planCard}>
                <button
                  onClick={() => togglePlan(plan.id)}
                  className={styles.planButton}
                >
                  <span className={styles.planTitle}>{plan.title}</span>
                  {expandedPlan === plan.id ? (
                    <ChevronUp className={styles.icon} />
                  ) : (
                    <ChevronDown className={styles.icon} />
                  )}
                </button>
                {expandedPlan === plan.id && (
                  <div className={styles.planDescriptionWrapper}>
                    <p className={styles.planDescription}>
                      {plan.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Interest Rates */}
          <div className={styles.ratesWrapper}>
            <h2 className={styles.ratesTitle}>
              Term Deposit Interest Rates (w.e.f 01.02.2025)
            </h2>
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th className={styles.th}>Sr. No</th>
                    <th className={styles.th}>Period</th>
                    <th className={styles.th}>General Public</th>
                    <th className={styles.th}>Senior Citizens (60+ YRS)</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Example rows – fill rates manually */}
                  <tr>
                    <td className={styles.td}>1</td>
                    <td className={styles.td}>15 to 25 Days</td>
                    <td className={styles.td}>4.00%</td>
                    <td className={styles.td}>--</td>
                  </tr>
                  <tr>
                    <td className={styles.td}>2</td>
                    <td className={styles.td}>46 to 90 Days</td>
                    <td className={styles.td}>5.00%</td>
                    <td className={styles.td}>--</td>
                  </tr>
                  <tr>
                    <td className={styles.td}>3</td>
                    <td className={styles.td}>91 to 180 Days</td>
                    <td className={styles.td}>6.00%</td>
                    <td className={styles.td}>--</td>
                  </tr>
                  <tr>
                    <td className={styles.td}>4</td>
                    <td className={styles.td}>181 to 364 Days</td>
                    <td className={styles.td}>6.25%</td>
                    <td className={styles.td}></td>
                  </tr>
                  <tr>
                    <td className={styles.td}>5</td>
                    <td className={styles.td}>1 YEAR TO LESS 2 YEAR</td>
                    <td className={styles.td}>6.75%</td>
                    <td className={styles.td}>7.00%</td>
                  </tr>
                  <tr>
                    <td className={styles.td}>6</td>
                    <td className={styles.td}>2 YEAR TO LESS 5 YEAR</td>
                    <td className={styles.td}>7.25%</td>
                    <td className={styles.td}>7.50%</td>
                  </tr>
                  <tr>
                    <td className={styles.td}>7</td>
                    <td className={styles.td}>5 YEAR AND ABOVE</td>
                    <td className={styles.td}>7.00%</td>
                    <td className={styles.td}>7.25%</td>
                  </tr>
                  <tr>
                    <td className={styles.td}>8</td>
                    <td className={styles.td}>SAVING BANK ACCOUNT</td>
                    <td className={styles.td}>2.50%</td>
                    <td className={styles.td}>2.50%</td>
                  </tr>
                 
                </tbody>
              </table>
            </div>
          </div>

          {/* Millionaire Scheme */}
          <div className={styles.millionaireWrapper}>
            <h3 className={styles.millionaireTitle}>
              DIWALI DHAMAKA 
            </h3>
            <div className={styles.millionaireGrid}>
              <div className={styles.millionaireCard}>
                <h4 className={styles.millionaireCardTitle}>
                  General Public - 7.25%
                </h4>
                <p className={styles.millionaireDetails}>
                  Instalment – Rs.1,00,000/ - Maturity Amount – Rs.1,07,471/
                
                </p>
                <p className={styles.millionaireDetails}>
                 Instalment – Rs.5,00,000/ - Maturity Amount – Rs.5,37,357/-
                 
                </p>
                <p className={styles.millionaireDetails}>
                 Instalment – Rs.10,00,000/ - Maturity Amount – Rs.10,74,713/-
                 
                </p>
              </div>
              <div className={styles.millionaireCard}>
                <h4 className={styles.millionaireCardTitle}>
                  Senior Citizens - 7.75%
                </h4>
                <p className={styles.millionaireDetails}>
                  Instalment – Rs.1,00,000/ -- Maturity Amount – Rs.1,08,003/
                </p>
                <p className={styles.millionaireDetails}>
                  Instalment – Rs.5,00,000/ -- Maturity Amount – Rs.5,40,015/
                </p>
                <p className={styles.millionaireDetails}>
                  Instalment – Rs.10,00,000/ -- Maturity Amount – Rs.10,80,029/
                </p>
              </div>
            </div>
          </div>

          {/* Terms */}
          <div className={styles.termsWrapper}>
            <h3 className={styles.termsTitle}>TERMS & CONDITIONS APPLICABLE</h3>
            <div className={styles.termsContent}>
              <p>
                <strong>a)</strong> Minimum amount acceptable for Fixed Deposits
                for the tenure of 7-30 days will be Rs.5 lakhs per receipt.
              </p>
              <p>
                <strong>b)</strong> Bulk Fixed Deposits are single Fixed
                Deposits receipts booked for an amount of Rs.15 Lakhs or more.
                Bulk rates same as General Public plus 0.25% premium of existing
                rates.
              </p>
              <p>
                <strong>#</strong> 15 Months fixed deposit - Cumulative & Quarterly
              </p>
              <p>
                <strong>#</strong> 15 Months New FD Scheme not applicable for
                NRE Deposit.
              </p>
              <p>
                <strong>*</strong> KYC Documents such as Address Proof, ID
                Proof, PAN Card is compulsory as per RBI Guidelines.
              </p>
            </div>

            <h4 className={styles.termsSubtitle}>
              Rate of Interest for NRE/NRO Accounts:
            </h4>
            <div className={styles.termsExtra}>
              <p>
                <strong>NRE Deposits</strong> - 1 year to 3 years - Same
                interest as offered on domestic deposits
              </p>
              <p>
                <strong>NRO Deposits</strong> - 7 days to 5 years - Same
                interest as offered on domestic deposits
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className={styles.navWrapper}>
            <Link href="/deposits/recurring" className={styles.navCard}>
              <img
                src="https://images.pexels.com/photos/1602726/pexels-photo-1602726.jpeg"
                alt="Recurring Deposit"
                className={styles.navImage}
              />
              <h3 className={styles.navTitle}>Explore Recurring Deposits</h3>
              <p className={styles.navDescription}>
                Save regularly and build your wealth systematically
              </p>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
