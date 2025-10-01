"use client";
import { Shield } from "lucide-react";
import styles from "./page.module.css";

export default function CyberSecurityAwareness() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <Shield size={60} color="rgb(219,6,24)" />
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Cyber Security Awareness</h1>
          <p className={styles.subtitle}>
            Learn best practices to secure your digital assets and banking activities.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.content}>
        <section className={styles.section}>
          <h2>Introduction</h2>
          <p>
            Cyber security awareness is crucial to protect yourself from online threats such as phishing, malware, ransomware, and unauthorized access to accounts. Understanding common risks and following best practices ensures your digital safety.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Key Practices</h2>
          <ul>
            <li>Use strong, unique passwords for all accounts.</li>
            <li>Enable two-factor authentication wherever possible.</li>
            <li>Do not click on suspicious links or attachments in emails.</li>
            <li>Keep your software, browser, and antivirus updated.</li>
            <li>Use secure networks; avoid public Wi-Fi for sensitive transactions.</li>
            <li>Regularly monitor your bank and credit card statements.</li>
            <li>Do not share your personal or banking information with unverified sources.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Common Threats</h2>
          <ul>
            <li><strong>Phishing:</strong> Fake emails or websites trying to steal sensitive information.</li>
            <li><strong>Malware:</strong> Software designed to damage or gain unauthorized access to your system.</li>
            <li><strong>Ransomware:</strong> Malicious software that locks files until a ransom is paid.</li>
            <li><strong>Social Engineering:</strong> Manipulating people into giving confidential information.</li>
            <li><strong>SIM Swap Attacks:</strong> Fraudsters gain access to your mobile number to intercept OTPs.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Awareness Tips</h2>
          <p>
            Stay alert for unusual activity on your accounts, avoid sharing sensitive information online, and always verify sources before clicking on links or providing details. Regularly educate yourself about the latest cyber threats to remain safe.
          </p>
        </section>
      </div>
    </div>
  );
}
