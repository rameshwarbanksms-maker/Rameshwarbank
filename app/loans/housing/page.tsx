"use client";
import { Home } from "lucide-react";
import styles from "../page.module.css";
import { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

export default function HousingLoan() {
  // EMI Calculator State
  const [loanAmount, setLoanAmount] = useState<number>(1000000);
  const [interestRate] = useState<number>(10); // Fixed 10%
  const [tenure, setTenure] = useState<number>(120); // in months
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

  // Auto calculate EMI whenever values change
  useEffect(() => {
    const r = interestRate / 100 / 12; // monthly interest rate
    const n = tenure; // months
    const p = loanAmount; // principal

    if (r > 0) {
      const emiValue =
        (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

      const totalPay = emiValue * n;
      const interest = totalPay - p;

      setEmi(emiValue);
      setTotalPayment(totalPay);
      setTotalInterest(interest);
    } else {
      setEmi(p / n);
      setTotalPayment(p);
      setTotalInterest(0);
    }
  }, [loanAmount, interestRate, tenure]);

  const pieData = [
    { name: "Principal", value: loanAmount },
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
          <h1 className={styles.title}>Housing Loan</h1>
          <p className={styles.subtitle}>
            There is no place like Home. Own your dream Home with our Housing Loans.
          </p>
        </div>
      </div>

      <div className={styles.content}>
        {/* Purpose */}
        <div className={styles.section}>
          <h2>Purpose</h2>
          <p>For purchase or construction of house/ dwelling unit.</p>
        </div>

        {/* Loan Details */}
        <div className={styles.section}>
          <h2>Loan Details</h2>
          <div className={styles.loanDetails}>
            <div className={styles.detailCard}>
              <h3>Range of ROI</h3>
              <p>8.00% to 11.75%</p>
            </div>
            <div className={styles.detailCard}>
              <h3>Tenure</h3>
              <p>Up to 240 months</p>
            </div>
            <div className={styles.detailCard}>
              <h3>Eligibility</h3>
              <p>Up to 80% of the Agreement value of the flat / dwelling unit.</p>
            </div>
            <div className={styles.detailCard}>
              <h3>Maximum Loan Amount</h3>
              <p>Rs. 200 lacs (based on eligibility).</p>
            </div>
          </div>
        </div>

        {/* USP Section */}
        <div className={styles.section}>
          <h2>USP</h2>
          <ul>
            <li>Competitive Rate of Interest</li>
            <li>Quick Processing & Disbursement</li>
            <li>Higher Eligibility</li>
            <li>Customer friendly and Fast documentation</li>
            <li>Personalized Service</li>
          </ul>
          <p className={styles.note}>
            * Terms and conditions apply. Kindly contact your nearest branch for further assistance.
          </p>
        </div>

        {/* EMI Calculator */}
        <div className={styles.section}>
          <h2>EMI Calculator</h2>
          <div className={styles.calculator}>
            {/* Loan Amount Slider */}
            <div className={styles.inputGroup}>
              <label>Loan Amount (₹): {formatCurrency(loanAmount)}</label>
              <input
                type="range"
                min="100000"
                max="20000000"
                step="50000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
              />
            </div>

            {/* Fixed Interest Rate */}
            <div className={styles.inputGroup}>
              <label>Interest Rate (%): {interestRate} (Fixed)</label>
            </div>

            {/* Tenure Slider */}
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

            {/* EMI Results */}
            <div className={styles.emiResult}>
              <p>📅 Monthly EMI: <strong>{formatCurrency(Math.round(emi))}</strong></p>
              <p>💰 Principal Amount: <strong>{formatCurrency(loanAmount)}</strong></p>
              <p>📈 Total Interest: <strong>{formatCurrency(Math.round(totalInterest))}</strong></p>
              <p>💵 Total Payment: <strong>{formatCurrency(Math.round(totalPayment))}</strong></p>
            </div>

            {/* Pie Chart */}
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
              <img src="/images/gold-loan.jpg" alt="Gold Loan" />
              <h3>Gold Loan</h3>
              <a href="/gold-loan">Know More</a>
            </div>
            <div className={styles.loanCard}>
              <img src="/images/vehicle-loan.jpg" alt="Vehicle Loan" />
              <h3>Vehicle Loan</h3>
              <a href="/vehicle-loan">Know More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
