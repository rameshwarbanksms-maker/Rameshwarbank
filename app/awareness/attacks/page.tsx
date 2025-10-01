"use client";
import { Home } from "lucide-react";
import styles from "./page.module.css";

export default function SafetyMeasures() {
  const attacks = [
    {
      title: "Phishing",
      description:
        "Phishing is a type of attack which attempts to steal sensitive information like user login credentials, credit card number, etc. either through an email or through a pop-up window or a fake website. It occurs when an attacker is masquerading as a trustworthy entity in electronic communication. The emails may ask the recipient to click a link and provide confidential information like account number, username.",
    },
    {
      title: "Vishing and SMShing",
      description:
        "Vishing is a grouping of 'voice' and 'phishing'. Vishing is like another Social Engineering attack phishing - the major difference being a mode of attack. While phishing involves the use of emails to trick a target into providing the target’s personal details; vishing involves voice or telephone services.",
    },
    {
      title: "SIM Swap Attack",
      description:
        "As most of the account details are connected to your registered mobile number, attacker tries to gain access to the SIM card or obtain duplicate SIM card for carrying out transactions. Using SIM swap technique, the attacker gathers personal information by practices such as phishing, vishing, smishing, and more.",
    },
    {
      title: "Money Mule",
      description:
        "Money Mule is a term used to describe victim who is duped by fraudsters into laundering stolen/illegal money via victim’s bank account.",
    },
    {
      title: "Juice Jacking",
      description:
        "Juice jacking is a type of attack involving a charging port from where data is stolen from the connected device. Crawlers can search a phone for personally identifiable information (PII), account credentials, banking-related or credit card data.",
    },
    {
      title: "ATM Card Skimming",
      description:
        "In this type of attack, the attacker targets ATM machines and places skimming devices which are used to steal data from ATM / Debit / Credit cards.",
    },
    {
      title: "Scam through QR (Quick Response) Code",
      description:
        "A QR code consists of black squares and dots which represent digital information. When scanned, it may translate malicious content or lead to phishing/fraudulent sites.",
    },
    {
      title: "Scam through Search Engines",
      description:
        "If an individual uses search engine for obtaining contact details of bank/financial institutions, he/she may end up contacting unknown/unverified numbers camouflaged by fraudsters to attract victims.",
    },
  ];

  return (
    <div className={styles.container}>
      {/* Hero Section with Icon */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <Home size={60} color="rgb(219, 6, 24)" />
          <h1 className={styles.title}>Types of attacks</h1>
          <p className={styles.subtitle}>
            Precautionary measures while availing Digital Banking facilities.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.content}>
        <section className={styles.section}>
          <h2>Type of Attacks</h2>
          <p>
            Know what to do on noticing anything suspicious. Please note that the information provided here is generic in nature and for informational purposes only.
          </p>

          {attacks.map((attack, idx) => (
            <div key={idx} className={styles.attackCard}>
              <h3>{attack.title}</h3>
              <p>{attack.description} <span style={{color: "rgb(219,6,24)", fontWeight: "bold"}}>Know More...</span></p>
            </div>
          ))}
        </section>

          </div>
    </div>
  );
}
