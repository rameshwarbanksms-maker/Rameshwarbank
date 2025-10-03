"use client";
import { Shield } from "lucide-react"; // Represents secured loan
import styles from "../page.module.css";
import { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

export default function GoldLoanPage() {
  // EMI Calculator State
  const [loanAmount, setLoanAmount] = useState<number>(500000);
  const [tenure, setTenure] = useState<number>(60); // in months
  const [emi, setEmi] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);
  const [totalPayment, setTotalPayment] = useState<number>(0);

  // Loan type: 'Standard' or 'Overdraft'
  const [loanType, setLoanType] = useState<"standard" | "overdraft">("standard");

  // Interest rate fixed at 9% for both
  const interestRate = 9; 

  // Helper to format currency in ₹
  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(value);

  // Calculate EMI
  useEffect(() => {
    const r = interestRate / 100 / 12;
    const n = tenure;
    const p = loanAmount;

    const emiValue = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPay = emiValue * n;
    const interest = totalPay - p;

    setEmi(emiValue);
    setTotalPayment(totalPay);
    setTotalInterest(interest);
  }, [loanAmount, tenure]);

  const pieData = [
    { name: "Principal", value: loanAmount },
    { name: "Interest", value: totalInterest },
  ];

  const COLORS = ["#4CAF50", "#FF5733"]; // Gold for principal

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.iconContainer}>
            <Shield size={60} />
          </div>
          <h1 className={styles.title}>Gold Loan</h1>
          <p className={styles.subtitle}>
            Get instant credit against your gold with our Gold Loan & Overdraft facility.
          </p>
        </div>
      </div>

      <div className={styles.content}>
        {/* Loan Type Selector */}
        <div className={styles.section}>
          <h2>Choose Loan Type</h2>
          <div>
            <button onClick={() => setLoanType("standard")} style={{marginRight: "10px", backgroundColor: loanType === "standard" ? "#FFD700" : "#eee"}}>Standard Gold Loan</button>
            <button onClick={() => setLoanType("overdraft")} style={{backgroundColor: loanType === "overdraft" ? "#FFD700" : "#eee"}}>Overdraft Against Gold</button>
          </div>
        </div>

        {/* Purpose */}
        <div className={styles.section}>
          <h2>Purpose</h2>
          <p>
            {loanType === "standard"
              ? "For personal or business financial needs using your gold as collateral."
              : "For flexible overdraft facility against your gold to meet short-term financial needs."}
          </p>
        </div>

        {/* Loan Details */}
        <div className={styles.section}>
          <h2>Loan Details</h2>
          <div className={styles.loanDetails}>
            <div className={styles.detailCard}>
              <h3>Rate of Interest</h3>
              <p>9% (Fixed)</p>
            </div>
            <div className={styles.detailCard}>
              <h3>Tenure</h3>
              <p>Up to 60 months</p>
            </div>
            <div className={styles.detailCard}>
              <h3>Eligibility</h3>
              <p>Based on the purity and value of gold offered and credit history.</p>
            </div>
            <div className={styles.detailCard}>
              <h3>Maximum Loan Amount</h3>
              <p>As per gold value provided as security.</p>
            </div>
          </div>
        </div>

        {/* USP Section */}
        <div className={styles.section}>
          <h2>USP</h2>
          <ul>
            <li>Quick Disbursal Against Gold</li>
            <li>Flexible Repayment Options</li>
            <li>Higher Loan Eligibility Based on Gold Value</li>
            <li>Minimal Documentation & Transparent Process</li>
            <li>Personalized Assistance for Borrowers</li>
          </ul>
          <p className={styles.note}>
            * Terms and conditions apply. Kindly contact your nearest branch for further assistance.
          </p>
        </div>

        {/* EMI Calculator */}
        <div className={styles.section}>
          <h2>EMI Calculator</h2>
          <div className={styles.calculator}>
            <div className={styles.inputGroup}>
              <label>Loan Amount (₹): {formatCurrency(loanAmount)}</label>
              <input
                type="range"
                min="50000"
                max="50000000"
                step="50000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
              />
            </div>

            <div className={styles.inputGroup}>
              <label>Interest Rate (%): {interestRate}</label>
            </div>

            <div className={styles.inputGroup}>
              <label>Tenure (Months): {tenure}</label>
              <input
                type="range"
                min="12"
                max="60"
                step="1"
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
              />
            </div>

            <div className={styles.emiResult}>
              <p>📅 Monthly EMI: <strong>{formatCurrency(Math.round(emi))}</strong></p>
              <p>💰 Principal Amount: <strong>{formatCurrency(loanAmount)}</strong></p>
              <p>📈 Total Interest: <strong>{formatCurrency(Math.round(totalInterest))}</strong></p>
              <p>💵 Total Payment: <strong>{formatCurrency(Math.round(totalPayment))}</strong></p>
            </div>

            <div className={styles.chartContainer}>
              <h3>Repayment Breakdown</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    dataKey="value"
                    label
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value: number) => formatCurrency(value)} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Related Loan Options */}
        <div className={styles.section}>
          <h2>Explore Other Loans</h2>
          <div className={styles.otherLoans}>
            <div className={styles.loanCard}>
              <img src="/images/vehicle-loan.jpg" alt="Vehicle Loan" />
              <h3>Vehicle Loan</h3>
              <a href="/vehicle-loan">Know More</a>
            </div>
            <div className={styles.loanCard}>
              <img src="/images/business-loan.jpg" alt="Business Loan" />
              <h3>Business Loan</h3>
              <a href="/business-loan">Know More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
