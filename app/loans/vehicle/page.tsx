"use client";
import { Home } from "lucide-react";
import styles from "../page.module.css";
import { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

export default function VehicleLoan() {
  // EMI Calculator State
  const [loanAmount, setLoanAmount] = useState<number>(300000);
  const [vehicleType, setVehicleType] = useState<string>("personalNew"); // default selection
  const [interestRate, setInterestRate] = useState<number>(10); // default personal new
  const [tenure, setTenure] = useState<number>(36); // max 60 months
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

  // Update interest rate based on vehicle type
  useEffect(() => {
    switch (vehicleType) {
      case "personalNew":
        setInterestRate(10);
        break;
      case "personalOld":
        setInterestRate(11);
        break;
      case "businessNew":
        setInterestRate(12);
        break;
      case "businessOld":
        setInterestRate(13);
        break;
      default:
        setInterestRate(10);
    }
  }, [vehicleType]);

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
          <h1 className={styles.title}>Vehicle Loan</h1>
          <p className={styles.subtitle}>
            Drive your dream vehicle today with our flexible Vehicle Loans.
          </p>
        </div>
      </div>

      <div className={styles.content}>
        {/* Purpose */}
        <div className={styles.section}>
          <h2>Purpose</h2>
          <p>For purchase of new or pre-owned cars, bikes, or commercial vehicles.</p>
        </div>

        {/* Loan Details */}
        <div className={styles.section}>
          <h2>Loan Details</h2>
          <div className={styles.loanDetails}>
            <div className={styles.detailCard}>
              <h3>Range of ROI</h3>
              <p>10% to 13% (based on vehicle type & use)</p>
            </div>
            <div className={styles.detailCard}>
              <h3>Tenure</h3>
              <p>Up to 60 months</p>
            </div>
            <div className={styles.detailCard}>
              <h3>Eligibility</h3>
              <p>Based on income, credit score, and repayment capacity.</p>
            </div>
            <div className={styles.detailCard}>
              <h3>Maximum Loan Amount</h3>
              <p>Rs. 50 lacs (based on eligibility).</p>
            </div>
          </div>
        </div>

        {/* USP Section */}
        <div className={styles.section}>
          <h2>USP</h2>
          <ul>
            <li>Fast Approval & Disbursal</li>
            <li>Flexible Tenure Options</li>
            <li>Minimal Documentation</li>
            <li>Competitive Interest Rates</li>
            <li>Support for New & Used Vehicles</li>
          </ul>
          <p className={styles.note}>
            * Terms and conditions apply. Kindly contact your nearest branch for further assistance.
          </p>
        </div>

        {/* EMI Calculator */}
        <div className={styles.section}>
          <h2>EMI Calculator</h2>
          <div className={styles.calculator}>
            {/* Vehicle Type Selection */}
            <div className={styles.inputGroup}>
              <label>Vehicle Type & Use:</label>
              <select
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
              >
                <option value="personalNew">Personal Vehicle - New (10%)</option>
                <option value="personalOld">Personal Vehicle - Old (11%)</option>
                <option value="businessNew">Business Vehicle - New (12%)</option>
                <option value="businessOld">Business Vehicle - Old (13%)</option>
              </select>
            </div>

            {/* Loan Amount Slider */}
            <div className={styles.inputGroup}>
              <label>Loan Amount (₹): {formatCurrency(loanAmount)}</label>
              <input
                type="range"
                min="50000"
                max="5000000"
                step="50000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
              />
            </div>

            {/* Fixed Interest Rate */}
            <div className={styles.inputGroup}>
              <label>Interest Rate (%): {interestRate} (Fixed)</label>
            </div>

            {/* Tenure Slider (max 60 months) */}
            <div className={styles.inputGroup}>
              <label>Tenure (Months): {tenure}</label>
              <input
                type="range"
                min="12"
                max="60"
                step="6"
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
