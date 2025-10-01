"use client";
import { Home } from "lucide-react";
import styles from "./page.module.css";

export default function SafetyMeasures() {
  return (
    <div className={styles.container}>
      {/* Hero Section with Icon */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <Home size={60} color="rgb(219, 6, 24)" />
          <h1 className={styles.title}>Safety Measures</h1>
          <p className={styles.subtitle}>
            Precautionary measures while availing Digital Banking facilities.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.content}>
        <section className={styles.section}>
          <h2>Online Banking Security Precautions</h2>
          <ul>
            <li>Visit our secure Internet banking site directly. Avoid using links from emails or other websites and verify the domain name to prevent spoof websites.</li>
            <li>Log out of Internet banking when your session is complete. Use the ‘Log Out’ button.</li>
            <li>Log off your PC when not in use.</li>
            <li>Avoid using Internet Banking on unsecured networks like airports, railway stations, cyber-cafes, or public Wi-Fi.</li>
            <li>Update your browser regularly.</li>
            <li>Install security programs and antivirus and keep them updated.</li>
            <li>Install a suitable firewall to protect your device.</li>
            <li>Disable ‘File and Printing Sharing’ feature.</li>
            <li>Preferably use a virtual keypad while conducting electronic transactions.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Mobile Banking Security</h2>
          <ul>
            <li>Do not leave your device unattended and logged in.</li>
            <li>Lock your device to prevent unauthorized use.</li>
            <li>Notify your bank if your device is lost or stolen.</li>
            <li>Update your Mobile Banking App and mobile OS regularly.</li>
            <li>Purchase your mobile phone from authorized dealers.</li>
            <li>Download apps only from trusted sources.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Creating PIN / Password</h2>
          <ul>
            <li>Avoid using familiar names or easily discoverable facts.</li>
            <li>Do not use dictionary words; combine misspelled words.</li>
            <li>Use at least 6 characters; combine letters, numbers, and special characters.</li>
            <li>Use upper- and lower-case letters.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Precautions for Preventing Unauthorized Transactions</h2>
          <ul>
            <li>Do not allow anyone else to use your card, PIN, password, or security information.</li>
            <li>Change your PIN / Password every 3-6 months and do not repeat previous passwords.</li>
            <li>Sign your card as soon as you receive it.</li>
            <li>Disputed/failed ATM complaints should be lodged with the issuing bank.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Awareness</h2>
          <ul>
            <li>C-KYC Awareness</li>
            <li>Safety Measures</li>
            <li>Type of Attacks</li>
            <li>RBI Guidelines</li>
            <li>Satark Banking Guidelines</li>
            <li>Cyber Security Awareness</li>
            <li>Accessibility Standards & Guidelines</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
