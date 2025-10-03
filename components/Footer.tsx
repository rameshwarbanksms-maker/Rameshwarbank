'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { ChevronDown, Phone, Mail } from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDropdownToggle = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const handleMouseEnter = (menu: string) => {
    if (typeof window !== 'undefined' && window.innerWidth > 992) {
      setActiveDropdown(menu);
    }
  };
  const handleMouseLeave = () => {
    if (typeof window !== 'undefined' && window.innerWidth > 992) {
      setActiveDropdown(null);
    }
  };

  return (
    <header className={styles.header}>
      {/* Top Bar: always visible */}
      <div className={styles.topBar}>
        <div className={styles.container}>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <Phone size={16} />
              <span>99203 10335</span>
            </div>
            <div className={styles.contactItem}>
              <Mail size={16} />
              <span>rcbborivali@rameshwarbank.com</span>
            </div>
          </div>
          <div className={styles.topLinks}>
            <Link href="/contact">CONTACT US</Link>
            <Link 
                  href="https://maps.app.goo.gl/ZgEQXNdFseNq9SYP6" 
                  target="_blank" 
                  rel="noopener noreferrer"
             >
                  BRANCH LOCATOR
            </Link>

            <Link href="/customer-grievance">CUSTOMER GRIEVANCE</Link>
            <Link href="/career">CAREER</Link>
            <Link href="/internet-banking">INTERNET BANKING</Link>
          </div>
        </div>
      </div>

      {/* Logo Bar */}
      <div className={styles.mainLogo}>
  <div className={styles.container}>
    {/* Left: Main Logo */}
    <Link href="/" className={styles.logo}>
      <div className={styles.logoContainer}>
        <Image 
          src="/banklogo.jpg"
          alt="Model Co-op Bank Logo"
          width={250} 
          height={100}
          priority
        />
      </div>
    </Link>

    {/* Right: Other logos (desktop only) */}
    <div className={styles.rightLogos}>
       <Image src="/DICGCLogo.jpg" alt="Logo 2" width={100} height={100} />
      <Image src="/qrcode.png" alt="Logo 1" width={100} height={100} />
     
      {/* <Image src="/up3.png" alt="Logo 3" width={50} height={50} /> */}
    </div>

    {/* Hamburger menu (tablet/mobile) */}
    <button 
      className={styles.mobileMenuButton}
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
     >
      ☰
    </button>
  </div>
</div>

      
      {/* Navigation Bar: visible only on desktop/laptop */}
      <div className={styles.mainNavs}>
        <div className={styles.container}>
          <nav className={styles.navigation}>
            <Link href="/" className={styles.navLink}>HOME</Link>
            
            {/* ABOUT */}
            <div
              className={styles.dropdown}
              onMouseEnter={() => handleMouseEnter('about')}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                className={styles.navLink}
                onClick={() => handleDropdownToggle('about')}
              >
                ABOUT US <ChevronDown size={16} />
              </button>
              {activeDropdown === 'about' && (
                <div className={`${styles.dropdownMenu} ${styles.open}`}>
                  <Link href="/about/overview">Bank Overview</Link>
                  <Link href="/about/directors">Board of Directors</Link>
                  <Link href="/about/management-team">Management Team</Link>
                  <Link href="/about/awards">Awards & Recognition</Link>
                </div>
              )}
            </div>

            {/* ACCOUNTS */}
            <div
              className={styles.dropdown}
              onMouseEnter={() => handleMouseEnter('accounts')}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                className={styles.navLink}
                onClick={() => handleDropdownToggle('accounts')}
              >
                ACCOUNTS <ChevronDown size={16} />
              </button>
              {activeDropdown === 'accounts' && (
                <div className={`${styles.dropdownMenu} ${styles.open}`}>
                  <Link href="/accounts/savings">Savings Account</Link>
                  <Link href="/accounts/current">Current Account</Link>
                  <Link href="/accounts/salary">Salary Account</Link>
                  <Link href="/accounts/basic-savings">Basic-savings Account</Link>
                  <Link href="/accounts/smart-kid">Smart-kid Account</Link>
                  <Link href="/accounts/corporate">Corporate Account</Link>
                </div>
              )}
            </div>

            {/* DEPOSITS */}
            <div
              className={styles.dropdown}
              onMouseEnter={() => handleMouseEnter('deposits')}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                className={styles.navLink}
                onClick={() => handleDropdownToggle('deposits')}
              >
                DEPOSITS <ChevronDown size={16} />
              </button>
              {activeDropdown === 'deposits' && (
                <div className={`${styles.dropdownMenu} ${styles.open}`}>
                  <Link href="/deposits/fixed">Fixed Deposits</Link>
                  <Link href="/deposits/recurring">Recurring Deposits</Link>
                  
                </div>
              )}
            </div>

            {/* LOANS */}
            <div
              className={styles.dropdown}
              onMouseEnter={() => handleMouseEnter('loans')}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                className={styles.navLink}
                onClick={() => handleDropdownToggle('loans')}
              >
                LOANS <ChevronDown size={16} />
              </button>
              {activeDropdown === 'loans' && (
                <div className={`${styles.dropdownMenu} ${styles.open}`}>
                  <Link href="/loans/housing">Housing Loan</Link>
                  <Link href="/loans/business">Business Loan</Link>
                  <Link href="/loans/vehicle">Vehicle Loan</Link>
                  <Link href="/loans/education">Educational Loan</Link>
                  <Link href="/loans/personal">Personal Loan</Link>
                  <Link href="/loans/cash">Cash Credit</Link>
                  <Link href="/loans/overdraft">Overdraft aginst other securities</Link>
                  <Link href="/loans/lic">LIC/NIC Aginst loan</Link>
                  <Link href="/loans/gold">Gold loan</Link>
                  <Link href="/loans/businessdailydeposit">Business Daily Deposit</Link>
                </div>
              )}
            </div>

            {/* SERVICES */}
            <div
              className={styles.dropdown}
              onMouseEnter={() => handleMouseEnter('awareness')}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                className={styles.navLink}
                onClick={() => handleDropdownToggle('awareness')}
              >
                AWARENESS <ChevronDown size={16} />
              </button>
              {activeDropdown === 'awareness' && (
                <div className={`${styles.dropdownMenu} ${styles.open}`}>
                  <Link href="/awareness/safety">SAFETY MEASURES</Link>
                  <Link href="/awareness/attacks">Types of attacks</Link>
                  <Link href="/awareness/guide">RBI Guidelines</Link>
                  <Link href="/awareness/cyberawareness">Cyber Security Awareness</Link>
                </div>
              )}
            </div>

            {/* DOWNLOADS */}
            <div
              className={styles.dropdown}
              onMouseEnter={() => handleMouseEnter('downloads')}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                className={styles.navLink}
                onClick={() => handleDropdownToggle('downloads')}
              >
                DOWNLOADS <ChevronDown size={16} />
              </button>
              {activeDropdown === 'downloads' && (
                <div className={`${styles.dropdownMenu} ${styles.open}`}>
                  <Link href="/">Application Forms</Link>
                  <Link href="/">Annual Reports</Link>
                  <Link href="/">Interest Rates</Link>
                </div>
              )}
            </div>

            <Link href="/" className={styles.navLink}>SERVICE CHARGES</Link>
            <Link href="/" className={styles.navLink}>ANNUAL REPORTS</Link>
          </nav>
        </div>
      </div>

     {/* Mobile Menu */}
{mobileMenuOpen && (
  <div className={styles.mobileMenu}>
    <Link href="/" onClick={() => setMobileMenuOpen(false)}>HOME</Link>

    {/* ABOUT Dropdown */}
    <div className={styles.mobileDropdown}>
      <button 
        className={styles.dropdownButton}
        onClick={() => setActiveDropdown(activeDropdown === 'about' ? null : 'about')}
      >
        ABOUT US
        <ChevronDown 
          size={16} 
          className={activeDropdown === 'about' ? styles.iconRotate : ''} 
        />
      </button>
      {activeDropdown === 'about' && (
        <div className={styles.dropdownContent}>
          <Link href="/about/overview" onClick={() => setMobileMenuOpen(false)}>Bank Overview</Link>
          <Link href="/about/directors" onClick={() => setMobileMenuOpen(false)}>Board of Directors</Link>
          <Link href="/about/management-team" onClick={() => setMobileMenuOpen(false)}>Management Team</Link>
          <Link href="/about/awards" onClick={() => setMobileMenuOpen(false)}>Awards & Recognition</Link>
        </div>
      )}
    </div>

    {/* ACCOUNTS Dropdown */}
    <div className={styles.mobileDropdown}>
      <button 
        className={styles.dropdownButton}
        onClick={() => setActiveDropdown(activeDropdown === 'accounts' ? null : 'accounts')}
      >
        ACCOUNTS
        <ChevronDown 
          size={16} 
          className={activeDropdown === 'accounts' ? styles.iconRotate : ''} 
        />
      </button>
      {activeDropdown === 'accounts' && (
        <div className={styles.dropdownContent}>
          <Link href="/accounts/savings" onClick={() => setMobileMenuOpen(false)}>Savings Account</Link>
          <Link href="/accounts/current" onClick={() => setMobileMenuOpen(false)}>Current Account</Link>
          <Link href="/accounts/salary" onClick={() => setMobileMenuOpen(false)}>Salary Account</Link>
          <Link href="/accounts/basic-savings" onClick={() => setMobileMenuOpen(false)}>Basic-savings Account</Link>
          <Link href="/accounts/smart-kid" onClick={() => setMobileMenuOpen(false)}>Smart-kid Account</Link>
          <Link href="/accounts/nro-nre" onClick={() => setMobileMenuOpen(false)}>Nro-Nre Account</Link>
          <Link href="/accounts/corporate" onClick={() => setMobileMenuOpen(false)}>Corporate Account</Link>
        </div>
      )}
    </div>

    {/* LOANS Dropdown */}
    <div className={styles.mobileDropdown}>
      <button 
        className={styles.dropdownButton}
        onClick={() => setActiveDropdown(activeDropdown === 'loans' ? null : 'loans')}
      >
        LOANS
        <ChevronDown 
          size={16} 
          className={activeDropdown === 'loans' ? styles.iconRotate : ''} 
        />
      </button>
      {activeDropdown === 'loans' && (
        <div className={styles.dropdownContent}>
          <Link href="/loans/housing" onClick={() => setMobileMenuOpen(false)}>Housing Loan</Link>
          <Link href="/loans/business" onClick={() => setMobileMenuOpen(false)}>Business Loan</Link>
          <Link href="/loans/vehicle" onClick={() => setMobileMenuOpen(false)}>Vehicle Loan</Link>
          <Link href="/loans/education" onClick={() => setMobileMenuOpen(false)}>Educational Loan</Link>
          <Link href="/loans/personal" onClick={() => setMobileMenuOpen(false)}>Personal Loan</Link>
           <Link href="/loans/overdraft">Overdraft aginst other securities</Link>
          <Link href="/loans/cash" onClick={() => setMobileMenuOpen(false)}>Cash Credit</Link>
          <Link href="/loans/lic" onClick={() => setMobileMenuOpen(false)}>LIC/NIC Against Loan</Link>
           <Link href="/loans/gold">Gold loan</Link>
                  <Link href="/loans/businessdailydeposit">Business Daily Deposit</Link>
        </div>
      )}
    </div>

    {/* Other Mobile Links */}
     {/* Deposit Dropdown */}
    <div className={styles.mobileDropdown}>
      <button 
        className={styles.dropdownButton}
        onClick={() => setActiveDropdown(activeDropdown === 'deposits' ? null : 'deposits')}
      >
        DEPOSIT
        <ChevronDown 
          size={16} 
          className={activeDropdown === 'deposits' ? styles.iconRotate : ''} 
        />
      </button>
      {activeDropdown === 'deposits' && (
        <div className={styles.dropdownContent}>
          <Link href="/deposits/fixed" onClick={() => setMobileMenuOpen(false)}>Fixed Deposit</Link>
          <Link href="/deposits/recurring" onClick={() => setMobileMenuOpen(false)}>Recurring Deposit</Link>
          </div>
      )}
    </div>

     {/* Other Mobile Links */}
     {/* Deposit Dropdown */}
    <div className={styles.mobileDropdown}>
      <button 
        className={styles.dropdownButton}
        onClick={() => setActiveDropdown(activeDropdown === 'awareness' ? null : 'awareness')}
      >
        AWARENESS
        <ChevronDown 
          size={16} 
          className={activeDropdown === 'awareness' ? styles.iconRotate : ''} 
        />
      </button>
      {activeDropdown === 'awareness' && (
        <div className={styles.dropdownContent}>
           <Link href="/awareness/safety" onClick={() => setMobileMenuOpen(false)}>SAFETY MEASURES</Link>
          <Link href="/awareness/attacks" onClick={() => setMobileMenuOpen(false)}>Types of attacks</Link>
          <Link href="/awareness/guide" onClick={() => setMobileMenuOpen(false)}> RBI Guidelines</Link>
          <Link href="/awareness/cyberawareness" onClick={() => setMobileMenuOpen(false)}>  Cyber security Awareness</Link>
          </div>
      )}
    </div>


    {/* Other Mobile Links */}
     {/* Deposit Dropdown */}
    <div className={styles.mobileDropdown}>
      <button 
        className={styles.dropdownButton}
        onClick={() => setActiveDropdown(activeDropdown === 'services-charges' ? null : 'services-charges')}
      >
        SERVICES CHARGES
        <ChevronDown 
          size={16} 
          className={activeDropdown === 'services-charges' ? styles.iconRotate : ''} 
        />
      </button>
      {activeDropdown === 'services-charges' && (
        <div className={styles.dropdownContent}>
           <Link href="/" onClick={() => setMobileMenuOpen(false)}>SERVICE CHARGES</Link>
         
          </div>
      )}
    </div>



     {/* Other Mobile Links */}
     {/* Deposit Dropdown */}
    <div className={styles.mobileDropdown}>
      <button 
        className={styles.dropdownButton}
        onClick={() => setActiveDropdown(activeDropdown === 'downloads' ? null : 'downloads')}
      >
        DOWNLOADS
        <ChevronDown 
          size={16} 
          className={activeDropdown === 'downloads' ? styles.iconRotate : ''} 
        />
      </button>
      {activeDropdown === 'downloads' && (
        <div className={styles.dropdownContent}>
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>Forms</Link>
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>Forms</Link>
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>Forms</Link>
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>Forms</Link>
         
          </div>
      )}
    </div>

     {/* Other Mobile Links */}
     {/* Deposit Dropdown */}
    <div className={styles.mobileDropdown}>
      <button 
        className={styles.dropdownButton}
        onClick={() => setActiveDropdown(activeDropdown === 'reports' ? null : 'reports')}
      >
        ANNUAL REPORTS
        <ChevronDown 
          size={16} 
          className={activeDropdown === 'reports' ? styles.iconRotate : ''} 
        />
      </button>
      {activeDropdown === 'reports' && (
        <div className={styles.dropdownContent}>
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>ANNUAL REPORTS</Link>
         
          </div>
      )}
    </div>



   
    
    
  </div>
)}

    </header>
  );
}
