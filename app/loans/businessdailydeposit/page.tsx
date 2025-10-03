"use client";
import { Home } from "lucide-react";
import styles from "../page.module.css";
import { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

export default function BusinessDailyDeposit() {
  // EMI / Interest Calculator State
  const [depositAmount, setDepositAmount] = useState<number>(500000);
  const interestRate = 18; // Fixed 19% for Business Daily Deposit

  const [tenure, setTenure] = useState<number>(12); // in months
  const [emi, setEmi] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);
  const [totalPayment, setTotalPayment] = useState<number>(0);

  // Helper to format currency in ₹
  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(value);

  // Auto calculate interest whenever values change
  useEffect(() => {
    const r = interestRate / 100 / 12; // monthly interest rate
    const n = tenure; // months
    const p = depositAmount; // principal

    const emiValue = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPay = emiValue * n;
    const interest = totalPay - p;

    setEmi(emiValue);
    setTotalPayment(totalPay);
    setTotalInterest(interest);
  }, [depositAmount, tenure]);

  const pieData = [
    { name: "Principal", value: depositAmount },
    { name: "Interest", value: totalInterest },
  ];

  const COLORS = ["#4CAF50", "#FF5733"];

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.iconContainer}>
            <Home size={60} />
          </div>
          <h1 className={styles.title}>Business Daily Deposit</h1>
          <p className={styles.subtitle}>
            Earn daily interest on your business deposits with attractive returns.
          </p>
        </div>
      </div>

      <div className={styles.content}>
        {/* Purpose */}
        <div className={styles.section}>
          <h2>Purpose</h2>
          <p>Ideal for businesses to earn daily interest on deposits while keeping funds accessible.</p>
        </div>

        {/* Deposit Details */}
        <div className={styles.section}>
          <h2>Deposit Details</h2>
          <div className={styles.loanDetails}>
            <div className={styles.detailCard}>
              <h3>Rate of Interest</h3>
              <p>18% (Fixed)</p>
            </div>
            <div className={styles.detailCard}>
              <h3>Tenure</h3>
              <p>Flexible (Up to 60 months)</p>
            </div>
            <div className={styles.detailCard}>
              <h3>Eligibility</h3>
              <p>Any registered business entity with valid KYC and bank account.</p>
            </div>
            <div className={styles.detailCard}>
              <h3>Minimum Deposit Amount</h3>
              <p>Rs. 50,000</p>
            </div>
          </div>
        </div>

        {/* USP Section */}
        <div className={styles.section}>
          <h2>USP</h2>
          <ul>
            <li>Daily interest credited to your account</li>
            <li>Flexible deposit amounts and tenure</li>
            <li>High interest rate of 19%</li>
            <li>Minimal documentation & transparent process</li>
            <li>Instant access to funds if required</li>
          </ul>
          <p className={styles.note}>
            * Terms and conditions apply. Kindly contact your nearest branch for further assistance.
          </p>
        </div>

        {/* EMI / Interest Calculator */}
        <div className={styles.section}>
          <h2>Interest Calculator</h2>
          <div className={styles.calculator}>
            {/* Deposit Amount Slider */}
            <div className={styles.inputGroup}>
              <label>Deposit Amount (₹): {formatCurrency(depositAmount)}</label>
              <input
                type="range"
                min="50000"
                max="50000000"
                step="50000"
                value={depositAmount}
                onChange={(e) => setDepositAmount(Number(e.target.value))}
              />
            </div>

            {/* Interest Rate Fixed */}
            <div className={styles.inputGroup}>
              <label>Interest Rate (%): {interestRate}</label>
            </div>

            {/* Tenure Slider */}
            <div className={styles.inputGroup}>
              <label>Tenure (Months): {tenure}</label>
              <input
                type="range"
                min="1"
                max="60"
                step="1"
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
              />
            </div>

            {/* Calculator Results */}
            <div className={styles.emiResult}>
              <p>📅 Monthly Interest: <strong>{formatCurrency(Math.round(emi))}</strong></p>
              <p>💰 Principal Amount: <strong>{formatCurrency(depositAmount)}</strong></p>
              <p>📈 Total Interest: <strong>{formatCurrency(Math.round(totalInterest))}</strong></p>
              <p>💵 Total Payment: <strong>{formatCurrency(Math.round(totalPayment))}</strong></p>
            </div>

            {/* Pie Chart */}
            <div className={styles.chartContainer}>
              <h3>Deposit Breakdown</h3>
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

        {/* Related Deposit / Loan Options */}
        <div className={styles.section}>
          <h2>Explore Other Options</h2>
          <div className={styles.otherLoans}>
            <div className={styles.loanCard}>
              <img src="/images/fixed-deposit.jpg" alt="Fixed Deposit" />
              <h3>Fixed Deposit</h3>
              <a href="/fixed-deposit">Know More</a>
            </div>
            <div className={styles.loanCard}>
              <img src="/images/recurring-deposit.jpg" alt="Recurring Deposit" />
              <h3>Recurring Deposit</h3>
              <a href="/recurring-deposit">Know More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
